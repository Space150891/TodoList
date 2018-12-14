import React, { Component } from 'react';
import './TodoItem.scss';
import { ITodoItemComponent} from '../../model/interface'
import DeleteIcon from '../../img/delete.svg'
import CheckBoxIcon from '../../img/check-box-empty.svg'
import OutlineIcon from '../../img/outline-done.svg'
import EditIcon from '../../img/edit-icon.svg'
import moment from 'moment';
import TodoService from '../../rxjs/service';

class TodoItem extends Component<ITodoItemComponent, {}> {
    state = {
        isEdit: false,
        editableText: ''
    }
    inputRef = React.createRef()

    doneHandler = () => {
        TodoService.toggle(this.props.config.id);
    }
    removerHandler = () => {
        TodoService.remove(this.props.config.id);
    }
    editHandler = () => {
        this.setState({
            isEdit: true
        })
    }
    editTextHandler = (e: any) => {
        this.setState({
            editableText: e.target.value
        })
    }
    componentDidUpdate = () => {
        const editInput = document.getElementById('editInput')
        if(editInput) {
            editInput.focus()
        }
    }

    keyUpHandler = (e: any) => {
        if(this.state.editableText && this.state.editableText.trim().length > 0) {
            if(e.keyCode == 13) {
                e.preventDefault()
                TodoService.change(this.props.config.id, this.state.editableText);
                this.setState({
                    isEdit: false,
                    editableText: '',
                })
            }
            if(e.keyCode == 27) {
                e.preventDefault()
                this.setState({
                    isEdit: false,
                    editableText: ''
                })
            }
        }
    }

    render() {
        const {done, title, date} = this.props.config
        return(
            <div className='TodoItem'>
                <div className="TodoItem__mainContainer">
                    <div className="TodoItem__marker"><img src={done ? OutlineIcon : CheckBoxIcon} alt='Done' onClick={this.doneHandler}/></div>
                    {this.state.isEdit 
                        ? <input id='editInput' onKeyUp={this.keyUpHandler} className='TodoItem__editInput' type='text' value={this.state.editableText} onChange={this.editTextHandler} />
                        : <div className={done ? "TodoItem__text through" : "TodoItem__text"}>{title}<div className='TodoItem__doneLabel'>DONE</div></div>
                    }
                    <div className="TodoItem__date">{moment(date).format('Do MMM YYYY')}</div>
                    {done 
                        ? <div className="TodoItem__delete" onClick={this.removerHandler}><img src={DeleteIcon} alt='Delete'/></div>
                        : <div className="TodoItem__edit" onClick={this.editHandler}><img src={EditIcon} alt='Edit'/></div>
                    }
                </div>
            </div>
        )
    }
}

export default TodoItem