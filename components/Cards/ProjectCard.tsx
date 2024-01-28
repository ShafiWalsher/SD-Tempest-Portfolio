import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  imgURL: StaticImageData;
  title: string;
  technology: {
    name: string;
  }[];
  isMiddleCard: boolean;
}
const ProjectCard = ({ imgURL, title, technology, isMiddleCard }: Props) => {
  return (
    <Card
      className={`${
        isMiddleCard ? "md:-mt-4 mt-0" : "mt-0"
      } bg-dark-1 rounded-xl p-0 h-full md:h-[280px]`}
    >
      <CardHeader className="p-0">
        <div className="w-full h-full relative">
          <Image
            src={imgURL}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-t-xl"
          />
        </div>
      </CardHeader>
      <CardContent className="text-light p-2">
        <div className="flex gap-1 flex-wrap">
          {technology.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
