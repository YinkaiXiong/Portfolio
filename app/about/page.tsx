import AboutMeCard from "@/components/aboutMeCard";

type AboutCardDataConfig = {
  title: string,
  firstLine: string,
  secondLine: string
}

const AboutCardData:AboutCardDataConfig[] = [
  {
    title: "Experience",
    firstLine: "~1 year",
    secondLine: "FrontEnd Development"
  },
  {
    title: "Education",
    firstLine: "Masters: Software Development",
    secondLine: "Bachelors: Information Technology"
  },
]

export default function About() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-10 bg-light dark:bg-dark">
      <div className="text-center my-14 ">
        <p className="text-sm">Get To Know More</p>
        <h1 className="text-4xl">About Me</h1>
      </div>

      <div className="flex flex-col items-center">
      <div className="flex flex-col lg:flex-row">
        {AboutCardData.map((item) => {
          return(
            <AboutMeCard
              key={item.title}
              title={item.title}
              firstLine={item.firstLine}
              secondLine={item.secondLine}
            />
          )
        })}
      </div>

        <p className="max-w-80 lg:min-w-full p-4 leading-relaxed">Hi, I’m <span className="font-bold">Yinkai Xiong</span>, a passionate Web Developer specializing in creating modern and dynamic websites.<br/> As a recent graduate, I have developed expertise in <span className="font-bold">HTML/CSS</span>, <span className="font-bold">JavaScript</span>, <span className="font-bold">React.js</span>, <span className="font-bold">Node.js</span>, and database operations with both <span className="font-bold">SQL</span> and <span className="font-bold">MongoDB</span>. Additionally, I am familiar with <span className="font-bold">AngularJS</span>, <span className="font-bold">Next.js</span>, <span className="font-bold">TypeScript</span>, <span className="font-bold">Java</span>, and machine learning using <span className="font-bold">Python</span>. My key strength lies in my ability to communicate effectively and understand team members&apos; perspectives, enabling me to synthesize diverse opinions to achieve optimal results.<br/> I am always eager to connect with like-minded professionals and explore new opportunities, so feel free to reach out!</p>
      </div>
    </div>
  );
}