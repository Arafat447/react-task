import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [taskDetails, setTaskDetails] = useState({
    name: "",
    status: "",
  });
  const handleClick = (val) => {
    setShow(val);
    const active = tasks.filter(
      (task) => task.status?.toLowerCase() === "active"
    );
    const completed = tasks.filter(
      (task) => task.status?.toLowerCase() === "completed"
    );
    const otherTasks = tasks.filter(
      (task) => !["active", "completed"].includes(task.status?.toLowerCase())
    );
    if (val === "all") {
      setFilteredTasks([...active, ...completed, ...otherTasks]);
    } else if (val === "active") {
      setFilteredTasks([...active]);
    } else if (val === "completed") {
      setFilteredTasks([...completed]);
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails({ ...taskDetails, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, taskDetails]);
    setFilteredTasks([...filteredTasks, taskDetails])
    setTaskDetails({ name: "", status: "" });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                name="name"
                value={taskDetails?.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                name="status"
                value={taskDetails?.status}
                onChange={handleChange}
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
              {filteredTasks.map((task, index) => {
                return (
                  <tr key={index}>
                    <th scope="col">{task.name}</th>
                    <th scope="col">{task.status}</th>
                  </tr>
                );
              })}
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
