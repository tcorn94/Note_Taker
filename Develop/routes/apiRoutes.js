const router = require("express").Router();
const dbManager = require("../db/dbManager");


router.get("/notes", function(req, res){
    dbManager
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));


});

router.post("/notes", (req, res) => {
    dbManager
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));

} );

router.delete("/notes/:id", function(req, res){
    dbManager
    .removeNote(req.params.id)
    .then(() => res.json({ok:true}))
    .catch(err => res.status(500).json(err));

});







// app.get("/api/notes", function(req, res) {
//     //readfile
//     var data;
//     fs.readFile('../db/db.json', 'utf8', function read(err, notes)
//     {
//         if(err)
//         throw err;
        
//         data = JSON.parse(JSON.stringify(notes));
//         console.log(data);
//         res.send(data);
    
//     }  );
    
//     })
    
//     app.post("/api/notes", function(req, res) {
//     //read, delete, add, rewrite
//     var dt = new Date().getTime();
    
//     gId = "";
    
//     for(i=0; i<16; i++){
//         var r = (dt + Math.random()*16)%16 | 0;
//         gId += r;
//     }
    
//     req.body.id = gId;
//     //console.log(req);
//     console.log(req.body);
//     var x = JSON.stringify(req.body);
    
//     fs.appendFile('../db/db.json',", \n"+ x, function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//       });
//     //add property unique id
    
//     })
    
//     app.delete("/api/notes/:id", () => {
//         var uniqueID = req.params.id;
    
//         console.log(uniqueID);
        
        
//         //how did they grab id from front end
//         //read, rewrite file
//         res.json(deleteNote);
//         res.json(getAndRenderNotes);
    
//     })

    module.exports = router;