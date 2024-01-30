import { Card, CardContent, CardHeader } from "@/components/ui/card";
import VideoPlayer from "@/components/Cards/VideoPlayer";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { github_alt, live } from "@/public/assets/icons";
import Link from "next/link";

interface Props {
  project: {
    videoSrc: string;
    poster: StaticImageData;
    title: string;
    technology: {
      name: string;
    }[];
    link_live: string;
    link_code: string;
  };
  isMiddleCard: boolean;
}
const ProjectCard = ({ project, isMiddleCard }: Props) => {
  return (
    <Card
      className={`${
        isMiddleCard ? "md:-mt-4 mt-0" : "mt-0"
      } bg-dark-2 rounded-xl p-0 h-full md:h-[296px]  cursor-pointer`}
    >
      <CardHeader className="p-0">
        <div className="w-full h-full relative">
          <VideoPlayer src={project.videoSrc} poster={project.poster} />
        </div>
      </CardHeader>
      <CardContent className="text-light p-2 flex flex-col gap-2">
        <p className="font-bold">{project.title}</p>
        <div className="flex gap-1 flex-wrap">
          {project.technology.map((item, index) => (
            <p
              key={index}
              className="text-sm font-medium bg-gray-1/30 px-2 rounded-md"
            >
              {item.name}
            </p>
          ))}
        </div>
        <div className="w-1/2 flex justify-end gap-3 ms-auto">
          <Link
            href={project.link_live}
            target="_black"
            rel="noreferrer noopener"
          >
            <Button className="project-card_btn">
              <p>Live</p>
              <Image src={live} alt="liveIcon" width={22} height={22} />
            </Button>
          </Link>
          <Link
            href={project.link_code}
            target="_black"
            rel="noreferrer noopener"
          >
            <Button className="project-card_btn">
              <p>Code</p>
              <Image src={github_alt} alt="liveIcon" width={18} height={18} />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
