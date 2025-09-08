const router = require("express").Router();
const {getAllUsers,getUserByUuid,searchUsersByQuery} = require("../controllers/users.controllers");
const {verifyAuth} = require("../middleware/verify.auth")


router.get("/",verifyAuth, getAllUsers);//verify auth is a middleware here it is only applied to / route
router.get("/search",searchUsersByQuery);

router.use(verifyAuth)//here verifyAuth is applied in a new line that mean it is applied to all routes below this line
router.get("/:uuid",getUserByUuid);


module.exports = router;