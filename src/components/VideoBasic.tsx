'use client';

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";

interface VideoBasicProps {
  thumbnailSrc: string;
  videoSrc: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function VideoBasic({
  thumbnailSrc,
  videoSrc,
  alt,
  width = 1920,
  height = 600,
  className = ""
}: VideoBasicProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const aspectRatio = width / height;

  return (
    <div className={`relative border rounded-lg shadow-lg max-w-screen-lg w-full ${className}`}>
      <div
        className="relative cursor-pointer group rounded-md p-0 ring-1 ring-slate-200/50 dark:bg-gray-900/70 dark:ring-white/10 backdrop-blur-md w-full"
        style={{ aspectRatio: aspectRatio }}
      >
        {/* Ukryte wideo do preload metadanych */}
        {!isPlaying ? (
          <>
            <Image
              alt={alt}
              src={thumbnailSrc}
              width={width}
              height={height}
              className="relative z-10 transition-all duration-200 ease-out group-hover:brightness-[0.8] rounded-md border w-full h-full object-cover"
              priority
            />
            <div
              className="absolute inset-0 z-20 flex items-center justify-center group-hover:scale-100 scale-[0.9] transition-all duration-200 ease-out rounded-2xl"
              onClick={handlePlay}
            >
              <div className="z-30 bg-primary/10 flex items-center justify-center rounded-full backdrop-blur-md size-28">
                <div className="flex items-center justify-center bg-gradient-to-b from-primary/30 to-primary shadow-md rounded-full size-20 transition-all ease-out duration-200 relative group-hover:scale-[1.2] scale-100">
                  <Play className="size-8 text-white fill-white transition-transform duration-200 ease-out group-hover:scale-105 scale-100" style={{ filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))" }} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <video
            className="w-full h-full rounded-md border object-cover"
            controls
            autoPlay
            onEnded={handleVideoEnd}
            width={width}
            height={height}
          >
            <source src={videoSrc} type="video/mp4" />
            <source src={videoSrc} type="video/quicktime" />
            Twoja przeglądarka nie obsługuje odtwarzania wideo.
          </video>
        )}
      </div>
    </div>
  );
}
