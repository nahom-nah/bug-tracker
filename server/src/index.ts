import {MikroORM} from '@mikro-orm/core'
import mikroConfig from './mikro-orm.config'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import {buildSchema} from 'type-graphql'
import { postResolver } from './resolvers/postResolver'
import { PORT } from './constants'
import { userResolver } from './resolvers/userResolver'
import cors from 'cors'

const main = async () => {
    
    const orm = await MikroORM.init(mikroConfig)
    await orm.getMigrator().up()
    
    const app = express()
  
    app.use(cors({
        origin:'http://localhost:3000',
        credentials:true
    }))
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [postResolver, userResolver],
            
        }),
        debug: false,
        context: ({req, res}) => ({em: orm.em, req, res})
    })

    apolloServer.applyMiddleware({app, cors:false})

    const port = PORT || 9000;
    app.listen(port, () => {
        console.log(`server is up and running on port ${port}`)
    })

}

main().catch(err => {
    console.error(err)
})