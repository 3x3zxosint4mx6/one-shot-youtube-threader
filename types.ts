
export interface ThreadPost {
  id: number;
  content: string;
}

export interface GroundingSource {
  title: string;
  uri: string;
}

export interface ThreadResult {
  posts: ThreadPost[];
  sources: GroundingSource[];
  summary: string;
}

export enum GenerationStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
