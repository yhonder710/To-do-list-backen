import { Router } from "express";
import { UserService } from "Oservices/userService";
import { UserRepository } from "Qrepositories/useRepositorie";
import { IUserRepository, IUserService, User } from "types/UsersTypes";

const router = Router()

export default () => {

  const userRepository: IUserRepository = new UserRepository()
  const userService: IUserService = new UserService(userRepository)

  router.get('/health', (req, res) => {
    res.json({ message: "Api is Healthy" })
  })

  router.get('/users', async (req, res) => {
    const users = await userService.findUser()
    res.json(users)
  })

  router.post('/users', async (req, res) => {
    const newUser: User = req.body
    const result = await userService.createUser(newUser)

    res.json(result)
  })

  return router
}
