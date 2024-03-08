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
  if (!imageCollection) {
    throw new Error("Invalid Path");
  }

  try {
    let imageInfo = await Promise.all(
      imageCollection.map((item) =>
        cloudinary.uploader.upload(item.path, {
          resource_type: "image",
          folder,
        })
      )
    );

    imageCollection.map((item) => fs.unlinkSync(item.path));
    return imageInfo;
  } catch (error) {
    imageCollection.map((item) => fs.unlinkSync(item.path));
  }
};

export const deleteImageOnCloudinary = async (imagePath) => {
  if (!imagePath) return null;

  try {
    const result = await Promise.all(
      imagePath.map((item, index) => {
        item.idOfImage.map((item) => {
          return cloudinary.uploader.destroy(item.public_id, {
            resource_type: "image",
          });
        });
      })
    );

    return result;
  } catch (error) {
    return error;
  }
};
