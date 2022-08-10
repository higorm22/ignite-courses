import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post ("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAleadyExists = categoriesRepository.findByName(name);

  if (categoryAleadyExists) {
    return response.status(400).json({error: "Categoria inexistente!"})
  }

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) =>{
  const all = categoriesRepository.list();

  return response.json(all);
});

export { categoriesRoutes };