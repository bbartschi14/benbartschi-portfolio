export interface NodeConnection {
  firstConnection: number; // id of other node
  firstIsFront: boolean; // true if front, false if back
  secondConnection: number; // id of other node
  secondIsFront: boolean; // true if front, false if back
  helpers?: number[] | undefined;
}

export interface NodePoint {
  id: number;
  isFront: boolean;
  helpers?: number[] | undefined;
}

export interface CircleData {
  leftOffset: number;
  topOffset: number;
  colorType: number; // 0 = red, 1 = green, 2 = yellow
  id: number;
  isHorizontal: boolean;
}
