import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import styles from './Todo.module.css';

export default class TodoList extends React.Component {
state={
    todos:[],
    todoToShow:"all",
    toggleAllComplete:true,
};
addTodo=(todo)=>{
    
this.setState( state=>({
    todos:[todo, ...state.todos]
}))
}
toggleComplete=(id)=>{
    this.setState(state=>({
        todos:state.todos.map(todo => {
            if (todo.id === id){
                return{
                    ...todo,
                    complete: !todo.complete
                };
            }else {
                return todo;
            }
        })
    }))
}

updateTodoToShow =(s)=>{
    this.setState({todoToShow: s})
}

handleDeleteTodo=(id)=>{
this.setState(state=>({
    todos:state.todos.filter(todo => todo.id !==id)
}))
}
removeCompleteTodo=()=>{
    this.setState(state=>({
        todos:this.state.todos.filter(todo => !todo.complete)
    }))
    }
    render() {
        let todos=[];

        if (this.state.todoToShow === "all"){
            todos =this.state.todos;
        }else if (this.state.todoToShow === "active"){
               todos= this.state.todos.filter(todo => !todo.complete)
            }else if(this.state.todoToShow === "active"){
               todos= this.state.todos.filter(todo =>!todo.complete);
            }
        
        return (
            <div>
                <TodoForm onSubmit={this.addTodo}/>
                {todos.map(todo => (
                    <Todo key={todo.id} 
                    toggleComplete={()=>this.toggleComplete(todo.id)} 
                    onDelete={()=> this.handleDeleteTodo(todo.id)}
                    todo={todo}/>
                ))}
                <div className={styles.left} >Todos left: {this.state.todos.filter(todo => !todo.complete).length}</div>
                <div>
                    <button className={styles.blue} onClick={()=> this.updateTodoToShow("all")}>All</button>
                    <button className={styles.green} onClick={()=> this.updateTodoToShow("active")}>Active</button>
                    <button className={styles.yellow}onClick={()=> this.updateTodoToShow("complete")}>Complete</button>
                </div>
               
                <div>
                    <button className={styles.orange} onClick={()=>
                    this.setState( state=> ({
                        todos:state.todos.map(todo=>({
                            ...todo,
                            complete:this.state.toggleAllComplete
                        })),
                        toggleAllComplete:!this.state.toggleAllComplete
                    }))
                    }
                    >
                    Toggle All {`${this.state.toggleAllComplete}`}</button>
                </div>
                {this.state.todos.some(todo => todo.complete) ? (<div>
                    <button className={styles.red} onClick={this.removeCompleteTodo}>Remove Complete</button>
                </div>)
                : null}
            </div>
        )
    }
}
