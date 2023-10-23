import type { VideoData } from "../types/video-types";

export const filterTracksByKind = (
  tracks: VideoData["tracks"],
  kind: string,
) => {
  return tracks.filter((track) => track.kind === kind);
};
