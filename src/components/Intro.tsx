import interactiveMobile from "../assets/mobile/image-interactive.jpg";
import interactiveDesktop from "../assets/desktop/image-interactive.jpg";

const Intro = () => {
  return (
    <div className="my-20 flex flex-col px-6 text-center md:mx-20 lg:my-40 lg:flex-row lg:items-end lg:px-0 lg:text-start xl:mx-[10.25rem]">
      <picture className="mx-auto lg:basis-[65%] xl:basis-[730px]">
        <source media="(min-width: 1024px)" srcSet={interactiveDesktop} />
        <img src={interactiveMobile} alt="a man wearing a VR headset" />
      </picture>
      <div className="mt-10 px-4 lg:-ml-[14.35%] lg:basis-[48%] lg:bg-white lg:p-0 lg:pl-12 lg:pt-16 xl:basis-[545px] xl:pl-[6.25rem] xl:pt-24">
        <h2 className="mb-4 font-primary text-[2rem] uppercase leading-none text-primary md:text-4xl xl:mb-6 xl:text-5xl">
          The leader in interactive VR
        </h2>
        <p className="leading-relaxed">
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
