import { RolesController } from "@controllers/rolesController"
import { Router } from "express"

export const createRolesRoutes = () => {
  const rolesRouter = Router()
  const rolesController = new RolesController()

  rolesRouter.get('/', rolesController.findRoles)

  rolesRouter.get('/:id', rolesController.findRolesById)

  rolesRouter.post('/', rolesController.createRoles)

  rolesRouter.put('/:id', rolesController.updateRoles)

  rolesRouter.delete('/:id', rolesController.deleteRoles)

  return rolesRouter
}
