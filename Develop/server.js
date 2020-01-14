const express = require("express");
const fs =  require("fs");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const jsonstuff = require("./db/db.json");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//API and HTML routes 




app.listen(PORT, () => {
    console.log(`Listening on Port:  ${PORT}`);


})