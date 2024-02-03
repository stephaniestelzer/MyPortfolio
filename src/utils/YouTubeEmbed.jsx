import React from 'react';

const YouTubeEmbed = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-container">
      <iframe
        title="YouTube Video"
        width="560"
        height="315"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
