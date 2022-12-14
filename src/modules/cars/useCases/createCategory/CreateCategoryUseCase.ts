import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({name, description}: IRequest): void {
    const categoryAleadyExists = this.categoriesRepository.findByName(name);

  if (categoryAleadyExists) {
    throw new Error("Categoria inexistente!");
  }

  this.categoriesRepository.create({ name, description });
  }
};

export { CreateCategoryUseCase };