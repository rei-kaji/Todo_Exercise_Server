import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  name: { type: String, require: true },
  checked: { type: Boolean, require: true },
});

const Todo = mongoose.model("Todos", TodoSchema);

export default Todo;
