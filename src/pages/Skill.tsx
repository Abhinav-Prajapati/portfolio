import SkillsCard from '../components/skillsCard';
function Skills() {
  return (
    <div className="bg-[url('../public/blue-transformed.jpeg')] bg-cover bg-center h-[60vh] w-full flex flex-col relative items-center">
      <h1 className="mt-10 mb-7 text-white font-morris_roman text-[3rem]">
        My Experties
      </h1>

      <div className='w-[80vw] h-full mb-10 pb-10 flex gap-10'>
        <SkillsCard title='Backend'>
          <img
            src="/techIcons/docker.png"
            alt="docker"
            className=" h-20 w-20 object-cover object-center"
          />

          <img
            src="/techIcons/python.png"
            alt="docker"
            className=" h-20 w-20 object-cover object-center"
          />

          <img
            src="/techIcons/nodejs.png"
            alt="docker"
            className=" h-20 w-20 object-cover object-center"
          />

          <img
            src="/techIcons/pg.png"
            alt="docker"
            className=" h-20 w-20 object-cover object-center"
          />

          <img
            src="/techIcons/aws.png"
            alt="docker"
            className=" h-20 w-20 object-cover object-center"
          />
          <img
            src="/techIcons/ts.png"
            alt="docker"
            className=" h-20 w-20 object-cover object-center"
          />
          <img
            src="/techIcons/linux.png"
            alt="docker"
            className=" h-20 w-20 object-cover object-center"
          />
          <img
            src="/techIcons/postman.png"
            alt="docker"
            className=" h-20 w-20 object-cover object-center"
          />
        </SkillsCard>
        <SkillsCard title='Frontend'>
          <img
            src="/techIcons/react.png"
            alt="docker"
            className=" h-20 w-20 object-cover object-center"
          />
          <img
            src="/techIcons/redux.png"
            alt="docker"
            className=" h-20 w-20 object-cover object-center"
          />
          <img
            src="/techIcons/ts.png"
            alt="docker"
            className=" h-20 w-20 object-cover object-center"
          />
          <img
            src="/techIcons/tailwindcss.png"
            alt="docker"
            className=" h-20 w-20 object-cover object-center"
          />
          <img
            src="/techIcons/figma.png"
            alt="docker"
            className=" h-20 w-20 object-cover object-center"
          />
          <img
            src="/techIcons/photoshop.png"
            alt="docker"
            className=" h-20 w-20 object-cover object-center"
          />

        </SkillsCard>
        <SkillsCard title='Iot'>
          <img
            src="/techIcons/raspberrypi.png"
            alt="docker"
            className=" h-20 w-20 object-cover object-center"
          />
          <img
            src="/techIcons/arduino.png"
            alt="docker"
            className=" h-20 w-20 object-cover object-center"
          />
          <img
            src="/techIcons/3dprinting.png"
            alt="docker"
            className=" h-20 w-20 object-cover object-center"
          />
        </SkillsCard>
      </div>
      <img
        src="/PageDivider/pageDividerPlane.png"
        alt="page divider"
        className=" w-screen absolute  -bottom-1 bg-center bg-cover "
      />
    </div>
  )
}

export default Skills
