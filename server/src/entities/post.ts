import { Entity, PrimaryKey, Property } from '@mikro-orm/core'
import {Authorized} from 'type-graphql'
@Entity()
export class Post {
    @PrimaryKey()
    id!: String

    @Property({type:'date'})
    createdAt = new Date()

    @Property({type:'date', onUpdate: ()=>new Date()})
    updatedAt = new Date()

    @Property({ type: 'text' })
    description!: string
}