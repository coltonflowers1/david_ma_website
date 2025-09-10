import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function Resume() {
  const pdfUrl = `${import.meta.env.BASE_URL}ActingResume.pdf`; 

  return (
    <div className="w-full h-screen bg-white">
      <iframe
        src={pdfUrl}
        title="Resume PDF"
        className="w-full h-full border-none"
        style={{ minHeight: '100vh' }}
      />

      {/* Optional button floating on top */}
      <div className="absolute top-4 right-4 z-10">
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
          <Button className="flex items-center gap-2 bg-white shadow-lg">
            <ExternalLink className="w-4 h-4" />
            Open in New Tab
          </Button>
        </a>
      </div>
    </div>
  );
}