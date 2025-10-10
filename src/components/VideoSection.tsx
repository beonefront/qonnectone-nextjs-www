'use client';

import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="video-demo" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 pb-12">
          <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">
            Demo Systemu
          </h2>
          <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
            Zobacz QonnectOne w akcji
          </h3>
          <p className="mx-auto max-w-2xl text-center text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Poznaj możliwości naszej platformy poprzez interaktywną prezentację systemu
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              className="w-full h-auto"
              poster="/video/poster.jpg"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              muted={isMuted}
            >
              <source src="/video/system.mov" type="video/mp4" />
              <source src="/video/system.mov" type="video/quicktime" />
              Twoja przeglądarka nie obsługuje odtwarzania wideo.
            </video>

            {/* Video Controls Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <button
                onClick={togglePlay}
                className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 transition-all duration-200 transform hover:scale-110"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-gray-800" />
                ) : (
                  <Play className="w-8 h-8 text-gray-800 ml-1" />
                )}
              </button>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                onClick={toggleMute}
                className="bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all duration-200"
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Video Description */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Kliknij aby odtworzyć demo systemu QonnectOne
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
