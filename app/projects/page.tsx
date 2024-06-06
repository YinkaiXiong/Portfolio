import ProjectCard from "@/components/projectCard";

export type projectDataConfig = {
  id: number,
  title: string,
  description: string,
  gitHubURL: string,
  demoURL: string
}

const projectData = [
  {
    id: 1,
    title: "Social Media Web App",
    description: "A social media like application that allow users to share their contents, built with React, JavaScript, Node.js, express.js, MongoDB.",
    gitHubURL: "https://github.com/YinkaiXiong/social-media",
    demoURL: "https://social-media-i2xm.onrender.com/"
  },
  {
    id: 2,
    title: "ClassGuardian",
    description: "ClassGuardian is a class attendance tracker. It allows institution instructors to take class attendance, manage multiple courses, and generate attendance reports.",
    gitHubURL: "https://github.com/Summer-luna/ClassGuardian",
    demoURL: ""
  },
  {
    id: 3,
    title: "Server Monitoring Web Application",
    description: "This is a comprehensive server monitoring and management system designed to oversee multiple servers' health, performance, and functionality. ",
    gitHubURL: "https://github.com/YinkaiXiong/METCS-673-Team7-Group-Project",
    demoURL: ""
  },
  {
    id: 4,
    title: "Restaurant Dish Manage Dashboard",
    description: "This project entails the development of a comprehensive and user-friendly dashboard designed to efficiently manage restaurant menu items.",
    gitHubURL: "https://github.com/YinkaiXiong/ourzone",
    demoURL: ""
  },
  {
    id: 5,
    title: "Sudoku Game Board",
    description: "This project involves the creation of a simple Sudoku game board using JavaFX.",
    gitHubURL: "https://github.com/YinkaiXiong/JavaFX-Sudoku",
    demoURL: ""
  },

]

export default function Project() {
    return (
        <div className="flex flex-col min-h-screen items-center lg:justify-center p-24 bg-light dark:bg-dark">
            <div className="text-center my-14 ">
                <p className="text-sm">Check My</p>
                <h1 className="text-4xl">Projects</h1>
            </div>

            <div className="flex flex-col lg:flex-row lg:w-3/4 flex-wrap justify-center">
              {projectData.map((item:projectDataConfig) => {
                return <ProjectCard key={item.id} {...item} />
              })}
            </div>
        </div>
    )
}