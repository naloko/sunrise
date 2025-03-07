
import { useState, useEffect } from 'react';

interface YoutubeBackgroundProps {
  videoId?: string; // Made optional since we're now supporting local videos too
  videoFile?: string; // Added for local video file path
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
            poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          >
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          // YouTube embed (kept for backward compatibility)
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
