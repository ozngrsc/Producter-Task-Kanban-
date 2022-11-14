import React, { useState } from "react";
import "./Modal.css";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import { useSelector } from "react-redux";

function Modal({ setModal }) {
  const todos = useSelector((state) => state.todos);
  const last = todos.findLast((x) => true);
  const [value, setValue] = useState("");
  const [issue, setIssue] = useState("TSK");
  const [priority, setPriority] = useState("medium");
  const [assignee, setAssignee] = useState("maria");
  const [point, setPoint] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (value) {
      dispatch(
        addTodo({
          id: last ? last.id + 1 : 0,
          title: value,
          issueType: issue,
          priority: priority,
          assignee: assignee,
          point: point,
        })
      );
    }
    setModal(false);
  };

  return (
    <div className="modal_backshadow">
      <div className="modal">
        <button className="delete_icon" onClick={() => setModal(false)}>
          <CloseIcon />
        </button>
        <form onSubmit={onSubmit} className="modal_form">
          <div className="modal_issueType">
            <h4>Issue type</h4>
            <select
              value={issue}
              onChange={(event) => setIssue(event.target.value)}
              className="modal_select"
              name="issueType"
            >
              <option value="TSK">TSK</option>
              <option value="EPC">EPC</option>
            </select>
          </div>
          <div className="modal_desc">
            <h4>Description</h4>
            <textarea
              placeholder="Add a description..."
              value={value}
              onChange={(event) => setValue(event.target.value)}
              required
              name="description"
              cols="50"
              rows="4"
            ></textarea>
          </div>
          <div className="modal_priority">
            <h4>Priority</h4>
            <select
              value={priority}
              onChange={(event) => setPriority(event.target.value)}
              className="modal_select"
              name="priority"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="modal_assignee">
            <h4>Assignee</h4>
            <select
              value={assignee}
              onChange={(event) => setAssignee(event.target.value)}
              className="modal_select"
              name="assignee"
            >
              <option value="maria">Maria Grider</option>
              <option value="neil">Neil Larkins</option>
              <option value="stephanie">Stephanie Klum</option>
            </select>
          </div>
          <div className="modal_point">
            <h4>Story point estimate</h4>
            <input
              value={point}
              onChange={(event) => setPoint(event.target.value)}
              required
              type="number"
              placeholder="0"
            />
          </div>
          <div className="modal_buttons">
            <button
              className="modal_button cancel_button"
              onClick={() => setModal(false)}
            >
              Cancel
            </button>
            <button type="submit" className="modal_button create_button">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
