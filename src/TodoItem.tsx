import React from "react";

const TodoItem = (props: any) => {

  const { content, index, handleItemDelete } = props;

  return (
    <li onClick={() => handleItemDelete(index)}>{content}</li>
  )

}

export default React.memo(TodoItem);
