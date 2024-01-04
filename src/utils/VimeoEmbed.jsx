import React from 'react';

const VimeoEmbed = ({ videoId }) => {
  const embedUrl = `https://player.vimeo.com/video/${videoId}`;

  return (
    <div className="vimeo-container">
      <iframe
        title={`Vimeo Video ${videoId}`}
        src={embedUrl}
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        className="vimeo-iframe"
      ></iframe>
    </div>
  );
};

export default VimeoEmbed;
