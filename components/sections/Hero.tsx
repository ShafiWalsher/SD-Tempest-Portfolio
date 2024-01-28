import MouseSvg from "@/components/MouseSvg";
const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="section-container text-green-1">
        <div className="flex flex-col items-center px-4 md:px-10 pt-40 relative">
          <h1 className="font-redressed text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-5">
            Hi<span className="dot-symbol">.</span> {"I'm Sháfi"}
            <span className="dot-symbol">.</span>
          </h1>
          <h1 className="font-poppins font-extrabold text-4xl xsm:text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            {"A Fŭllstack Dėv"}
            <span className="dot-symbol">.</span>
          </h1>
          <div className="w-full flex items-center justify-center">
            <MouseSvg />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
