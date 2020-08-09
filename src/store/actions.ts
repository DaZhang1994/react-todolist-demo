import makeActionCreator from "./tools";

export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';
export const GET_INIT_LIST = 'GET_INIT_LIST';
export const SET_LIST = 'SET_LIST';

export const changeInputValue = makeActionCreator(CHANGE_INPUT_VALUE, 'value');
export const addTodoItem = makeActionCreator(ADD_TODO_ITEM);
export const deleteTodoItem = makeActionCreator(DELETE_TODO_ITEM, 'index');
export const getInitList = makeActionCreator(GET_INIT_LIST);
export const setList = makeActionCreator(SET_LIST, 'list')
