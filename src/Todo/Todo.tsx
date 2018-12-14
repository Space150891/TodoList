import React, { Component } from 'react';
import './Todo.scss';
import { ITodo,ITodoItem } from '../model/interface'
import TodoHeader from './TodoHeader/TodoHeader';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';
import TodoFilter from './TodoFilter/TodoFilter'
import TodoService from '../rxjs/service';

class Todo extends Component<{}, ITodo> {

    state = {
        todoList: [],
        filter: 'all'
    }

    componentDidMount = () => {
        TodoService.todos$
            .subscribe((todos: ITodoItem[]) => this.setState({ todoList: todos }));
    }

    handleAdd = (title: string) => {
        TodoService.add(title);
    }

    filterHandler = (type: string) => {
        this.setState({
            filter: type
        })
    }

    render() {
        return (
            <div className='Todo'>
                <TodoHeader />
                <TodoForm addTodoHandler={this.handleAdd} />
                <TodoList filter={this.state.filter} list={this.state.todoList} />
                {this.state.todoList.length > 0 && <TodoFilter filter={this.state.filter} filterFunc={this.filterHandler} />}
            </div>
        )
    }
}

export default Todo