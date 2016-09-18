
const y2011 = {
  0: {
    name: 'AccessPoint',
    filter: '1-AccessPoint',
    clipNum: 4,
  },
  1: {
    name: 'Escape',
    filter: '2-Escape',
    clipNum: 6,
  },
  2: {
    name: 'CaveHazard',
    filter: '3-CaveHazard',
    clipNum: 2,
  },
};

const y2012 = {
  0: {
    name: '무적함대',
    filter: '4-무적함대',
    clipNum: 2,
  },
  1: {
    name: 'GoldMedalist',
    filter: '5-GoldMedalist',
    clipNum: 4,
  },
  2: {
    name: 'BrainSchool',
    filter: '6-BrainSchool',
    clipNum: 1,
  },
  3: {
    name: 'MisteryPlanet',
    filter: '7-MisteryPlanet',
    clipNum: 3,
  },
  4: {
    name: 'Zoic',
    filter: '8-Zoic',
    clipNum: 5,
  },
  5: {
    name: 'Glow(수행평가)',
    filter: '9-Glow(수행평가)',
    clipNum: 4,
  },
  6: {
    name: 'Phantoms',
    filter: '10-Phantoms',
    clipNum: 8,
  },
};

const y2013 = {
  0: {
    name: '입시준비',
  },
};

const y2014 = {
  0: {
    name: '한장받고한장더',
    filter: '11-한장받고한장더',
    clipNum: 3,
  },
  1: {
    name: '테트리스(AI)',
    filter: '12-테트리스(AI)',
    clipNum: 1,
  },
  2: {
    name: '링그렛츠',
    filter: '13-링그렛츠',
    clipNum: 0,
    jpgNum: 1,
  },
};


const y2015 = {
  0: {
    name: 'Johnny(원격알람앱)',
    filter: '14-Johnny(원격알람앱)',
    clipNum: 0,
    jpgNum: 2,
  },
  1: {
    name: '자구야놀자',
    filter: '15-자구야놀자',
    clipNum: 1,
  },
  2: {
    name: '땅따먹기인공지능',
    filter: '16-땅따먹기인공지능',
    clipNum: 1,
  },
  3: {
    name: '컴퓨터그래픽스과제',
    filter: '17-컴퓨터그래픽스과제',
    jpgNum: 1,
  },
};

const y2016 = {
  0: {
    name: '당주행(기말프로젝트)',
    filter: '18-당주행(기말프로젝트)',
    jpgNum: 2,
  },
  1: {
    name: 'SkinLog',
    filter: '19-SkinLog',
    clipNum: 2,
  },
  2: {
    name: '플레이팅',
    filter: '20-플레이팅',
    jpgNum: 2,
  },
};

const works = {
  2011: y2011,
  2012: y2012,
  2013: y2013,
  2014: y2014,
  2015: y2015,
  2016: y2016,
};

module.exports = {
  // server: 'http://localhost:8080',
  server: 'drawable',
  port: 8080,
  works,
};
