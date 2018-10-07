export interface SingleLetters {
  [key: string]: {
    offset: number;
  };
}
export interface MultipleLetters {
  [key: string]: number[];
}
export interface PossibleLengths {
  [key: string]: {
    min: number;
    max: number;
    len: number;
  };
}
