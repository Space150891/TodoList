import React, { Component } from 'react';
import './TodoFilter.scss';
import {ITodoFilter} from '../../model/interface'

class TodoFilter extends Component<ITodoFilter, {}> {
    state = {}

    render() {
        const {filter} = this.props
        return(
            <div className='TodoFilter'>
                <div className={`showAll__button ${filter == 'all' && 'activeButton'}`} onClick={this.props.filterFunc.bind(this, 'all')}>SHOW ALL</div>
                <div className={`showCompleted__button ${filter == 'completed' && 'activeButton'}`} onClick={this.props.filterFunc.bind(this, 'completed')}>SHOW COMPLETED</div>
                <div className={`showNotCompleted__button ${filter == 'active' && 'activeButton'}`} onClick={this.props.filterFunc.bind(this, 'active')}>SHOW ACTIVE</div>
            </div>
        )
    }
}

export default TodoFilter

