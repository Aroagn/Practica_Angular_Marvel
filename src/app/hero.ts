export interface Hero {
  status: string;
  data: Data;
}

export interface Data {
  results: Result[];
}

export interface Result {
  id: number;
  name: string;
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  path: string;
  extension: string;
}
