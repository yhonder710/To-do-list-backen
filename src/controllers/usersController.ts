import { UserRepository } from "@repositories/userRepositorie"
import { UserService } from "@services/userService"
import { Request, Response } from "express"
import { IUserRepository, IUserService, User } from "types/UsersTypes"

const userRepository: IUserRepository = new UserRepository()
const userService: IUserService = new UserService(userRepository)

export class UsersController {
  findUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await userService.findUser()
      if (users.length > 0) {
        res.json(users)
      }
      res.json({ message: "no user Found" })

    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  }

  findUserById = async (req: Request, res: Response): Promise<void> => {
    try {
      const user = await userService.findUserById(req.params.id)
      if (user) {
        res.json(user)
      }
      res.json({ message: "Not user Found" })

    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  }

  createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const newUser: User = req.body
      const result = await userService.createUser(newUser)
      res.json(result)

    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  }

  updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const user = await userService.updateUser(req.params.id, req.body)

      if (user) {
        res.json(user)
      }
      res.json({ message: "Not user Found" })

    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  }

  deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const user = await userService.deleteUser(req.params.id)
      if (user === false) {
        res.json({ message: "Users borrado" })
      }
      res.json({ message: "no user Found" })

    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  }

}
