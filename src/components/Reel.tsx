import React from "react";
import { useState } from 'react';
import { VimeoPlayer } from "./VimeoPlayer";

interface Video {
  id: string;
  vimeoId: string;
}

export function Reel() {

  const videos: Video[] = [
    {
      id: "1",
      vimeoId: "1069668959", // Replace with actual Vimeo video ID
    },
    {
      id: "2",
      vimeoId: "1000535548", // Replace with actual Vimeo video ID
    },
    {
      id: "3",
      vimeoId: "1069672636", // Replace with actual Vimeo video ID
    },
    {
      id: "4",
      vimeoId: "1069478467"
    },
    {
      id: "5",
      vimeoId: "1069674456"
    },
    {
      id: "6",
      vimeoId: "1069674612"
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="max-w-none mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {videos.map((video) => (
            <div key={video.id} className="w-full">
              <div className="aspect-video">
                <VimeoPlayer 
                  videoId={video.vimeoId} 
                  title={`Reel Video ${video.id}`} 
                  className="w-full h-full rounded-lg" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}