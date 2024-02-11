interface ICreateSpecificationDTO {
  name: string
  description: string
}

interface SpecificationsRepositoryContract {
  create({ description, name }: ICreateSpecificationDTO): void
}

export { SpecificationsRepositoryContract, ICreateSpecificationDTO }
