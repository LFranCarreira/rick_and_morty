const { Router } = require("express");
const router = Router();
const { deleteFav, postFav } = require("./../controllers/favorites");

router.post("/favourites", postFav);
router.delete("/favourites/:id", deleteFav);

module.exports = router;
