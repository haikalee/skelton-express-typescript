import Controller from "../Controller";
import { Request, Response } from "express";
import Todo from "../../model/TodoModel";

const TodoModel = new Todo()

export default class TodoController extends Controller {
    list(req: Request, res: Response) {
        // get todos
        // TodoModel.list.then(data => {
        //     console.log(data)
        // })
    }
}