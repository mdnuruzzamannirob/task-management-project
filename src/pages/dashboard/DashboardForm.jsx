import { useState } from "react";
import Button from "../../components/Button";
import axios from "axios";
import { PiWarningOctagonFill } from "react-icons/pi";
import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";

const DashboardForm = ({ setMessage, handleUpdateData }) => {
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [dateError, setDateError] = useState("");

  const { user, isLoading } = useAuth();

  if (isLoading) return;

  const handleSubmit = (data) => {
    data.preventDefault();
    const form = data.target;
    const title = form.title.value;
    const description = form.description.value;
    const deadline = form.deadline.value;
    const priority = form.priority.value;

    setTitleError("");
    setDescriptionError("");
    setDateError("");
    setMessage("");

    if (title === "") {
      return setTitleError("Title is required");
    }
    if (description === "") {
      return setDescriptionError("Description is required");
    }
    if (deadline === "") {
      return setDateError("Deadline is required");
    }

    const newTask = {
      title,
      description,
      deadline,
      priority,
      status: "Todo",
      email: user?.email,
    };
    axios
      .post(
        "https://task-management-project-server.vercel.app/api/v1/create-task",
        newTask
      )
      .then((res) => {
        if (res.data.insertedId) {
          handleUpdateData();
          form.reset();
          setMessage("Task created successfully");
        }
      });
  };

  return (
    <form onSubmit={handleSubmit} className="pt-8 pb-5">
      <div className="flex flex-col items-start">
        <label htmlFor="" className="mb-2 font-medium">
          Title
        </label>
        <input
          onBlur={() => {
            setMessage("");
          }}
          type=""
          name="title"
          id=""
          className="w-full py-2 px-2 outline-none border focus:border-teal-500 rounded-md text-sm"
          placeholder="task title"
        />
        {titleError && (
          <p className="flex items-center gap-1 text-[#e83e8c] text-sm mt-1">
            <span>
              {" "}
              <PiWarningOctagonFill></PiWarningOctagonFill>
            </span>
            {titleError}
          </p>
        )}
      </div>

      <div className="flex flex-col items-start mt-4">
        <label htmlFor="" className="mb-2 font-medium">
          Description
        </label>
        <input
          onBlur={() => {
            setMessage("");
          }}
          type="text"
          name="description"
          id=""
          className="w-full py-2 px-2 outline-none border focus:border-teal-500 rounded-md text-sm"
          placeholder="task description"
        />
        {descriptionError && (
          <p className="flex items-center gap-1 text-[#e83e8c] text-sm mt-1">
            <span>
              {" "}
              <PiWarningOctagonFill></PiWarningOctagonFill>
            </span>
            {descriptionError}
          </p>
        )}
      </div>

      <div className="w-full flex flex-col items-start mt-4">
        <label htmlFor="" className="mb-2 font-medium">
          Deadline
        </label>
        <input
          onBlur={() => {
            setMessage("");
          }}
          type="date"
          name="deadline"
          id=""
          className="w-full py-2 px-2 outline-none border focus:border-teal-500 rounded-md text-sm"
        />
        {dateError && (
          <p className="flex items-center gap-1 text-[#e83e8c] text-sm mt-1">
            <span>
              {" "}
              <PiWarningOctagonFill></PiWarningOctagonFill>
            </span>
            {dateError}
          </p>
        )}
      </div>

      <div className="w-full flex flex-col items-start mt-4">
        <label htmlFor="" className="mb-2 font-medium">
          Priority
        </label>
        <select
          onBlur={() => {
            setMessage("");
          }}
          name="priority"
          id=""
          className="w-full py-2 px-2 outline-none border focus:border-teal-500 rounded-md text-sm"
        >
          <option value="None">Select Priority </option>
          <option value="Low">Low</option>
          <option value="Moderate">Moderate</option>
          <option value="High">High</option>
        </select>
      </div>
      <Button type="submit" className="mt-6">
        Create Task
      </Button>
    </form>
  );
};

DashboardForm.propTypes = {
  setMessage: PropTypes.func,
  handleUpdateData: PropTypes.func,
};

export default DashboardForm;
