import express, { Router } from "express";
import TodoController from "./TodoController";

/**
 * Intitialize controller
 */
const controller = new TodoController()

/**
 * Create post router
 */
const router = Router();

/**
 * Set Router
 */
router.get("/list", controller.list)

/**
 * export router
 */
export default router