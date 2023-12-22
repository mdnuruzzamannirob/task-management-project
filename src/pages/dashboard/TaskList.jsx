import { useDrop } from "react-dnd";
import Task from "./Task";
import axios from "axios";

/* eslint-disable react/prop-types */
const TaskList = ({
  singleStatus,
  todo,
  ongoing,
  complete,
  handleUpdateData,
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItem(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  let text = "Todo";
  let bg = "bg-gray-500";
  let taskToMap = todo;

  if (singleStatus === "Ongoing") {
    text = "Ongoing";
    bg = "bg-sky-500";
    taskToMap = ongoing;
  }

  if (singleStatus === "Complete") {
    text = "Complete";
    bg = "bg-emerald-600";
    taskToMap = complete;
  }

  const addItem = (id) => {
    axios
      .patch(
        `https://task-management-project-server.vercel.app/api/v1/update-task/${id}`,
        {
          taskToMap: singleStatus,
        }
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          handleUpdateData();
        }
      });
  };

  return (
    <div ref={drop} className={` rounded-md ${isOver ? "bg-slate-100" : ""}`}>
      <div
        className={`${bg} text-white font-medium  rounded-md text-center p-3 px-4 `}
      >
        {text}{" "}
        <span className="badge ml-2 border-none">{taskToMap.length}</span>
      </div>
      {taskToMap.length > 0 &&
        taskToMap.map((task) => (
          <Task
            key={task._id}
            task={task}
            handleUpdateData={handleUpdateData}
          />
        ))}
    </div>
  );
};

export default TaskList;
