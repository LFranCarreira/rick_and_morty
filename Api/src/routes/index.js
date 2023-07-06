const {Router} = require("express");
const router = Router()
const characters = require("./characters.js")
const favourites = require("./favourites.js")

router.use("/", characters);
router.use("/", favourites);


module.exports = router