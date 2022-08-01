// Used in gamelist
export interface GameListEntry {
  id: number;
  createdat: string;
  white: string;
  black: string;
  result: string;
};

// Used in gameview and GameInfo(below)
// Used in profile view
export interface PlayerInfo {
  id: number;
  name: string;
  rating: number;
  ratingdiff: number;
};

// Used in gameview
export interface GameInfo {
  id: number;
  createdat: string;
  playedat: string;
  white: PlayerInfo;
  black: PlayerInfo;
  startpos: string;
  originaltime: number;
  incrementtime: number;
  whiterating: number;
  blackrating: number;
  result: string;
  whiteratingdiff: number;
  blackratingdiff: number;
  notation?: string;
  description?: string;
};

// Used in newgame form
export interface IGameInfo {
  playedat?: string;
  white: string;
  black: string;
  startpos: string;
  originaltime: number;
  incrementtime: number;
  result: string;
  notation?: string;
  description?: string;
};

// Used in newuser form
export interface IPlayerInfo {
  name: string;
  userid: string;
}