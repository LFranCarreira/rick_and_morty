let myFavorites = [];

const postFav = function (req, res) {
  const { id, status, name, species, origin, image, gender } = req.body;
  if(id==="RELOAD"){return res.status(200).json(myFavorites)}
  if (!id || !name || !image) {
    return res
      .status(404)
      .json({ message: "error 404" });
  }
  const character = {
    id,
    status,
    name,
    species,
    origin,
    image,
    gender,
  };
  myFavorites.push(character);
  res.status(200).json(myFavorites);
};

const deleteFav = function (req, res) {
  const { id } = req.params;
  if (!id) {
    return res.status(404).json({ message: "id inexistente" });
  }
  const newFavorites = myFavorites.filter((char) => char.id !== Number(id));
  myFavorites = newFavorites;
  res.status(200).json(myFavorites);
};

module.exports = {
  deleteFav,
  postFav,
};