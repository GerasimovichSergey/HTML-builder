const { stat } = require('fs');
const path = require('path');
const { readdir } = require('fs/promises');

const folderPath = path.join(__dirname, 'secret-folder');

async function getFilesInfo() {
    const files = await readdir(folderPath, { withFileTypes: true });

    for (let file of files) {
        const filePath = path.join(folderPath, file.name);

        if (!file.isDirectory()) {
            stat(filePath, (err, fileInfo) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`${file.name.split('.')[0]} - ${file.name.split('.')[1]} - ${fileInfo.size} bytes`);
                }
            })
        }
    }
}

getFilesInfo();