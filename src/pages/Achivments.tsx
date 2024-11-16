
import { useRef } from 'react';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

type AchievementCardProps = {
  imageSide: "left" | "right";
  imageSrc: string;
  category: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  swiperPhotosSrc: string[];
};

// Component for the content (title, description, date)
const AchievementContent = ({
  imageSrc,
  category,
  title,
  description,
  startDate,
  endDate
}: Pick<AchievementCardProps, 'imageSrc' | 'category' | 'title' | 'description' | 'startDate' | 'endDate'>) => {
  return (
    <div className="w-1/2 pl-4">
      <div className="flex">
        <img
          src={imageSrc}
          alt={`${category} image`}
          className="w-28 h-28"
        />
        <div className="flex flex-col pl-5">
          <h1 className="font-morris_roman text-gray-500 text-[1.5rem]">{category}</h1>
          <h1 className="font-morris_roman text-white text-[2.5rem]">{title}</h1>
        </div>
      </div>
      <p className="font-morris_roman text-gray-400 text-[1.4rem] py-5 tracking-wide text-justify">
        {description}
      </p>

      {/* Date Section */}
      <div className="font-morris_roman w-max mt-4">
        <span className="text-yellow-600">
          <CalendarMonthOutlinedIcon fontSize="large" />
        </span>
        <span className="text-gray-500 px-2 text-[1.3rem]">
          {startDate} <span className="text-yellow-500">-</span> {endDate}
        </span>
      </div>
    </div>
  );
};

// Component for the image slider with navigation arrows
const AchievementImageSlider = ({
  swiperPhotosSrc,
  swiperRef,
  goToNextSlide,
  goToNextPrev
}: {
  swiperPhotosSrc: string[];
  swiperRef: React.RefObject<any>;
  goToNextSlide: () => void;
  goToNextPrev: () => void;
}) => {
  return (
    <div className="ml-4 w-1/2 flex justify-center items-center">
      {/* Left arrow */}
      <div onClick={goToNextPrev}>
        <img src={"/assets/arrow.png"} alt={`arrow left`} className="w-12 rotate-180 pl-2" />
      </div>

      {/* Image Frame with Swiper */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        className="mySwiper relative w-[90%]"
        loop={true}
      >
        {swiperPhotosSrc.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={"../../public/assets/4x3_wooden_frame.png"} alt={`brown 4x3 frame`} className="w-full h-full absolute" />
            <img src={src} alt={`Achievement photo ${index + 1}`} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right arrow */}
      <div onClick={goToNextSlide}>
        <img src={"/assets/arrow.png"} alt={`arrow right`} className="w-12 pl-2" />
      </div>
    </div>
  );
};

// Main Achievement Card Component
const AchievementCard = ({
  imageSide,
  imageSrc,
  category,
  title,
  description,
  startDate,
  endDate,
  swiperPhotosSrc
}: AchievementCardProps) => {
  // Ref to access the swiper instance
  const swiperRef = useRef<any>(null);

  // Function to go to the next slide
  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // Function to go to the previous slide
  const goToNextPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="border border-[#4e5564] hover:border-yellow-600 h-max py-8 px-4 mb-8 flex flex-row relative">
      {/* Conditional layout based on imageSide */}
      {imageSide === "left" ? (
        <>
          {/* Left side: Image Slider */}
          <AchievementImageSlider
            swiperPhotosSrc={swiperPhotosSrc}
            swiperRef={swiperRef}
            goToNextSlide={goToNextSlide}
            goToNextPrev={goToNextPrev}
          />

          {/* Right side: Title, Description, and Date */}
          <AchievementContent
            imageSrc={imageSrc}
            category={category}
            title={title}
            description={description}
            startDate={startDate}
            endDate={endDate}
          />
        </>
      ) : (
        <>
          {/* Left side: Title, Description, and Date */}
          <AchievementContent
            imageSrc={imageSrc}
            category={category}
            title={title}
            description={description}
            startDate={startDate}
            endDate={endDate}
          />

          {/* Right side: Image Slider */}
          <AchievementImageSlider
            swiperPhotosSrc={swiperPhotosSrc}
            swiperRef={swiperRef}
            goToNextSlide={goToNextSlide}
            goToNextPrev={goToNextPrev}
          />
        </>
      )}
    </div>
  );
};

// Example Achievements Component
const Achievements = () => {
  const achievementsData: AchievementCardProps[] = [
    {
      imageSide: "right",
      imageSrc: "/assets/1st_position.png",
      category: "Hackathon",
      title: "House of Coders, SRMIST",
      description: "We won 1st place at the House of Coders Hackathon at SRM IST Chennai with HYDRATEME, a smart hydration solution. It combines IoT hardware and a mobile app to personalize water intake based on health, activity, and weather.",
      startDate: "24 Oct, 2024",
      endDate: "25 Oct, 2024",
      swiperPhotosSrc: [
        "/assets/house_of_coders/team_photo_1.jpg",
        "/assets/house_of_coders/team_photo_2.jpg",
        "/assets/house_of_coders/winning_certificate.jpg",
      ]
    },
    {
      imageSide: "left",
      imageSrc: "/assets/robo_roarz.png",
      category: "Robotic Challange",
      title: "RoboRoarz Hackathon, SUTD Singapore",
      description: "We secured top 5 ranks in two different challenges at the RoboRoarz Hackathon held at SUTD Singapore! It was an incredible experience competing with some of the brightest minds in robotics and innovation.",
      startDate: "Month, Year",
      endDate: "Month, Year",
      swiperPhotosSrc: [
        "/assets/robo_roarz/team_photo_1.jpg",
        "/assets/robo_roarz/team_photo_2.jpg",
        "/assets/robo_roarz/certificate.jpg"
      ],
    }
  ];

  return (
    <div className="bg-[url('../public/assets/brown_blue_transition.png')] bg-cover bg-center min-h-screen w-full flex flex-col items-center">
      <h1 className="font-morris_roman text-[3.5rem] text-gray-100 py-6">Achievements</h1>
      <div className="w-[70%] pb-8">
        {achievementsData.map((achievement, index) => (
          <AchievementCard key={index} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
