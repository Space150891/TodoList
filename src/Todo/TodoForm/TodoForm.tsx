import React, { Component } from 'react';
import './TodoForm.scss';
import {ITodoFormState, ITodoFormProps} from '../../model/interface'

class TodoForm extends Component<ITodoFormProps, ITodoFormState> {
    state = {
        text: ''
    }

    handleChange = (e: any) => {
            this.setState({
                text: e.target.value
            })
    }
    addHandler = () => {
        if(this.state.text && this.state.text.trim().length > 0) {
            this.props.addTodoHandler(this.state.text)
            this.setState({
                text: ''
            })
        }
    }
    clearHandler = () => {
        this.setState({
            text: ''
        })
    }
    keyUpHandler = (e: any) => {
        if(this.state.text && this.state.text.trim().length > 0) {
            if(e.keyCode == 13) {
                e.preventDefault()
                this.props.addTodoHandler(this.state.text)
                this.setState({
                    text: ''
                })
            }
            if(e.keyCode == 27) {
                e.preventDefault()
                this.setState({
                    text: ''
                })
            }
        }
    }

    componentDidMount = () => {
        const formInput = document.getElementById('mainFormInput')
        if(formInput) {
            formInput.focus();
        }
    }

    render() {
        return(
            <div className='TodoForm'>
               <div className="TodoForm__item TodoForm__label">I NEED TO DO:</div> 
               <input className='TodoForm__item TodoForm__input' 
                    id='mainFormInput'
                    value={this.state.text} 
                    type='text' 
                    onChange={this.handleChange} 
                    onKeyUp={this.keyUpHandler}
                />
               <div className="TodoForm__item TodoForm__actions">
                    <div className="addButton" onClick={this.addHandler}>ADD</div>
                    <div className="clearButton" onClick={this.clearHandler}>CLEAR</div>
               </div>
            </div>
        )
    }
}

export default TodoForm