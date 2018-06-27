import axios from "axios";

export default function ping() {
  return new Promise(async (resolve, reject) => {
    const response = await axios.get("/api/ping");
    if (response.data.message) {
      resolve(resolve.data);
    } else {
      reject(new Error("Failed to ping"));
    }
  });
}
