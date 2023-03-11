import Model from "./Model";

export default class Todo extends Model {
    constructor() {
        super()
    }

    get list() {
        const datas = this.db.todos.findMany()
        return datas
    }
}