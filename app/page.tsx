import Image from "next/image";
import GeneralBtn from "@/components/generalBtn";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen items-center justify-center p-24 bg-light dark:bg-dark">
      <div className="relative rounded-full w-96 h-96 overflow-hidden mx-24">
        <Image
          src="/images/avatar1.png"
          alt="Yinkai Xiong's Avatar"
          fill
          quality={100}
          style={{
            objectFit: "contain",
          }}
          className="rounded-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="mx-24 my-12 w-64 flex flex-col dark:text-light text-dark text-center">
        <div>
          Hello, I&apos;m
          <span className="block text-4xl font-bold py-2">Yinkai Xiong</span>
          <span className="block text-xl font-medium py-2">
            Full stack Developer
          </span>
        </div>
        <div>
          <GeneralBtn text={"Download Resume"} url={"https://drive.google.com/uc?export=download&id=1bv0VbB7qaGP4gFj1ha3VdUF5OOH9NHvv"}/>
        </div>
        <div className="flex justify-center">
          <div className="p-4">
            <a href="https://www.linkedin.com/in/yinkai-xiong-083443221/" target="_blank">
              <Image
                src="/icon/linkedin.svg"
                alt="LinkedIn Logo"
                width={30}
                height={30}
              />
            </a>
          </div>
          <div className="p-4">
            <a href="https://github.com/YinkaiXiong" target="_blank">
              <Image
                src="/icon/github-dark.svg"
                alt="Github Logo"
                width={30}
                height={30}
                className={`dark:invert`}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
