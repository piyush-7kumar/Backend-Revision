const BlogService = require("../services/blogs.service");
const BlogServiceInstance= new BlogService();

const getAllBlogs = async(req,res)=>{
   try {
        const blogs = await BlogServiceInstance.findAll()
        res.json(blogs);
   } catch (error) {
    res.status(404).json({message: "Could not fetch Blogs from DB", error})
   } 
}


const createNewBlog = async(req,res)=>{
    try {
        const body = req.body;
        const newBlogDoc = await BlogServiceInstance.create(body);

        res.status(201).json({ message: "Blog created", blog: newBlogDoc });
    } catch (error) {
        if (error.code === 11000) {
            // duplicate key error
            return res.status(400).json({ error: "Title must be unique" });
        }
        res.status(500).json({ error: "Couldn't create new blog post. Please try again", details: error.message });
    }
}

const deleteBlogById = async(req,res)=>{
   try {
        const {id} = req.params
        const result = await BlogServiceInstance.delete(id)
        res.json(result)
   } catch (error) {
        res.status(500).json({message: "Couldn't delete blog post. Please try again"})
   } 
    

}

const updateBlogById = async(req,res)=>{
    try {
        const {id} = req.params
        const update = req.body
        const result = await BlogServiceInstance.update(id,update)
        res.json({result})
    } catch (error) {
        res.send(500).json({message: "Couldn't update blog post. Please try again"})
    }
}

const getBlogs = async (req, res) => {

  const { title, author } = req.query;
  try {

    if(title&&author){
        const result = await BlogServiceInstance.getBlogByTitleAndAuthor(title,author)
        res.json(result);
    }

    if(title){
        const result = await BlogServiceInstance.getBlogByTitle(title);
        res.json(result)
    }

    if(author){
        const result = await BlogServiceInstance.getBlogByAuthor(author);
        res.json(result)
    }
    

    

  } catch (error) {
    res.status(500).json({ 
      message: "Couldn't fetch blog posts. Please try again", 
      error 
    });
  }
};

module.exports = {getAllBlogs, createNewBlog, deleteBlogById,updateBlogById, getBlogs}