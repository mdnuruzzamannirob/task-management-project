import { useEffect, useState } from "react";
import Button from "../../components/Button";
import DashboardForm from "./DashboardForm";
import TaskList from "./TaskList";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const DashboardPage = () => {
  const [message, setMessage] = useState("");
  const [Todo, setTodo] = useState([]);
  const [Ongoing, setOngoing] = useState([]);
  const [Complete, setComplete] = useState([]);

  const { user, isLoading } = useAuth();

  const status = ["Todo", "Ongoing", "Complete"];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleUpdateData = () => {
    axios
      .get(
        `https://task-management-project-server.vercel.app/api/v1/get-task?email=${user?.email}`
      )
      .then((res) => {
        const todo = res.data.filter((fData) => fData.status === "Todo");
        const ongoing = res.data.filter((fData) => fData.status === "Ongoing");
        const complete = res.data.filter(
          (fData) => fData.status === "Complete"
        );
        setTodo(todo);
        setOngoing(ongoing);
        setComplete(complete);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    handleUpdateData();
  }, [handleUpdateData, user.email]);

  if (isLoading) return;

  return (
    <div className="">
      <div className="text-center">
        <Button
          onClick={() => {
            document.getElementById("my_modal_3").showModal();
            setMessage("");
          }}
        >
          Create Task
        </Button>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-black/5">
                ✕
              </button>
            </form>
            <h3 className="text-center text-lg font-semibold">New Task</h3>
            <DashboardForm
              setMessage={setMessage}
              handleUpdateData={handleUpdateData}
            />
            {message && (
              <p className=" text-green-500 text-sm mt-1">{message}</p>
            )}
          </div>
        </dialog>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-20">
        {status.map((singleStatus, index) => (
          <TaskList
            key={index}
            index={index}
            singleStatus={singleStatus}
            todo={Todo}
            ongoing={Ongoing}
            complete={Complete}
            handleUpdateData={handleUpdateData}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
