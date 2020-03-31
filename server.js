const express = require("express");
const fileUpload = require("express-fileupload");
var bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(fileUpload());


// Upload Endpoint
app.post('/upload', (req, res) => {
    
    console.log("test ", req);

    

    if(req.files === null) {
        return res.status(400).json({msg: "No file uploades"})
    }  
    

    const file = req.files.file;
    const fileName = file.name.split(".")[0] + new Date().getTime() + "." + file.name.split(".")[1];
   console.log(fileName);

    file.mv(`${__dirname}/client/public/food-images/${fileName}`, err => {
        if(err) {
            console.error(err);
            return res.status(500).json(err);
        }

        res.json({ fileName: fileName, filePath: `/food-images/${fileName}`})
    })
} )


app.listen(5000, () => console.log('server started'));
