import React from "react";

import { VideoContainer, ResponsiveIframe } from "./styles";

function YouTubeIframeResponsive({ youtubeID }) {
  return (
    <VideoContainer>
      <ResponsiveIframe
        title="Titulo do Iframe"
        src={`https://www.youtube.com/embed/${youtubeID}?autoplay=1&mute=1&controls=0`}
        frameBorder="0"
        allow="accelerometer; autoplay;  encrypted-media; gyroscope; picture-in-picture"
      />
    </VideoContainer>
  );
}

export default YouTubeIframeResponsive;