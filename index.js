
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([{
    "name" : "URL",
    "message" : "Enter the url you want to save :\n"
    }])
  .then((answers) => {
    const url = answers.URL;
    fs.writeFile("input.txt", url, (err) =>{
        if (err) throw err;
        console.log("The file has been saved! ");
    });
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('image.png'));
    console.log("Generated the QR code in image.png!")
});
  





