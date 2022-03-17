const express=require("express")
const app =express()



app.get("/books",allBooks,(req,res)=>{
    console.log("abc")
})

app.get("/book/:name",singleBook,(req,res)=>{
    return res.json({bookName: req.name})
})


   function singleBook(req,res,next){
       if(req.params.name=="HarryPotter"){
        req.name = req.params.name
     
    }
    else if(req.params.name=="GameOfThrones"){
        req.name = req.params.name
        
    }
    next()
}



function allBooks(req,res,next){
    console.log ( "Fetching all books")

    next()

}


app.listen(7680, ()=>{
    console.log("port 7860 is working fine")
})