type Image = {
  src: string;
  width: number;
  type: string;
};

type Source = {
  file: string;
  type: string;
  height?: number;
  width?: number;
  label?: string;
  bitrate?: number;
  filesize?: number;
  framerate?: number;
};

type Track = {
  file: string;
  kind: string;
  label?: string;
};

type VideoData = {
  title: string;
  mediaid: string;
  link: string;
  image: string;
  images: Image[];
  feedid: string;
  duration: number;
  pubdate: number;
  description: string;
  tags: string;
  sources: Source[];
  tracks: Track[];
  variations: Record<string, unknown>; // An empty object can be represented as a Record with string keys and unknown values
  rating: string;
  genre: string;
  free: string; // This might be better as a boolean, but based on your example, it's a string
};

export type { Image, Source, Track, VideoData };
