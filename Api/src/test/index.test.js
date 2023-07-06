const session = require("supertest");
const app = require("../app");
const agent = session(app);

var props;
var favourites;
var character1;
var character2;
beforeEach(() => {
  props = ["id", "name", "species", "gender", "status", "origin", "image"];
  favourites = [];
  character1 = {
    id: 1,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    origin: "unknown",
    image: "https://example.com/image1.jpg",
    gender: "Male",
  };
  character2 = {
    id: 2,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    origin: "Earth (C-137)",
    image: "https://example.com/image2.jpg",
    gender: "Male",
  };
});

describe("Test de Rutas", () => {
  describe(" GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await agent.get("/rickandmorty/character/1");
      props.forEach((prop) => {
        expect(response.body).toHaveProperty(prop);
      });
    }, 8000);
    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/7777").expect(500);
    });
  });
  describe("GET /rickandmorty/login", () => {
    it("Valida que, si ejecutas esta ruta pasándole la información de login (email y password) correctas, debes obtener un objeto como este:{access: true;}", async () => {
      const response = await agent
        .get("/rickandmorty/login")
        .query({ email: "Juan2112@gmail.com", password: "@123AsaRR" });
      expect(response.body).toEqual({ access: true });
    });
    it("Testear que en el caso de enviar la información incorrecta la porpiedad access sea false", async () => {
      const response = await agent
        .get("/rickandmorty/login")
        .query({ email: "juan.com", password: "12224" });
      expect(response.body).toEqual({ access: false });
    });
  });
  describe("POST /rickandmorty/fav", () => {
    it("Lo que envíes por body debe ser devuelto en un arreglo", async () => {
      favourites.push(character1);
      const response = await agent.post("/rickandmorty/favourites").send(character1); 
      expect(response.body).toEqual(favourites);
    });
    it("Si vuelves a enviar un nuevo elemento por body, este debe ser devuelto en un arreglo que incluye un elemento enviado previamente", async () => {
      favourites.push(character1, character2);
      const response = await agent.post("/rickandmorty/favourites").send(character2);
      expect(response.body).toEqual(favourites);
    });
  });
  describe("DELETE /rickandmorty/favourites/:id", () => {
    it("Primero deberás testear que lo que devuelva esta ruta, en el caso de que no haya ningún personaje con el ID que envías, sea un arreglo con los elementos previos sin modificar", async () => {
      favourites.push(character1, character2);
      
      await agent.delete("/rickandmorty/favourites/8888").expect(200, favourites);
    });
    it("Luego debes testear que cuando envías un ID válido se elimine correctamente al personaje", async () => {
      favourites.push(character1);
      await agent.delete("/rickandmorty/favourites/2").expect(200, favourites);
    });
  });
});