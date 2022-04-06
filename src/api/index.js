import { REACT_APP_API_URL } from "../config";
import axios from "axios";

const API = {
  uploadImage: async (image, title = "", description = "") => {
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = async () => {
      let contents = {
        image: reader.result,
        title: title,
        description: description,
      };
      return await axios.post(REACT_APP_API_URL + "uploads", contents);
    };
    reader.onerror = (error) => {
      console.log("Error ", error);
    };
  },
  getImages: async () => {
    return await axios.get(REACT_APP_API_URL + "images");
  },
};

export default API;
