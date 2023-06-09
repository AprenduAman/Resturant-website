//files which have the methods for the endpoint to communicate with the database
const Todo = require('../models/todo');

// getAllTodo: The find() method will return all the todo in the collection. If the collection is empty then it will return a 404 error.
exports.getAllTodo = (req, res) => {
    Todo.find()
        .then((todo) => res.json(todo))
        .catch((err) => {
            res
                .status(404)
                .json({ message: "Todo not found", error: err.message })
        });
};


// postCreateTodo: The create() method will create a todo and return a success message. Otherwise, it will return a 400 error.
exports.postCreateTodo = (req, res) => {
    Todo.create(req.body)
        .then((data) => {
            res.json({ message: "Todo added successfully", data })
        })
        .catch((err) => {
            res
                .status(400)
                .json({ message: "Failed to add todo", error: err.message })
        });
};

// putUpdateTodo: The findByIdAndUpdate() will require two parameters the id and data of the todo to be updated. The id parameter will be extracted from req.params.id.
exports.putUpdateTodo = (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => {
            res.json({ message: "Updated successfully", data })
        })
        .catch((err) => {
            res
                .status(400)
                .json({ message: "Failed to update todo", error: err.message })
        });
};

// deleteTodo: The findByIdAndRemove() method will require only one parameter that is the id of the todo.
exports.deleteTodo = (req, res) => {
    Todo.findByIdAndRemove(req.params.id, req.body)
        .then((data) => {
            res.json({ message: "Todo deleted successfully", data })
        })
        .catch((err) => {
            res
                .status(404)
                .json({ message: "Todo not found", error: err.message })
        });
};