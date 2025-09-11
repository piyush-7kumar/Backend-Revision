const Blogs = require("../models/blogs.model");

class BlogService{
    findAll = async()=>{
        const allBlogs = await Blogs.find({});
        return allBlogs
    };
    
    save =  async(doc)=>{
        const result = await doc.save();
        return result
    };

    create = async(body)=>{
        const newBlog = new Blogs(body);
        const savedDoc = await this.save(newBlog);
        return savedDoc
    }
    
    delete = async(id)=>{
        return await Blogs.findOneAndDelete({"_id":id});
    }

    update = async(id,update)=>{
       return await Blogs.findOneAndUpdate({"_id":id},update,{new:true})
    }

    getBlogByTitleAndAuthor = async(title,author)=>{
       return await Blogs.find({ 
            $and: [
                title ? { title: { $regex: new RegExp(title, "i") } } : null,
                author ? { "authors.email": new RegExp(`^${author}$`, "i") } : null
            ].filter(Boolean)
        });
    }

    getBlogByTitle = async(title)=>{
        return await Blogs.find({title: new RegExp(title,"i")})
    }

    getBlogByAuthor = async(author)=>{
        return await Blogs.find({"authors":{$elemMatch:{email:author}}})
    }

}






module.exports = BlogService