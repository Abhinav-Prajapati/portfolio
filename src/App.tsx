import './App.css';
import Home from './pages/Home.tsx';
import Skills from './pages/Skill.tsx';

function App() {
  return (
    <div>
      <Home />
      <img
        src="../public/Divider.png"
        alt="placeholder"
        className=" w-screen  absolute -bottom-10 bg-center bg-cover "
      />
      <Skills />
    </div>
  );
}

export default App;
