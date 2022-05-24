const path = require('path');

const { mkdir, readdir, copyFile, unlink } = require('fs/promises');

const folderPath = path.join(__dirname, 'files');
const newFolderPath = path.join(__dirname, 'files-copy');

async function copyFolder() {
    await mkdir(newFolderPath, { recursive: true });
    const files = await readdir(folderPath);
    const newFiles = await readdir(newFolderPath);

    if (newFiles.length > 0) {
        for (let file of newFiles) {
            unlink(path.join(newFolderPath, file));
        }
    }

    for (let file of files) {
        const filePath = path.join(folderPath, file);
        const newFilePath = path.join(newFolderPath, file);

        await copyFile(filePath, newFilePath);
    }
}

copyFolder();