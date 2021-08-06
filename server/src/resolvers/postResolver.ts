import {Query, Resolver} from 'type-graphql'


@Resolver()
export class postResolver {
    @Query(()=>String)
    hello(): String {
        return 'hello nahom'
    }
}