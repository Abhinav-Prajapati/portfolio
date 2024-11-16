import ProjectButton from "../components/button"
import "./../fire.css"


function Home() {
  return (

    <div className="bg-[url('./assets/cozy_home.jpg')] bg-cover bg-center bg-no-repeat h-screen w-full flex justify-center relative">
      <div id="tsparticles"></div>
      <div className="w-fit text-center mt-40 flex flex-col items-center">
        <h1 className="font-morris_roman text-[3rem] text-white [text-shadow:_0_4px_8px_#000]">
          Hay, I am Abhinav
        </h1>
        <h1 className="font-morris_roman text-[2rem] text-gray-200 mt-10 mb-10 [text-shadow:_0_4px_8px_#000] ">
          I am a full-stack developer <br /> i love turning tea into code
        </h1>
        <div className="py-10">
          <ProjectButton />
        </div>
      </div>

      <img
        src="/PageDivider/pageDividerWithDimond.png"
        alt="placeholder"
        className=" w-screen  absolute -bottom-10 bg-center bg-cover z-10"
      />
    </div>
  )
}

export default Home
