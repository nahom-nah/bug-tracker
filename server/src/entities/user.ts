import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
@Entity()
export class User {
    @Field()
    @PrimaryKey()
    id!: number

    @Field(()=>String)
    @Property({ type: 'text' })
    createdAt = new Date()

    @Field(() => String)
    @Property({ type: 'text', onUpdate: () => new Date() })
    updatedAt = new Date()

    @Field()
    @Property({ type: 'text', unique:true })
    username!: string
    
    @Field()
    @Property({ type: 'text', unique:true })
    email!: string

    @Field()
    @Property({ type: 'text' })
    salt!: string
    
    @Field()
    @Property({ type: 'text' })
    password!: string
    
    @Field(()=>Boolean)
    @Property({ type: Boolean, default:false })
    isSuperAdmin!: boolean
}