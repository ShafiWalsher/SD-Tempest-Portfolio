import { recentWork } from "@/constants";
import Link from "next/link";
import React from "react";
import ProjectCard from "../Cards/ProjectCard";

const Portfolio = () => {
  return (
    <section id="portfolio" className=" bg-dark-1 w-full h-full">
      <div className="section-container">
        <p className="bg-section-word">WORK</p>
        <div className="section-content_wrapper gap-5">
          <div className="section-title_wrapper">
            <span className="setion-title-underline">
              <span className="relative section-title">Portfolio.</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-3 py-6">
            {recentWork.map((project, index) => (
              <ProjectCard
                key={project.title + index}
                {...project}
                isMiddleCard={(index + 1) % 3 === 2}
              />
            ))}
          </div>
          <div className="flex w-full justify-center md:justify-end">
            <Link
              href="https://github.com/ShafiWalsher?tab=repositories"
              target="_blank"
              rel="noreferrer noopener"
              className="font-semibold"
            >
              {"Explore all >>"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
