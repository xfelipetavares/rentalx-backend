const specificationsRepository = RAMSpecificationsRepository.getInstance()
const listSpecificationsUseCase = new ListSpecificationsUseCase(specificationsRepository)
const listSpecificationsController = new ListSpecificationsController(listSpecificationsUseCase)

export { listSpecificationsController }
