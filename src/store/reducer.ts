import { createReducer } from "@reduxjs/toolkit";
import produce from "immer";
import { ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, SET_LIST } from "./actions";

const defaultState = produce({
    inputValue: '',
    list: ["AAA", "BBB"]
  }, () => {});

const reducer = createReducer(defaultState, {
  [CHANGE_INPUT_VALUE]: (state, action) => {
    state.inputValue = action.value;
  },
  [ADD_TODO_ITEM]: (state) => {
    state.list.push(state.inputValue);
    state.inputValue = '';
  },
  [DELETE_TODO_ITEM]: (state, action) => {
    state.list.splice(action.index, 1);
  },
  [SET_LIST]: (state, action) => {
    state.list = action.list;
  }
})

export default reducer;
