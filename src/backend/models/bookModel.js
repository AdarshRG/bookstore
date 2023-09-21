const mongoose = require("mongoose");

const bookSchema=mongoose.Schema(
    {
        title: {
        type:String,
        required:true,
        },
        author: {
            type:String,
            required:true,
            },
            publishYear: {
                type:String,
                required:true,
                },
    },
    {
        timetamps:true,
    }
)


const Book=mongoose.model("Book",bookSchema)        //mongodbil books nn folder will create

module.exports = {
    Book
  };