let reqId = 1;
console.log('a1.......');
module.exports = {
  getNextReqId: () => reqId++,
};
