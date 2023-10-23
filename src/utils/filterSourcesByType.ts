import { Source, VideoData } from "../types/video-types";

export const filterSourcesByType = (sources: Source[], type: string) => {
  // Make sure that each child has a unique key.
  return sources
    .filter((source) => source.type === type)
    .map((source, index) => {
      return {
        ...source,
        key: `${source.type}-${index}`,
      };
    });
};

export const filterMP4Sources = (sources: Source[]) => {
  return filterSourcesByType(sources, "video/mp4");
};
