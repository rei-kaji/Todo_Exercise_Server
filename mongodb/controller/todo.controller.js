import Todo from "../models/todo.models.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Todo.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id, checked } = req.body;
  try {
    await Todo.updateOne({ _id: id }, { checked }, { new: true });
    res.status(200).json("Successfully updated task!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addTask = async (req, res) => {
  const { name, checked } = req.body;
  try {
    const existingTask = await Todo.findOne({ name });
    if (existingTask) {
      return res.status(409).json({ message: "Task already exists" });
    }

    const newTask = new Todo({ name, checked });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.body;
  try {
    await Todo.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "Task deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteAllTasks = async (req, res) => {
  try {
    await Todo.deleteMany();
    res.status(200).json({ message: "All tasks deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
