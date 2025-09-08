const Blogs = require("../models/blogs.model")


const getAllBlogs = async(req,res)=>{
   try {
        const blogs = await Blogs.find({});
        res.json(blogs);
   } catch (error) {
    res.status(404).json({message: "Could not fetch Blogs from DB", error})
   } 
}




const createNewBlog = async(req,res)=>{
    const {title} = req.body
    
    try {
        const newBlogDoc = new Blogs({ title });
        await newBlogDoc.save(); // <-- important

        res.status(201).json({ message: "Blog created", blog: newBlogDoc });
    } catch (error) {
        if (error.code === 11000) {
            // duplicate key error
            return res.status(400).json({ error: "Title must be unique" });
        }
        res.status(500).json({ error: "Something went wrong", details: error.message });
    }
}

const deleteBlogById = async(req,res)=>{
   try {
        const {id} = req.params
        const result = await Blogs.findOneAndDelete({"_id":id});
        res.json(result)
   } catch (error) {
        res.status(500).json({message: "Couldn't delete blog post. Please try again"})
   } 
    

}

const updateBlogById = async(req,res)=>{
    try {
        const {id} = req.params
        const update = req.body
        const result = await Blogs.findOneAndUpdate({"_id":id},update,{new:true})
        res.json({result})
    } catch (error) {
        res.send(500).json({message: "Couldn't update blog post. Please try again"})
    }
}


module.exports = {getAllBlogs, createNewBlog, deleteBlogById,updateBlogById}