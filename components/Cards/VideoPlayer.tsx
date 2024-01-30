"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  src: string;
  poster: StaticImageData;
}

const VideoPlayer = ({ src, poster }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      if (isPlaying) {
        videoElement.play();
      } else {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    }
  }, [isPlaying]);

  return (
    <div className="relative">
      <div className="">
        <video
          onMouseEnter={() => setIsPlaying(true)}
          onMouseLeave={() => setIsPlaying(false)}
          ref={videoRef}
          muted
          loop
          className="w-full h-full rounded-t-xl"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* <div className={`${!isPlaying ? "hidden" : "relative flex"}`}>
        <Image
          src={poster}
          alt="poster"
          width={0}
          height={0}
          sizes="100vh"
          className={`${
            !isPlaying
              ? "opacity-0"
              : "opacity-100 object-contain w-full h-full absolute top-0 left-0 transition-opacity duration-100"
          }`}
        />
      </div> */}
    </div>
  );
};

export default VideoPlayer;
