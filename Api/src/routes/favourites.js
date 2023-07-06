const { Router } = require("express");
const router = Router();
const { deleteFav, postFav } = require("../controllers/favourites");

router.post("/favourites", postFav);
router.delete("/favourites/:id", deleteFav);

module.exports = router;

/*
POST postFav: "/fav"
DELETE deleteFav: "/fav/:id"
*/