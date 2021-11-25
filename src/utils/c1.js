const { getNextReqId } = require('./a1');

module.exports = {
  testc1: () => {
    console.log('c1:', getNextReqId());
  },
};
