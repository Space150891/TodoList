import React, { Component } from 'react';
import './TodoList.scss';
import TodoItem from '../TodoItem/TodoItem'
import { ITodoList} from '../../model/interface'

class TodoList extends Component<ITodoList, {}> {
    state = {}

    render() {
        const { filter, list } = this.props
        let itemsList = null;
        if(list.length > 0) {
            let filteredList = null
            switch (filter) {
                case 'completed': 
                    filteredList = list.filter((item,i) => {
                        return item.done === true
                    })
                    break
                case 'active': 
                    filteredList = list.filter((item, i) => {
                        return item.done === false
                    })
                    break
                default: 
                    filteredList = list
                    break
            }
            itemsList = filteredList.map((item, i) => {
                return (
                    <TodoItem key={item.id} config={item} index={i}/>
                )
            }) 

            
        }
        return(
            <div className='TodoList'>
                {itemsList}
            </div>
        )
    }
}

export default TodoList