const { Router } = require("express");
const router = Router();
const {
  getCharacterId,
  login,
  getAllCharacters,
} = require("./../controllers/character")

router.get("/character/:id", getCharacterId);
router.get("/login", login);
router.get("/allcharacters", getAllCharacters);

module.exports = router;

