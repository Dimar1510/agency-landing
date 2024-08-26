import { Carousel, CustomFlowbiteTheme, Flowbite } from "flowbite-react";
import banner1 from "src/assets/images/banner1.png";
import banner2 from "src/assets/images/banner2.png";
import banner3 from "src/assets/images/banner3.png";

const HeroSlide = ({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="my-8 md:py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-x-12 gap-y-2">
      <div>
        <img
          src={image}
          alt="banner"
          className="h-[200px] md:h-[300px] object-contain"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 capitalize">
          {title}
          <span className="text-brandPrimary"> {subtitle}</span>
        </h1>
        <p className="text-neutralGrey text-base mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <button className="btn-primary hidden md:block">Register</button>
      </div>
    </div>
  );
};

const customTheme: CustomFlowbiteTheme = {
  carousel: {
    control: {
      base: "hidden",
    },
    indicators: {
      wrapper:
        "hidden absolute bottom-5 left-1/2 md:flex -translate-x-1/2 space-x-3",
      active: {
        on: "bg-brandPrimary",
        off: "bg-neutralGrey ",
      },
    },
  },
};

const Hero = () => {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto ">
        <div className="pt-12 flex flex-col items-center">
          <Flowbite theme={{ theme: customTheme }}>
            <Carousel
              draggable={false}
              slideInterval={4000}
              className="w-full "
            >
              <HeroSlide
                image={banner1}
                title="Lessons and insights"
                subtitle="from 8 years"
              />
              <HeroSlide
                image={banner2}
                title="Learn Design and Illustration"
                subtitle="in 4 months"
              />
              <HeroSlide
                image={banner3}
                title="Grow Your Business Fast"
                subtitle="with low costs"
              />
            </Carousel>
          </Flowbite>
          <button className="btn-primary w-full md:hidden max-w-sm">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
