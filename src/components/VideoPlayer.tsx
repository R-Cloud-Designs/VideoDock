import React, { useState } from "react";
import { VideoData, Image, Source, Track } from "../types/video-types";
import "./VideoPlayer.css";
import { filterMP4Sources } from "../utils/filterSourcesByType";
import { getBestQualitySource } from "../utils/sortVideosByQuality";
import { filterTracksByKind } from "../utils/filterCaptionsByType";
import {
  getCodeByLanguage,
  getLanguageByCode,
} from "../utils/getLanguageByCode";

interface VideoPlayerProps {
  videoData: VideoData;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoData, onClose }) => {
  const mp4Sources = filterMP4Sources(videoData.sources);
  const initialSource = getBestQualitySource(mp4Sources)?.file || "";
  const captionTracks = filterTracksByKind(videoData.tracks, "captions");

  const [currentSource, setCurrentSource] = useState(initialSource);
  return (
    <div className="video-container">
      <video autoPlay src={currentSource} controls crossOrigin="anonymous">
        {captionTracks.map((track) => {
          const languageCode = getCodeByLanguage(track.label || "");
          const srcLang = getLanguageByCode(languageCode);

          return (
            <track
              key={track.file}
              src={track.file}
              kind={track.kind || "subtitles"}
              label={track.label}
              srcLang={srcLang}
              default={track.label === "English"}
            />
          );
        })}
        Your browser does not support the video tag.
      </video>

      <select
        value={currentSource}
        onChange={(e) => setCurrentSource(e.target.value)}
      >
        {mp4Sources.map((source) => (
          <option key={source.label} value={source.file}>
            {source.label}
          </option>
        ))}
      </select>

      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default VideoPlayer;
