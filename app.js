const express=require("express")

const bodyParser = require("body-parser")
const date=require(__dirname+"/date.js")


const app=express()
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine' ,'ejs');
app.use(express.static("public"));

// In JS The const arrays can be added with new items but it cannot be assigned to a another array.
const toDos=["Go to Gym","Do Reps","Get Bulk up"];
const workItems=[];


app.get("/",function(req,res){
    // res.set("Content-Type", "text/html");
    const day=date.getDate()
    res.render('list',{listTitle:day,newListItems:toDos});
})
app.post("/",function(req,res){
    
    const item=req.body.todo;
    console.log(req.body)
    if (req.body.list==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        toDos.push(item);
        res.redirect("/");
    }
})
app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",newListItems:workItems});
    
 })

app.get("/about",function(req,res){
    res.render("about");
});


app.listen(3000,function(){
    console.log("The server is running on port 3000")
})