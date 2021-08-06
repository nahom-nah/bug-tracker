import { InputError } from "../generated/graphql";


export const toErrorMap = (error:InputError[]) => {
    const err: Record<string,string>  = {}

    error.map(({field, message}) => {
        err[field]= message
    })
    return err
}