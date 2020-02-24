
// Model / data
class Todo {
    constructor(title) {
        Todo.idx++
        this.id = Todo.idx
        this.title = title
        this.completed = false
    }
}
Todo.idx = 0;

// service
class TodoService {
    constructor() {
        this.todos = []
    }
    addTodo(title) {
        let newTodo = new Todo(title)
        this.todos.push(newTodo)
    }
    editTodo(id, newTitle) {
        let todo = this.todos.find(todo => todo.id === id)
        todo.title = newTitle
    }
    completeTodo(id) {
        let todo = this.todos.find(todo => todo.id === id)
        todo.completed = !todo.completed
    }
    deleteTodo(id) {
        let idx = this.todos.findIndex(todo => todo.id === id)
        this.todos.splice(idx, 1)
    }
    clearCompleted() {
        for (let i = 0; i < this.todos.length; i++) {
            let todo = this.todos[i]
            if (todo.completed)
                this.todos.splice(i, 1)
        }
    }
    compelteAll() {
        let areAllCompleted = this.todos.every(todo => todo.completed)
        for (let i = 0; i < this.todos.length; i++) {
            this.todos[i].completed = !areAllCompleted
        }
    }
    viewTodos(flag) {
        //..
        if (flag === "ALL")
            this.todos.forEach(todo => console.log(todo))
        if (flag === "Active")
            this.todos.filter(todo => !todo.completed).forEach(todo => console.log(todo))
        if (flag === "Completed")
            this.todos.filter(todo => todo.completed).forEach(todo => console.log(todo))
    }
}


let service = new TodoService();
