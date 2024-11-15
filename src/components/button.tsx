const ProjectButton = () => (
  <div className="
    w-fit py-1 px-8 border-[0.19rem] relative border-[#4F75FF]
    bg-[url('../../public/frost_ice.jpg')] bg-cover bg-center bg-no-repeat
    shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]
    group
    "
  >
    <div className="absolute inset-0 bg-black opacity-20" />
    <h1 className="relative text-[1.8rem] text-white font-morris_roman">
      My Projects
    </h1>
    <div className="hidden group-hover:block">
      <div className=" top-4 absolute end-0 w-0 h-0 border-t-[10px] border-b-[10px] border-r-[10px] border-transparent border-r-blue-500"></div>
      <div className="top-4 absolute start-0 w-0 h-0 border-t-[10px] border-b-[10px] border-l-[10px] border-transparent border-l-blue-500"></div>
    </div>
  </div>
);

export default ProjectButton;
