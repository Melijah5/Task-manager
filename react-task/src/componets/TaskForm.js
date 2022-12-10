
import React, {useEffect , useState } from 'react'


function TaskForm() {

    const [task , setTask] = useState('')
    
   
    useEffect(()=>{
        fetch( 'http://localhost:5000/tasks')
        .then((res) => res.json())
            .then((data) => {
                setTask(() => data.result);
            });

        },[] )
        
    
    console.log(task)

 async function addTaskHandler(e) {
     e.preventDefault();
    const response = await fetch(
        'http://localhost:5000/task',
        {
            method: "POST",
            body: JSON.stringify(e),
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    const data = await response.json();
    console.log(data);
}

    // const handleSubmit = e=>{
    //     e.preventDefault();
        
    // }
    const handleChange  = e =>{
        setTask(e.target.value)
    }

    console.log(task)


    return (
        <div>

            <form className="task-form" action="http://localhost:5000/task" onSubmit={addTaskHandler}>
                <h4>task manager</h4>
                <div className="form-control">
                    <input type="text" 
                    name="name" 
                    // value={}
                    className="task-input" 
                    placeholder="e.g. learn Nodejs" 
                    onChange={handleChange}
                    />
                    <button type="submit" className="btn submit-btn">submit</button>
                </div>
                <div className="form-alert"></div>
            </form>
            <div className="tasks-container">
                <p className="loading-text">Loading...</p>
                <div className="tasks">
                    <div className="single-task task-completed">
                        <h5>
                            <span><i className="far fa-check-circle"></i></span>
                            {/* ${name} */}
                        </h5>
                        <div className="task-links">

                            <a href="task.html" className="edit-link">
                                <i className="fas fa-edit"></i>
                            </a>

                            <button type="button" className="delete-btn" >
                                <i className=" fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
           </div>

        </div>
    )
}

export default TaskForm



// fetch backend ... useEffect hook --- update ... Console
// form state add data to database... 
// update the database



