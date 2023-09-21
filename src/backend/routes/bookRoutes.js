const express = require("express");
const { Book } = require("../models/bookmodel");
const router=express.Router()

//Route for save a new book
router.post("/books",async (req,res)=>{
    try {
        if(
            !req.body.title||!req.body.author||!req.body.publishYear        //if all these present allenki error will send
        ){
            res.send({
                message:"send all req field"
            })
        }
        const newBook={
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear,
        }
    const book=await Book.create(newBook)
    return res.send(book)
    
    } catch (error) {
        res.send({message:error.message})
    }
    })


    //Route for Get Al books from database
    router.get("/books",async(req,res)=>{
        try {
            const books=await Book.find({})
            return res.json(
               { count:books.length,
                 data:books
               })
        } catch (error) {
            res.send({message:error.message})
        }
    }) 
    
    
    //Route for Get One books from database
    router.get("/books/:id",async(req,res)=>{
        try {
            const{id}=req.params;
            const books=await Book.findById(id)
            // const books=await Book.findOne({_id:id})       findOne vechit this method
            return res.json(books)
        } catch (error) {
            res.send({message:error.message})
        }
    })
    
    
    //Edit book from database
    router.put("/books/:id",async(req,res)=>{
        try {
          
            const{id}=req.params;
            const result=await Book.findByIdAndUpdate(id,req.body)
            if (!result) {
                return res.status(404).json({ message: "Book not found" });
              }
             res.json({message:"Book updated succesfully"})
        } catch (error) {
            res.send({message:error.message})
        }
    })
    
    
    //Route for delete a book
    router.delete("/books/:id",async(req,res)=>{
        try {
            const{id}=req.params;
            const result=await Book.deleteOne({_id:id})            //findByIdAndDelete(id)
            if (!result) {
                return res.status(404).json({ message: "Book not found" });
              }
             res.json({message:"Book deleted succesfully"})
        } catch (error) {
            res.send({message:error.message})
        }
    })
    

    module.exports = router;