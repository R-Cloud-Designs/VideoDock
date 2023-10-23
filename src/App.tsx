import React, { useState, useEffect } from "react";
import "./App.css";
import { VideoData } from "./types/video-types";
import VideoPlayer from "./components/VideoPlayer";
import { getBestQualitySource } from "./utils/sortVideosByQuality";
import { filterMP4Sources } from "./utils/filterSourcesByType";

const App: React.FC = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const [hoveredVideoTitle, setHoveredVideoTitle] = useState<string | null>(
    null
  );

  useEffect(() => {
    fetch("https://cdn.jwplayer.com/v2/playlists/sR5VypYk")
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.playlist);
      });
  }, []);

  const handleVideoTileHover = (videoTitle: string) => {
    setHoveredVideoTitle(videoTitle);
  };

  return (
    <div className="app-container">
      {selectedVideo ? (
        <VideoPlayer
          videoData={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      ) : (
        <>
          <h1 className="app-title">VideoDock</h1>
          <p className="app-subtitle">
            Your daily dose of content creation inspiration.
          </p>
          <div className="video-grid">
            {videos.map((video) => {
              const isHovered = video.title === hoveredVideoTitle;
              const filteredSources = filterMP4Sources(video.sources);
              const bestQualitySource = getBestQualitySource(filteredSources);
              const previewUrl =
                isHovered && bestQualitySource ? bestQualitySource.file : null;

              return (
                <div
                  key={video.title}
                  className="video-tile"
                  style={{ backgroundImage: `url(${video.image})` }}
                  onClick={() => setSelectedVideo(video)}
                  onMouseEnter={() => handleVideoTileHover(video.title)}
                  onMouseLeave={() => setHoveredVideoTitle(null)}
                >
                  {isHovered && previewUrl && (
                    <video src={previewUrl} autoPlay muted loop />
                  )}
                  {/* <div className="video-info">
                    <h2 className="video-title">{video.title}</h2>
                    <p className="video-description">{video.description}</p>
                  </div> */}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
