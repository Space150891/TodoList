// import { any } from "prop-types";

export interface ITodoItem {
    id: number,
    done: boolean,
    title: string,
    date: string,
}

export interface ITodoItemComponent {
    key: number,
    config: {
        id: number,
        done: boolean,
        title: string,
        date: string,
    },
    index: number;
}

export interface ITodo {
    todoList: ITodoItem[],
    filter: string
}

export interface ITodoList {
    list: ITodoItem[],
    filter?: string,
}

export interface IService{
        update$: any,
        create$: any
}

export interface ITodoFilter{
    filterFunc: (type: string) => void,
    filter: string
}

export interface ITodoFormState{
    text: string
}
export interface ITodoFormProps{
    addTodoHandler: (text: string) => void
}