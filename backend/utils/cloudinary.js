import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_API_SECRETE,
});

export const uploadImageOnCloudinary = async (imageCollection, folder) => {
  // console.log('filepath: ',filepath);
  if (!imageCollection) {
    throw new Error("Invalid Path");
  }

  try {
    let imageInfo = await Promise.all(
      imageCollection.map((item) =>
        cloudinary.uploader.upload(item.path, { folder })
      )
    );

    console.log("File Upload Successfully");
    imageCollection.map((item) => fs.unlinkSync(item.path));
    return imageInfo;
  } catch (error) {
    imageCollection.map((item) => fs.unlinkSync(item.path));
    console.log("error:   ", error.message);
  }
};
