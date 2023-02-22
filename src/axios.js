import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyX0lEIjo0LCJFbWFpbCI6Imtlc3RvbkBlbWFpbC5jb20iLCJSb2xlX0lEIjpudWxsLCJpYXQiOjE2NzM2MTYwOTQsImV4cCI6MTY3MzY5ODg5NH0.XZXaaOsCeVxtw1-DmPPe9mJtkNGAz8LH5ttDqHxTLc4";

const authFetch = axios.create({
  baseURL: "https://npc-api.dsaved.com/v0/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default authFetch;
