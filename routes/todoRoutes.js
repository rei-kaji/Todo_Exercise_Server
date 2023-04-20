import express from "express";
import {
  getTasks,
  deleteAllTasks,
  createTask,
  updateTask,
} from "../mongodb/controller/todo.controller.js";

const router = express.Router();

router.get("/tasks", getTasks);
router.post("/update", updateTask);
router.post("/add", createTask);
router.post("/deleteAll", deleteAllTasks);

export default router;
