interface SkillsCardProps {
  title: string;
  children?: React.ReactNode;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ title, children }) => {
  return (
    <div className="w-1/3 h-[40vh] border-[1px] border-yellow-500 shadow-yellow-800 bg-[url('../public/paper_background.jpg')] bg-cover bg-center">
      <h1 className="font-morris_roman text-[2rem] text-gray-200 mt-4 ml-10 [text-shadow:_0_4px_8px_#000]">
        {title}
      </h1>
      <div className="px-10 pb-6 pt-3 flex flex-wrap flex-row justify-between gap-4">
        {children}
      </div>
    </div>
  );
};

export default SkillsCard;
