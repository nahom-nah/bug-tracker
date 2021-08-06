import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";

export type myContext = {
    em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>,
    req: Request,
    res: Response
}