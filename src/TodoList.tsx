import React, { Fragment, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoItem, changeInputValue, deleteTodoItem, getInitList } from "./store/actions";
import TodoItem from "./TodoItem";
import { SubmitButton } from "./TodoList.style";

interface TodoListStates {
  inputValue: string;
  list: string[]
}

const TodoList = () => {

  const { inputValue, list } = useSelector((state: TodoListStates) => ({
    inputValue: state.inputValue,
    list: state.list
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitList());
  }, [dispatch]);

  const handleInputChange = useCallback((evt: any) => {
    dispatch(changeInputValue(evt.target.value))
  }, [dispatch]);

  const handleButtonClick = useCallback(()=> {
    dispatch(addTodoItem());
  }, [dispatch]);

  const handleItemDelete = useCallback((index: number) => {
    dispatch(deleteTodoItem(index));
  }, [dispatch]);

  return (
    <Fragment>
      <div>
        <label htmlFor="inputFrame">Input Area</label>
        <input
          id="inputFrame"
          className="inputFrame"
          value={inputValue}
          onChange={handleInputChange}
        />
        <SubmitButton onClick={handleButtonClick}>Submit</SubmitButton>
      </div>
      <ul>
      {
        list.map((item, index) => {
          return (
            <TodoItem
              content={item}
              index={index}
              handleItemDelete={handleItemDelete}
              key={item}
            />)
        })
      }
      </ul>
    </Fragment>
  )

}

export default React.memo(TodoList);
