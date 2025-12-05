export interface NewspaperStat {
  newspaper: string;
  total: number;
  before: number;
  after: number;
  percentage: number; // 已轉為小數格式，例如 0.029 表示 2.9%
}

export const newspaperStats: NewspaperStat[] = [
  {
    newspaper: "Boston Globe",
    total: 17,
    before: 4,
    after: 13,
    percentage: 0.029,
  },
  {
    newspaper: "Chicago Tribune",
    total: 8,
    before: 4,
    after: 4,
    percentage: 0.014,
  },
  {
    newspaper: "LA Times",
    total: 31,
    before: 11,
    after: 20,
    percentage: 0.053,
  },
  {
    newspaper: "New York Times",
    total: 27,
    before: 16,
    after: 11,
    percentage: 0.046,
  },
  {
    newspaper: "Others",
    total: 429,
    before: 217,
    after: 212,
    percentage: 0.735,
  },
  {
    newspaper: "Star Tribune",
    total: 3,
    before: 0,
    after: 3,
    percentage: 0.005,
  },
  {
    newspaper: "USA Today",
    total: 45,
    before: 19,
    after: 26,
    percentage: 0.077,
  },
  {
    newspaper: "Washington Post",
    total: 24,
    before: 15,
    after: 9,
    percentage: 0.041,
  },
  {
    newspaper: "Total",
    total: 584,
    before: 286,
    after: 298,
    percentage: 1.0,
  },
];
