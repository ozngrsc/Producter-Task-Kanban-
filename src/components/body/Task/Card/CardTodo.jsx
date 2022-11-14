import React from "react";
import "./CardTodo.css";
import CardItem from "./CardItem/CardItem";
import { useSelector } from "react-redux";
import { Draggable, Droppable } from "react-beautiful-dnd";

function CardTodo({ column, tasks }) {
  const todos = useSelector((state) => state.todos);

  const todoPointsArray = todos.map((todo) => {
    return Number(todo.point);
  });
  const totalTodoPoints = todoPointsArray.reduce((a, b) => a + b, 0);

  return (
    <div className="card">
      <div className="card_header">
        <div className="card_header_left">
          <input type="radio" />
          <h4>{column.title}</h4>
        </div>
        <div className="card_header_right">
          <button>{totalTodoPoints}</button>
        </div>
      </div>
      <hr />
      <Droppable droppableId={column.id}>
        {(droppableProvided, droppableSnapshot) => (
          <div
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {tasks.map((task, index) => {
              return (
                task && (
                  <Draggable
                    key={task.id}
                    draggableId={`${task.id}`}
                    index={index}
                  >
                    {(draggableProvided, draggableSnapshot) => (
                      <div
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                      >
                        <CardItem
                          key={index}
                          id={index}
                          title={task.title}
                          issue={task.issueType}
                          priority={task.priority}
                          assignee={task.assignee}
                          point={task.point}
                        />
                      </div>
                    )}
                  </Draggable>
                )
              );
            })}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default CardTodo;
