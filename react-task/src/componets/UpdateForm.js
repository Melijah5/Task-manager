import React from 'react'


function UpdateForm() {
  return (
    <div>
    
          <div className="container">
              <form className="single-task-form">
                  <h4>Edit Task</h4>
                  <div className="form-control">
                      <label>Task ID</label>
                      <p className="task-edit-id"></p>
                  </div>
                  <div className="form-control">
                      <label for="name">Name</label>
                      <input type="text" name="name" className="task-edit-name" />
                  </div>
                  <div className="form-control">
                      <label for="completed">completed</label>
                      <input type="checkbox" name="completed" className="task-edit-completed" />
                  </div>
                  <button type="submit" className="block btn task-edit-btn">edit</button>
                  <div className="form-alert"></div>
              </form>
              <a href="index.html" className="btn back-link">back to tasks</a>
          </div>
    
    </div>
  )
}

export default UpdateForm