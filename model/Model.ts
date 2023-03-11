import { PrismaClient } from "@prisma/client";

export default class Model {
    db: PrismaClient

    constructor() {
        this.db = new PrismaClient()
    }
}