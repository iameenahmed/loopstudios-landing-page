import interactiveMobile from "../assets/mobile/image-interactive.jpg";
import interactiveDesktop from "../assets/desktop/image-interactive.jpg";

const Intro = () => {
  return (
    <div className="my-20 flex flex-col px-6 text-center md:mx-20 lg:my-40 lg:flex-row lg:items-end lg:px-0 lg:text-start xl:mx-[10.25rem]">
      <picture className="lg:basis-[730px]">
        <source media="(min-width: 1024px)" srcSet={interactiveDesktop} />
        <img src={interactiveMobile} alt="a man wearing a VR headset" />
      </picture>
      <div className="mt-10 px-4 lg:-ml-[14.35%] lg:basis-[545px] lg:bg-white xl:p-0 xl:pl-[6.25rem] xl:pt-24">
        <h2 className="mb-4 font-primary text-[2rem] uppercase leading-none text-primary lg:text-[3rem]">
          The leader in interactive VR
        </h2>
        <p className="">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};
export default Intro;
