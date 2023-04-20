import express from "express";
import {
  getTasks,
  deleteAllTasks,
  addTask,
  updateTask,
} from "../mongodb/controller/todo.controller.js";

const router = express.Router();

router.get("/tasks", getTasks);
router.post("/update", updateTask);
router.post("/add", addTask);
router.post("/deleteAll", deleteAllTasks);

export default router;
