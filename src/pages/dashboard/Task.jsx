import axios from "axios";
import { useDrag } from "react-dnd";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
/* eslint-disable react/prop-types */
const Task = ({ task, handleUpdateData }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleClick = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://task-management-project-server.vercel.app/api/v1/delete-task/${id}`
          )
          .then((res) => {
            if (res.data.deletedCount > 0) {
              handleUpdateData();
              Swal.fire({
                title: "Deleted",
                text: "Your task has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div
      ref={drag}
      className={`p-5 mt-8 rounded-md shadow-md cursor-grab ${
        isDragging ? "opacity-30" : "opacity-100"
      }`}
    >
      <h3 className="text-lg font-medium">{task.title}</h3>
      <p className="text-sm my-4">{task.description}</p>

      {task.priority !== "None" && (
        <p className="text-sm font-medium">
          Priority :{" "}
          <span
            className={`badge text-white border-none ${
              task.priority === "Low"
                ? "bg-teal-500"
                : task.priority === "High"
                ? "bg-amber-400"
                : " bg-red-500"
            } -z-10`}
          >
            {task.priority}
          </span>
        </p>
      )}
      <div className="flex items-center justify-end">
        <button
          onClick={() => handleClick(task._id)}
          className="btn btn-circle"
        >
          {" "}
          <MdDelete className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Task;
