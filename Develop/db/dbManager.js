// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

// let jsonPage = require("db.json");

class dbManager {
   
constructor(){
    this.lastId = 0;
    this.readVal;

}



async read(){
//create a path to dbjson
fs.readFile('db.json', 'utf8', function read(err, notes)
    {
        if(err){
        throw err};
        
        data = JSON.parse(JSON.stringify(notes));
        console.log(data);
       this.readVal = data;
    });

    
}

write(note){
    fs.appendFile('db.json',", \n"+ notes, function (err) {
                if (err) throw err;
                console.log('Saved!');
              });
    
}




getNotes(){
   return this.readVal;


}

addNote(note){
    var dt = new Date().getTime();
    
    var newId = "";
    
    for(i=0; i<4; i++){
        newId += (dt + Math.random()*4)%4 | 0;
       
    }
    note.id = newId
write(note);
return note;
}



removeNote(id){

}





}