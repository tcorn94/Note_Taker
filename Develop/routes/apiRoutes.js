app.get("/api/notes", function(req, res) {
    //readfile
    var data;
    fs.readFile('../db/db.json', 'utf8', function read(err, notes)
    {
        if(err)
        throw err;
        
        data = JSON.parse(JSON.stringify(notes));
        console.log(data);
        res.send(data);
    
    }  );
    
    })
    
    app.post("/api/notes", function(req, res) {
    //read, delete, add, rewrite
    var dt = new Date().getTime();
    
    gId = "";
    
    for(i=0; i<16; i++){
        var r = (dt + Math.random()*16)%16 | 0;
        gId += r;
    }
    
    req.body.id = gId;
    //console.log(req);
    console.log(req.body);
    var x = JSON.stringify(req.body);
    
    fs.appendFile('../db/db.json',", \n"+ x, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    //add property unique id
    
    })
    
    app.delete("/api/notes/:id", () => {
        var uniqueID = req.params.id;
    
        console.log(uniqueID);
        
        
        //how did they grab id from front end
        //read, rewrite file
        res.json(deleteNote);
        res.json(getAndRenderNotes);
    
    })