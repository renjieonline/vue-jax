const { getNextReqId } = require('./a1');

module.exports = {
  testb1: () => {
    console.log('b1:', getNextReqId());
  },
};
