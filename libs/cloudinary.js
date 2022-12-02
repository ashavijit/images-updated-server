import { v2 as cloudinary } from "cloudinary";
import { API_KEY, API_SECRET, CLOUD_NAME } from "../config.js";

cloudinary.config({ 
  cloud_name: 'dzytxfuvc', 
  api_key: '827113547839471', 
  api_secret: 'A68aXjXijF17-BtxBf-Xse3Tcdk' 
});

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "posts",
  });
};

export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
};
