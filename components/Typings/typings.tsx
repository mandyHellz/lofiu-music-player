export interface songsProps {
  name: string;
  cover: string;
  artist: string;
  audio: string;
  color: string[];
  id: string;
  active: boolean;
}

export interface songTimeProps {
  currentTime: number;
  duration: number;
  animationPercentage: number;
}
