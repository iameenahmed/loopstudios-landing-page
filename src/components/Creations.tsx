import creations from "../data/creations";

const Creations = () => {
  return (
    <div className="my-20 grid place-items-center px-6 md:mx-20 md:grid-cols-2 md:grid-rows-[auto_auto] lg:my-[11.5rem] lg:px-0 xl:mx-[11.25vw]">
      <div className="md:place-self-start ">
        <h3 className="font-primary text-[2rem] font-normal uppercase text-primary lg:text-5xl">
          Our creations
        </h3>
      </div>
      <div className="mt-[5.25rem] grid gap-8 md:col-span-2 md:grid-cols-2 lg:grid-cols-4">
        {creations.map(({ id, title, desktop, mobile }) => (
          <figure
            key={id}
            className="relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-black/90 before:via-transparent before:to-transparent md:before:bg-gradient-to-t"
          >
            <picture>
              <source media="(min-width: 768px)" srcSet={desktop} />
              <img src={mobile} alt={title} />
            </picture>
            <figcaption className="absolute bottom-0 left-0 right-1/2 p-5 font-primary text-xl uppercase leading-tight text-white md:right-0 md:text-[2rem] lg:px-[2.77vw]">
              {title}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-20 md:col-start-2 md:row-start-1 md:mt-0 md:justify-self-end">
        <button className="border-2 border-primary px-12 py-2.5 uppercase tracking-[0.25em] text-primary transition-colors duration-300 hover:bg-primary hover:text-white">
          See all
        </button>
      </div>
    </div>
  );
};

export default Creations;
