const router = require("express").Router();
const {getAllUsers,getUserByUuid,searchUsersByQuery} = require("../controllers/users.controllers")


router.get("/",getAllUsers);
router.get("/search",searchUsersByQuery);
router.get("/:uuid",getUserByUuid);


module.exports = router;