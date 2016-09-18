const port = 8080;
const works = {
  0: {
    seq: 0,
    name: 'AccessPoint',
    filter: '1-AccessPoint',
    clipNum: 4,
  },
  1: {
    seq: 1,
    name: 'Escape',
    filter: '2-Escape',
    clipNum: 6,
  },
  2: {
    seq: 2,
    name: 'CaveHazard',
    filter: '3-CaveHazard',
    clipNum: 2,
  },
  3: {
    seq: 3,
    name: '무적함대',
    filter: '4-무적함대',
    clipNum: 2,
  },
  4: {
    seq: 4,
    name: 'GoldMedalist',
    filter: '5-GoldMedalist',
    clipNum: 4,
  },
  5: {
    seq: 5,
    name: 'BrainSchool',
    filter: '6-BrainSchool',
    clipNum: 1,
  },
  6: {
    seq: 6,
    name: 'MisteryPlanet',
    filter: '7-MisteryPlanet',
    clipNum: 3,
  },
  7: {
    seq: 7,
    name: 'Zoic',
    filter: '8-Zoic',
    clipNum: 5,
  },
  8: {
    seq: 8,
    name: 'Glow(수행평가)',
    filter: '9-Glow(수행평가)',
    clipNum: 4,
  },
  9: {
    seq: 9,
    name: 'Phantoms',
    filter: '10-Phantoms',
    clipNum: 8,
  },
  10: {
    seq: 11,
    name: '한장받고한장더',
    filter: '11-한장받고한장더',
    clipNum: 3,
  },
  11: {
    seq: 12,
    name: '테트리스(AI)',
    filter: '12-테트리스(AI)',
    clipNum: 1,
  },
  12: {
    seq: 13,
    name: '링그렛츠',
    filter: '13-링그렛츠',
    clipNum: 0,
    jpgNum: 1,
  },
  13: {
    seq: 14,
    name: 'Johnny(원격알람앱)',
    filter: '14-Johnny(원격알람앱)',
    clipNum: 0,
    jpgNum: 2,
  },
  14: {
    seq: 15,
    name: '자구야놀자',
    filter: '15-자구야놀자',
    clipNum: 1,
  },
  15: {
    seq: 16,
    name: '땅따먹기인공지능',
    filter: '16-땅따먹기인공지능',
    clipNum: 1,
  },
  16: {
    seq: 17,
    name: '컴퓨터그래픽스과제',
    filter: '17-컴퓨터그래픽스과제',
    jpgNum: 1,
  },
  17: {
    seq: 18,
    name: '당주행(기말프로젝트)',
    filter: '18-당주행(기말프로젝트)',
    jpgNum: 2,
  },
  18: {
    seq: 19,
    name: 'SkinLog',
    filter: '19-SkinLog',
    clipNum: 2,
  },
  19: {
    seq: 20,
    name: '플레이팅',
    filter: '20-플레이팅',
    jpgNum: 2,
  },
};

module.exports = {
  // server: 'http://localhost:8080',
  server: 'drawable',
  port: 8080,
  works,
};
