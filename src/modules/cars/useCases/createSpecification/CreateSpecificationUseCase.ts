import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase{
  constructor (private specificationRepository: ISpecificationRepository) {}

  execute({name, description}: IRequest): void{
    const specificationAleryExist = this.specificationRepository.findByName(name);

    if (specificationAleryExist) {
      throw new Error("Especificação existente!");
    }

    this.specificationRepository.create({name, description});


  }
}

export { CreateSpecificationUseCase }