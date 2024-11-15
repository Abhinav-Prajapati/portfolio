import './App.css';
import ProjectButton from './components/button.tsx'

function App() {
  return (
    <div>
      <div className="bg-[url('./assets/cozy_home.jpg')] bg-cover bg-center bg-no-repeat h-screen w-full flex justify-center ">

        <div className="w-fit text-center mt-40 flex flex-col items-center">
          <h1 className="font-morris_roman text-[3rem] text-white [text-shadow:_0_4px_8px_#000]">
            Hay, I am Abhinav but u can call <br />me Abhii
          </h1>
          <h1 className="font-morris_roman text-[2rem] text-gray-200 mt-10 mb-10 [text-shadow:_0_4px_8px_#000] ">
            I am a full-stack developer <br /> and i also do embedded dev as fun
          </h1>
          <div className="py-10">
            <ProjectButton />
          </div>
        </div>

      </div>
      <img
        src="../public/Divider.png"
        alt="placeholder"
        className="absolute -bottom-10"
      />

      <div className="bg-[url('../public/blue-transformed.jpeg')] bg-cover bg-center h-[60vh] w-full flex flex-col  items-center">
        <h1 className="mt-10 mb-7 text-white font-morris_roman text-[2.3rem]">
          My Experties
        </h1>

        <div className='w-[80vw] h-full mb-10 pb-10 flex gap-10'>
          <div className='w-1/3 h-full border-2 border-yellow-500 shadow-yellow-800'>
            <h1 className="font-morris_roman text-[2rem] text-gray-200 mt-2 ml-4 mb-10 [text-shadow:_0_4px_8px_#000] ">
              Backend
            </h1>
          </div>
          <div className='w-1/3 h-full border-2 border-yellow-500 shadow-yellow-800'>

            <h1 className="font-morris_roman text-[2rem] text-gray-200 mt-2 ml-4 mb-10 [text-shadow:_0_4px_8px_#000] ">Frontend</h1>
          </div>
          <div className='w-1/3 h-full border-2 border-yellow-500 shadow-yellow-800'>

            <h1 className="font-morris_roman text-[2rem] text-gray-200 mt-2 ml-4 mb-10 [text-shadow:_0_4px_8px_#000] ">Iot</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
