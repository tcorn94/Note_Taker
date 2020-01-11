const express = require("express");
const fs =  require("fs");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

//API and HTML routes 
app.get("/api/notes", function(req, res) {
//readfile
res.json(getNotes);

})

app.post("/api/notes", function(req, res) {
//read, delete, add, rewrite



res.json(renderNoteList);
//add property unique id
const test = {

    name: "test"
};
test.id = 2
})

app.delete("/api/notes/:id", () => {
    //how did they grab id from front end
    //read, rewrite file
    res.json(deleteNote);
    res.json(getAndRenderNotes);

})

app.get("/notes", () => {
    res.sendFile(path.join(__dirname, "notes.html"));
})

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));

})

app.listen(PORT, () => {
    console.log(`Listening on Port:  ${PORT}`);


})