import { skillsShowcase } from "@/constants";
import { ProfilePicture } from "@/public/assets/images";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="bg-dark-1 w-full h-full">
      <div className="section-container">
        <p className="bg-section-word">ABOUT</p>
        <div className="section-content_wrapper">
          <div className="section-title_wrapper">
            <span className="setion-title-underline">
              <span className="section-title">about me.</span>
            </span>
          </div>

          <div className="section_content">
            {/* Profile Picture */}
            <div className="w-[300px] md:w-[350px] lg:w-[450px]">
              <Image
                src={ProfilePicture}
                alt="sd-profile-pic"
                className="w-auto h-50"
              />
            </div>
            {/* Profile Picture End */}

            {/* About Info */}
            <div className="flex flex-col flex-1 gap-10 justify-center">
              <p>
                {`Hello I'm`}
                <span className="font-redressed text-3xl text-dutch-white">
                  {`Shafi.`}
                </span>
                {`Ever since I was 19, I've been on a quest to build brands that
                stand out and make an impact. Always looking for new creative
                challenges and opportunities. Join me on my journey as I explore
                the world of design and share my stories and insights along the
                way.`}
              </p>

              <div className="flex flex-col gap-4 justify-center items-center lg:items-start">
                <h2 className="font-bold text-2xl text-slate-50/50">
                  {`{ . . . What I Know }`}
                </h2>

                <div className="flex flex-wrap gap-4 justify-center items-start">
                  {skillsShowcase.map((section) => (
                    <div key={section.type} className="">
                      <h3
                        key={section.type}
                        className="flex text-light font-semibold"
                      >
                        <Image
                          src={section.icon}
                          alt={section.type}
                          width={18}
                          height={18}
                          className="me-2"
                        />
                        {section.type}
                      </h3>
                      {section.skills.map((skill) => (
                        <p
                          key={skill.name}
                          className="leading-7 italic text-gray-1 font-medium"
                        >
                          {"> " + skill.name}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* About Info End */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
