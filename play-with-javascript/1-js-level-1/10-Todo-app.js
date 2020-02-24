


/**
 * 
 *  Todo =>  {id,title,completed}
 * 
 */

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
        this.todos = this.todos.concat(newTodo)
    }
    editTodo(idx, newTitle) {
        //..
    }
    completeTodo(idx) {
        //..
    }
    deleteTodo(idx) {
        //..
    }
    clearCompleted() {
        //..
    }
    compelteAll() {
        //..
    }
    viewTodos(flag) {
        //..
        if (flag === "ALL")
            this.todos.forEach(todo => console.log(todo))
    }
}


let service = new TodoService();
service.addTodo("go to BLT")
service.addTodo("go to ROOM")
service.viewTodos('ALL')
