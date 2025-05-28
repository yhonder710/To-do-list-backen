import { UsersController } from "@controllers/usersController"
import { Router } from "express"

export const createUsersRoutes = () => {
  const usersRouter = Router()
  const usersController = new UsersController()

  usersRouter.get('/', usersController.findUsers)

  usersRouter.get('/:id', usersController.findUserById)

  usersRouter.post('/', usersController.createUser)

  usersRouter.put('/:id', usersController.updateUser)

  usersRouter.delete('/:id', usersController.deleteUser)

  return usersRouter
}
