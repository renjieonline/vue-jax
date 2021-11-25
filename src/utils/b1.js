const { getNextReqId } = require("./a");

module.exports = {
  testb1: () => {
    console.log("b1:", getNextReqId());
  }
};
