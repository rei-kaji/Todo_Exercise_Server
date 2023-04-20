import Todo from "../models/todo.models.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Todo.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createOrUpdateTodo = async (req, res) => {
  const { id, name, checked } = req.body;
  try {
    let todo;
    if (id) {
      todo = await Todo.findByIdAndUpdate(id, { checked }, { new: true });
    } else {
      todo = new Todo({ name, checked });
      await todo.save();
    }
    res.status(200).json(todo);
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
