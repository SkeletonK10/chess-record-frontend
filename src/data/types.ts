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
export interface UserInfo {
  id: number;
  name: string;
  rating: number;
};

// Used in gameview
export interface GameInfo {
  id: number;
  createdat: string;
  playedat: string;
  white: UserInfo;
  black: UserInfo;
  result: string;
  notation?: string;
  description?: string;
};

// Used in newgame form
export interface IGameInfo {
  playedat?: string;
  white: string;
  black: string;
  result: string;
  notation?: string;
  description?: string;
};

// Used in newuser form
export interface IUserInfo {
  name: string;
  userid: string;
}