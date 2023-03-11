import { Express } from "express";
import TodoRouter from "../controller/todo/TodoRouter";

export const Router = (r: Express) => {
    r.use("/todos", TodoRouter)
}