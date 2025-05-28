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

  router.get('/users/:id', async (req, res) => {
    const user = await userService.findUserById(req.params.id)
    res.json(user)
  })

  router.post('/users', async (req, res) => {
    const newUser: User = req.body
    const result = await userService.createUser(newUser)
    res.json(result)
  })

  router.put('/users/:id', async (req, res) => {
    const user = await userService.updateUser(req.params.id, req.body)
    res.json(user)
  })

  router.delete('/users/:id', async (req, res) => {
    const user = await userService.deleteUser(req.params.id)
    res.json(user)
  })

  return router
}
