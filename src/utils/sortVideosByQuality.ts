import { Source } from "../types/video-types";

const sortSourcesByBestQuality = (sources: Source[]): Source[] | null => {
  if (!sources.length) return null;
  const sortedVideos = [...sources]
    .filter((video) => video.height !== undefined)
    .sort((a, b) => (b.height || 0) - (a.height || 0));

  return sortedVideos || null;
};

const sortSourcesByWorstQuality = (sources: Source[]): Source[] | null => {
  if (!sources.length) return null;
  const sortedVideos = [...sources]
    .filter((video) => video.height !== undefined)
    .sort((a, b) => (a.height || 0) - (b.height || 0));

  return sortedVideos || null;
};

export const getBestQualitySource = (sources: Source[]): Source | null => {
  const sortedVideos = sortSourcesByBestQuality(sources);
  if (!sortedVideos) return null;
  return sortedVideos[0];
};

export const getWorstQualitySource = (sources: Source[]): Source | null => {
  const sortedVideos = sortSourcesByWorstQuality(sources);
  if (!sortedVideos) return null;
  return sortedVideos[0];
};
