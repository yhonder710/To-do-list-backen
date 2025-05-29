import { RolesRepository } from "@repositories/rolesRepositorie"
import { RolesService } from "@services/rolesService"
import { Request, Response } from "express"
import { IRolesRepository, IRolesService, Roles } from "types/rolesTypes"

const userRepository: IRolesRepository = new RolesRepository()
const userService: IRolesService = new RolesService(userRepository)

export class RolesController {
  findRoles = async (req: Request, res: Response): Promise<void> => {
    try {
      const roles = await userService.findRoles()
      if (roles.length > 0) {
        res.json(roles)
      }
      res.json({ message: "no roles Found" })

    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  }

  findRolesById = async (req: Request, res: Response): Promise<void> => {
    try {
      const roles = await userService.findRolesById(req.params.id)
      if (roles) {
        res.json(roles)
      }
      res.json({ message: "Not roles Found" })

    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  }

  createRoles = async (req: Request, res: Response): Promise<void> => {
    try {
      const newRoles: Roles = req.body
      const result = await userService.createRoles(newRoles)
      res.json(result)

    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  }

  updateRoles = async (req: Request, res: Response): Promise<void> => {
    try {
      const roles = await userService.updateRoles(req.params.id, req.body)

      if (roles) {
        res.json(roles)
      }
      res.json({ message: "Not roles Found" })

    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  }

  deleteRoles = async (req: Request, res: Response): Promise<void> => {
    try {
      const roles = await userService.deleteRoles(req.params.id)
      if (roles === false) {
        res.json({ message: "roles borrado" })
      }
      res.json({ message: "no roles Found" })

    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  }

}
