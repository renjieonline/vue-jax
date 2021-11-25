import { getNextReqId } from "./a";

console.log("b..........");
export const testb = () => {
  // console.log(reqId);
  console.log("b:", getNextReqId());
  console.log("b:", getNextReqId());
  console.log("b:", getNextReqId());
};
