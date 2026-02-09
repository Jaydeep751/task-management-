import { useEffect, useState } from "react";

const TaskForm = ({ addTask, updateTask, editingTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Low",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData(editingTask);
  }, [editingTask]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData?.title.trim()) {
      newErrors.title = "Task title is required";
    }

    if (!formData?.dueDate) {
      newErrors.dueDate = "Due date is required";
    }
    if (!formData?.description.trim()) {
      newErrors.description = "Description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      if (editingTask) {
        updateTask(formData);
        alert("Task Updated successfully!");
      } else {
        addTask(formData);
        alert("Task Added successfully!");
      }
      handleClear();
    }
  };

  const handleClear = () => {
    setFormData({
      title: "",
      description: "",
      dueDate: "",
      priority: "Low",
    });
    setErrors({});
  };

  return (
    <>
      <div className="add-task-card">
        <h2 style={{ marginBottom: "15px" }}>
          {editingTask ? "Update" : "Add"} New Task
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="title"
              value={formData?.title}
              placeholder="Task Title"
              onChange={handleInputChange}
            />
            {errors.title && <span className="error-msg">{errors.title}</span>}
          </div>
          <div>
            <textarea
              type="text "
              name="description"
              value={formData?.description}
              placeholder="Description"
              rows="3"
              onChange={handleInputChange}
            />
            {errors.description && (
              <span className="error-msg">{errors.description}</span>
            )}
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: 1 }}>
              <input
                type="date"
                name="dueDate"
                value={formData?.dueDate}
                onChange={handleInputChange}
              />
              {errors.dueDate && (
                <span className="error-msg">{errors.dueDate}</span>
              )}
            </div>
            <div style={{ flex: 1 }}>
              <select
                name="priority"
                value={formData?.priority}
                onChange={handleInputChange}
              >
                <option value="Low">Low priority</option>
                <option value="Medium">Medium priority</option>
                <option value="High">High priority</option>
              </select>
            </div>
          </div>
          <div
            className="form-actions"
            style={{ display: "flex", gap: "10px", marginTop: "10px" }}
          >
            <button type="submit" className="btn-primary" style={{ flex: 1 }}>
              {editingTask ? "Update " : "Add "}Task
            </button>

            <button
              type="button"
              className="btn-secondary"
              style={{ flex: 1 }}
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TaskForm;
