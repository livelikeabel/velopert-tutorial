import React from "react";
import "./TodoListTemplate.css";

const TodoListTemplate = ({ form, children }) => {
  return (
    <main className="todo-list-template">
      <div className="title">오늘 할 일</div>
      <section className="form-wrapper">form{form}</section>
      <section className="todos-wrapper">children: {children}</section>
    </main>
  );
};

export default TodoListTemplate;
