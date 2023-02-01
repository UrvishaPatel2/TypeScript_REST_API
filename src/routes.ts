import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import validResource from './middleware/validateResource';
import { createUserSchema } from "./schema/user.schema";

function routes(app: Express) {
    app.get('/healthCheck', (req:Request, res:Response) => res.sendStatus(200))

    app.post("/api/users",validResource(createUserSchema), createUserHandler)
}

export default routes;