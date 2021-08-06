import { MikroORM } from "@mikro-orm/core";
import { DB_NAME, DB_PASSWORD, __PROD__ } from "./constants";
import { Post } from "./entities/post";
import path from 'path'
import { User } from "./entities/user";

export default  {
    migrations: {
        path: path.join(__dirname,'/migrations'), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    dbName: DB_NAME,
    entities:[Post, User],
    password: DB_PASSWORD,
    type: 'postgresql',
    debug: !__PROD__
    
} as Parameters<typeof MikroORM.init>[0]