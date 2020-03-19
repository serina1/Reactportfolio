import React from "react";


    const projects = [
    {
        name:"Password Generator",
        link:"https://serina1.github.io/Password-Generator/",
        Githublink: "https://github.com/serina1/Password-Generator",
        image: "./assets/Images/passwordgenthumbnail.JPG"
    },
    {
        name:"My Daily Planner - Project 1",
        link:"https://serina1.github.io/Daily-Planner/.",
        Githublink: "https://github.com/serina1/Daily-Planner",
        image: "./assets/Images/dailyPlanner.png"
    },
    {
        name:"Student Register",
        link:"https://serina1.github.io/StudentRegister/",
        Githublink: "https://github.com/serina1/StudentRegister",
        image: "./assets/Images/studentregister.JPG"
  
    },
    {
        name:"Employee Database",
        link:"https://serina1.github.io/EmployeeManagementDatabase/.",
        Githublink: "https://github.com/serina1/EmployeeManagementDatabase",
        image: "./assets/Images/employeedatabase.JPG"
    },
    {
        name:"Meet App - Project 2",
        link:"https://serina1.github.io/meetapp/",
        Githublink: "https://github.com/serina1/meetapp",
        image: "./assets/Images/meetsapp.JPG"
    },
    {
        name:"Employee Directory",
        link:"https://serina-employee-directory.herokuapp.com/",
        Githublink: "https://github.com/serina1/EmployeeDirectory",
        image: "./assets/Images/employeetracker.JPG"
    },
    {
        name:"Burger Logger",
        link:"https://serina-burger-app.herokuapp.com/",
        Githublink: "https://github.com/serina1/Burger-App",
        image: "./assets/Images/burgerlogger.JPG"
    },
    {
        name:"Fitness App",
        link:"https://fitness--app.herokuapp.com/",
        Githublink: "https://github.com/serina1/FitnessApp",
        image: "./assets/Images/fitnesstracker.JPG"
    }
]

function Project (){
    return (
      <React.Fragment>
        {projects.map(project => (
          <section className="project-content-respo">
            <div id="contentLabel">
             {project.name}
              <a href={project.Githublink} alt={project.name}>GitHub Code
               </a>
            </div>
            <a href={project.link}>
              <img src={project.image} alt={project.name} />
            </a>
            
          </section>
        ))}
      </React.Fragment>
    );
}

export default Project;

