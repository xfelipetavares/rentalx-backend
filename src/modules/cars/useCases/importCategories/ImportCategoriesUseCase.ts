import { parse } from "csv-parse"
import fs from "fs"
import { CategoriesRepositoryContract } from "../../repositories/contracts/contract.CategoriesRepository"

interface IImportedCategories {
  name: string
  description: string
}

class ImportCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepositoryContract) {}

  loadCategories(file: Express.Multer.File): Promise<IImportedCategories[]> {
    return new Promise((resolve, reject) => {
      const parseFile = parse()
      const categories: IImportedCategories[] = []

      fs.createReadStream(file.path).pipe(parseFile)

      parseFile
        .on("data", (chunk) => {
          const [name, description] = chunk

          categories.push({ name, description })
        })
        .on("end", () => {
          fs.promises.unlink(file.path)
          resolve(categories)
        })
        .on("error", (error) => reject(error))
    })
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const importedCategories: IImportedCategories[] = await this.loadCategories(file)
    importedCategories.map((category) => {
      if (!this.categoriesRepository.findByName(category.name)) {
        this.categoriesRepository.create(category)
      }
    })
  }
}

export { ImportCategoriesUseCase }
