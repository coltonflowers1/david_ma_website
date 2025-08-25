interface VimeoPlayerProps {
  videoId: string;
  title: string;
  autoplay?: boolean;
  className?: string;
}

export function VimeoPlayer({ 
  videoId, 
  title, 
  autoplay = false, 
  className = "w-full h-full" 
}: VimeoPlayerProps) {
  const vimeoUrl = `https://player.vimeo.com/video/${videoId}?${autoplay ? 'autoplay=1&' : ''}title=0&byline=0&portrait=0&responsive=1`;
  
  return (
    <iframe
      src={vimeoUrl}
      className={className}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      title={title}
    />
  );
}