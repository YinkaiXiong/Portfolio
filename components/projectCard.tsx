import GeneralBtn from "@/components/generalBtn";
import {projectDataConfig} from "@/app/projects/page";

export default function ProjectCard({...projectData}: projectDataConfig) {
  let hasDemo = projectData.demoURL.length !== 0
  return (
    <div className="flex flex-col justify-between items-center border dark:border-light border-dark rounded-3xl min-w-80 max-w-96 p-6 m-2">
      <h1 className="font-bold text-2xl py-2">{projectData.title}</h1>
      <div className="font-light text-sm">{projectData.description}</div>
      <div className={`flex ${hasDemo ? 'justify-between' : 'justify-center'} w-full px-8 mt-2`}>
        <GeneralBtn text={"GitHub"} url={projectData.gitHubURL} />
        {hasDemo ? (
          <GeneralBtn text={"Demo"} url={projectData.demoURL} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}