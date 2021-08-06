import { User } from './../entities/user';
import { myContext } from 'src/types';
import {Arg, Ctx,  Field,  InputType, Mutation, ObjectType, Query, Resolver} from 'type-graphql'
import crypto from 'crypto'

@InputType()
class InputFields {
    @Field()
    username: string;

    @Field()
    email: string;

    @Field()
    password: string
}

@ObjectType()
class InputError{
    @Field()
    field: string

    @Field()
    message:string
}

@ObjectType()
class UserResponse{

    @Field(()=>[InputError], {nullable:true})
    errors?: InputError[]

    @Field(()=>User, {nullable:true})
    user?: User

    
}

@Resolver()
export class userResolver {

    @Query(()=>String) 
    me():String{
    return 'hello from user resolver'
    }
    @Mutation(() => UserResponse )
    async register(
        @Ctx() { em }: myContext,
        @Arg('options') options: InputFields
    ): Promise<UserResponse>{
      
        if (options.username.length < 2) {
            return {
                errors: [{
                    field: 'username',
                    message: 'username is too short'
                }]
            }
        }

         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(options.email)) {
            return {
                errors: [{
                    field: 'email',
                    message: 'invalid email address'
                }]
            }
        }

        if (options.password.length < 8) {
            return {
                errors: [{
                    field: 'password',
                    message: "password length is too short"
                }]
            }
        }
       

        const salt = crypto.randomBytes(16).toString('hex')
        const hashPass = crypto.pbkdf2Sync(options.password, salt, 10000, 64, 'sha512').toString('hex')
        
        const user = em.create(User, { username: options.username, password: hashPass, salt: salt, email: options.email })
        
        try {
            await em.persistAndFlush(user)
        } catch (err) {
            if (err.code === '23505' && err.detail.includes('already exists')) {
               
                if (err.detail.includes('username')) {
                     return {
                    errors: [{
                        field: 'username',
                        message:"username  already exit"
                    }]
                }
                } else if (err.detail.includes('email')) {
                     return {
                    errors: [{
                        field: 'email',
                        message:"email already exit"
                    }]
                }
                }
                
               
            }
        }

        return {
            user
        }
        
    }
}