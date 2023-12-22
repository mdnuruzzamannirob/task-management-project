import { useState } from "react";
import Button from "../../components/Button";
import axios from "axios";
import { PiWarningOctagonFill } from "react-icons/pi";

const DashboardForm = () => {
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [dateError, setDateError] = useState("");

  const handleSubmit = (data) => {
    data.preventDefault();

    const title = data.target.title.value;
    const description = data.target.description.value;
    const deadline = data.target.deadline.value;
    const priority = data.target.priority.value;

    setTitleError("");
    setDescriptionError("");
    setDateError("");

    if (title === "") {
      return setTitleError("Title is required");
    }
    if (description === "") {
      return setDescriptionError("Description is required");
    }
    if (deadline === "") {
      return setDateError("Deadline is required");
    }

    const newTask = { title, description, deadline, priority, status: "todo" };
    console.log(newTask);
    axios
      .post("http://localhost:1001/api/v1/create-task", newTask)
      .then((res) => console.log(res.data));
  };

  return (
    <form onSubmit={handleSubmit} className="pt-8 pb-5">
      <div className="flex flex-col items-start">
        <label htmlFor="" className="mb-2 font-medium">
          Title
        </label>
        <input
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
      <Button type="submit" className="mt-8">
        Create Task
      </Button>
    </form>
  );
};

export default DashboardForm;
