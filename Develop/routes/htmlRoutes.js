var path = require("path");
var router = require("express").Router();
const express = require("express");
module.exports = router;
const app = express();



app.get("/notes", () => {
    res.sendFile(path.join(__dirname, "Develop\public\notes.html"));
})

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "Develop\public\index.html"));

})