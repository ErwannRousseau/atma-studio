export type ImageSanity = {
  url: string;
  altText?: string;
  hotspot?: {
    height: number;
    width: number;
    x: number;
    y: number;
  };
};
