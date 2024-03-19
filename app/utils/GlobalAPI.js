const { default: axios } = require("axios");

export const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
});

export const getAllCategories = async () => {
  try {
    const res = await axiosClient.get("/categories?populate=*");
    return res.data.data;
  } catch (error) {
    console.log("something went wrong: ", error.message);
  }
};
