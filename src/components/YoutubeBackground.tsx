
import { useState, useEffect } from 'react';

interface YoutubeBackgroundProps {
  videoId?: string; // For YouTube videos
  videoFile?: string; // For local video files
}

const YoutubeBackground = ({ videoId, videoFile }: YoutubeBackgroundProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Delay loading the video for better initial page load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Simplified video path handling - directly use the filename
  const getVideoPath = (path: string): string => {
    if (!path) return '';
    
    // For assets in the public directory, they should be referenced from the root
    // Remove any leading 'public/' as it's not part of the path in production
    return path.replace(/^public\//, '');
  };

  return (
    <div className="hero-video-container">
      {isLoaded ? (
        videoFile ? (
          // Local video file
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster="/placeholder.svg"
          >
            <source src={getVideoPath(videoFile)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          // YouTube embed
          <iframe 
            className="hero-video"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&version=3&vq=hd720&enablejsapi=1&iv_load_policy=3&fs=0&annotation=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Sunrise Solar Solutions Background Video"
          ></iframe>
        )
      ) : (
        <div className="w-full h-full bg-gray-900"></div>
      )}
      <div className="hero-overlay"></div>
    </div>
  );
};

export default YoutubeBackground;
