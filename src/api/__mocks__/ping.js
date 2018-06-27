import axios from "axios/index";

export default function ping() {
  return new Promise(async resolve => {
    process.nextTick(() => {
      resolve({ message: "Pong" });
    });
  });
}
