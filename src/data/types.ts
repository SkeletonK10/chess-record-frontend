export interface SmallGameView {
  id: number;
  createdAt: string;
  white: string;
  black: string;
  result: string;
};

export interface UserInfo {
  id: number;
  name: string;
  rating: number;
};


export interface GameInfo {
  id: number;
  createdAt: string;
  white: UserInfo;
  black: UserInfo;
  result: string;
  notation?: string;
};
