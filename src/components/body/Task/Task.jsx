import React, { useState, lazy, Suspense, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import "./Task.css";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import Icon1 from "../../../utils/images/icon1.png";
import Icon2 from "../../../utils/images/icon2.png";
import Calendar from "../../../utils/images/calendar.png";
import People from "../../../utils/images/people.png";
import BodyButton1 from "../../../utils/images/bodytopright1.png";
import BodyButton2 from "../../../utils/images/bodytopright2.png";
import { useSelector } from "react-redux";

const CardTodo = lazy(() => import("./Card/CardTodo"));

function Body() {
  const todos = useSelector((state) => state.todos);

  const ids = todos.map((todo) => {
    return todo.id;
  });

  const initialData = {
    tasks: todos,
    columns: {
      "column-1": {
        id: "column-1",
        title: "TO-DO",
        taskIds: [],
      },
      "column-2": {
        id: "column-2",
        title: "Done",
        taskIds: [],
      },
    },
    // Facilitate reordering of the columns
    columnOrder: ["column-1", "column-2"],
  };

  const reorderColumnList = (sourceCol, startIndex, endIndex) => {
    const newTaskIds = Array.from(sourceCol.taskIds);
    const [removed] = newTaskIds.splice(startIndex, 1);
    newTaskIds.splice(endIndex, 0, removed);

    const newColumn = {
      ...sourceCol,
      taskIds: newTaskIds,
    };
    return newColumn;
  };

  const [state, setState] = useState(initialData);
  useEffect(() => {
    setState({
      tasks: todos,
      columns: {
        "column-1": {
          id: "column-1",
          title: "TO-DO",
          taskIds: ids,
        },
        "column-2": {
          id: "column-2",
          title: "Done",
          taskIds: [],
        },
      },
      // Facilitate reordering of the columns
      columnOrder: ["column-1", "column-2"],
    });
  }, [todos]);

  const onDragEnd = (result) => {
    const { destination, source } = result;
    console.log("result", result);
    // If user tries to drop in an unknown destination
    if (!destination) return;

    // if the user drags and drops back in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // If the user drops within the same column but in a different positoin
    const sourceCol = state.columns[source.droppableId];
    const destinationCol = state.columns[destination.droppableId];
    /*     console.log("state", state); */
    if (sourceCol.id === destinationCol.id) {
      const newColumn = reorderColumnList(
        sourceCol,
        source.index,
        destination.index
      );

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };
      setState(newState);
      return;
    }

    // If the user moves from one column to another
    const startTaskIds = Array.from(sourceCol.taskIds);
    const [removed] = startTaskIds.splice(source.index, 1);

    const newStartCol = {
      ...sourceCol,
      taskIds: startTaskIds,
    };

    const endTaskIds = Array.from(destinationCol.taskIds);
    endTaskIds.splice(destination.index, 0, removed);
    const newEndCol = {
      ...destinationCol,
      taskIds: endTaskIds,
    };

    setState();
    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      },
    };

    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="body">
        <div className="body_top">
          <div className="body_top_left">
            <WestOutlinedIcon />
            <div className="body_top_left_item">
              <img src={Icon1} alt="" />
              <h3>SPR-06</h3>
            </div>
            <div className="body_top_left_item">
              <img src={Icon2} alt="" />
              <h3>TEAM-10</h3>
            </div>
            <h3>New Sprint Name</h3>
            <img src={Calendar} alt="" />
            <img src={People} alt="" />
            <button>Complete Sprint</button>
          </div>
          <div className="body_top_right">
            <button>
              <img src={BodyButton1} alt="" />
            </button>
            <button>
              <img src={BodyButton2} alt="" />
            </button>
          </div>
        </div>
        <div className="body_card">
          {state.columnOrder.map((columnId) => {
            const column = state.columns[columnId];
            const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
            return (
              <Suspense fallback={<div>Loading...</div>}>
                <CardTodo key={column.id} column={column} tasks={tasks} />
              </Suspense>
            );
          })}
        </div>
      </div>
    </DragDropContext>
  );
}

export default Body;
