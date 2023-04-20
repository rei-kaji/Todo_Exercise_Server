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
    const updatedTask = await Todo.findByIdAndUpdate(
      id,
      { checked },
      { new: true }
    );
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addTask = async (req, res) => {
  const { name, checked } = req.body;
  try {
    const newTask = new Todo({ name, checked });
    await newTask.save();
    res.status(200).json(newTask);
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
