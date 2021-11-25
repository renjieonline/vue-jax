const { getNextReqId } = require("./a");

module.exports = {
  testc1: () => {
    console.log("c1:", getNextReqId());
  }
};
