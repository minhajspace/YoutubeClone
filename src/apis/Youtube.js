import axios from "axios";

const key = "AIzaSyCoy1XmWDJD1ktOsuuFaHoCxVnTNG-P4PQ";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: key
  }
});
