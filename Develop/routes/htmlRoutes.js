var path = require("path");
var router = require("express").Router();
module.exports = router;



app.get("/notes", () => {
    res.sendFile(path.join(__dirname, "Develop\public\notes.html"));
})

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "Develop\public\index.html"));

})