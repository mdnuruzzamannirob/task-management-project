import Button from "../../components/Button";
import DashboardForm from "./DashboardForm";

const DashboardPage = () => {
  return (
    <div className="">
      <div className="text-center">
        <Button
          onClick={() => document.getElementById("my_modal_3").showModal()}
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
            <DashboardForm />
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default DashboardPage;
