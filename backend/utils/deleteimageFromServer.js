import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const deleteImageFromServer = () => {
    const demo=fileURLToPath(import.meta.url)
    const folderPath = path.join(__dirname, 'uploads');
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            throw new Error("Failed to read files: " + err.message);
        }
        if (files.length === 0) {
            return;
        }

        files.forEach((fileName) => {
            const filePath = path.join(folderPath, fileName);
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error("Failed to delete file:", err);
                } else {
                    console.log("File deleted:", filePath);
                }
            });
        });
    });
};

deleteImageFromServer()