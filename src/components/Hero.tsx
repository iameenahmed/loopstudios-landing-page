const Hero = () => {
  return (
    <div className="relative top-0 flex min-h-[40.625rem] w-full items-center justify-center bg-hero-mobile bg-cover bg-center bg-no-repeat px-6 before:absolute before:inset-0 before:bg-black/50 lg:justify-start lg:bg-hero-desktop lg:px-24 xl:px-[10.25rem]">
      <div className="z-10 w-full max-w-[32rem] border-2 border-white p-6 pb-4 lg:mt-20 lg:max-w-[40.5rem] lg:px-11 lg:pb-6 lg:pt-9">
        <h1 className="font-primary text-[2.5rem] uppercase leading-[1.1em] tracking-wide text-white md:text-5xl lg:text-[4.5rem]">
          Immersive experiences that deliver
        </h1>
      </div>
    </div>
  );
};
export default Hero;
