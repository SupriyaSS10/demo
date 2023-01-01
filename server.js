var express=require('express');
var aap=express();
var path=require("path");
var fs=require("fs");

app.use(express.static(path.join(__dirname,"public")));

app.get('/',function(req,resp){
resp.sendFile(path,join(__dirname+"/index.html"))
})
app.get('/home'),function(req,resp){
    var person={firstName:"supriya",lasthome:"sonawane",age:26};
        resp.send("person")
}
var server=app.listen(8000,function(){
var host=server.address().address
var port=server.address().port
})