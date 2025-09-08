const router = require("express").Router();
const {getAllBlogs, createNewBlog,deleteBlogById,updateBlogById} = require("../controllers/blogs.controller");

router.get("/", getAllBlogs)
router.post("/new", createNewBlog);
router.delete("/:id",deleteBlogById);
router.patch("/:id",updateBlogById)

module.exports = router;