const {Router} = require("express");
const router = Router()
const characters = require("./characters.js")
const favorites = require("./favourites.js")

router.use("/", characters);
router.use("/", favorites);

module.exports = router