// Used in gamelist
export interface GameListEntry {
  id: number;
  createdAt: string;
  white: string;
  black: string;
  result: string;
};

// Used in gameview and GameInfo(below)
export interface UserInfo {
  id: number;
  name: string;
  rating: number;
};

// Used in gameview
export interface GameInfo {
  id: number;
  createdAt: string;
  white: UserInfo;
  black: UserInfo;
  result: string;
  notation?: string;
  description?: string;
};

// Used in newgame form
export interface IGameInfo {
  white: string;
  black: string;
  result: string;
  notation?: string;
  description?: string;
};