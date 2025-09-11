const router = require("express").Router();
const {getAllBlogs, getBlogs, createNewBlog,deleteBlogById,updateBlogById} = require("../controllers/blogs.controller");

router.get("/", getAllBlogs)
router.get("/search",getBlogs)
router.post("/new", createNewBlog);
router.delete("/:id",deleteBlogById);
router.patch("/:id",updateBlogById)

module.exports = router;