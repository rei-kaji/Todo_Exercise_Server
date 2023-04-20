import express from "express";
import {
  getTasks,
  deleteAllTasks,
  createOrUpdateTodo,
} from "../mongodb/controller/todo.controller.js";

const router = express.Router();

router.get("/tasks", getTasks);
router.post("/update", createOrUpdateTodo);
router.post("/deleteAll", deleteAllTasks);

export default router;
