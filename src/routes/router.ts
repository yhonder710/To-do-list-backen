import { Router } from "express";
import { createUsersRoutes } from "./usersRoutes";
import { createRolesRoutes } from "./rolesRoutes";
import { loginUser, registerUser } from "@controllers/auth/authControllers";

const router = Router()


export default () => {
  router.get('/health', (req, res) => {
    res.json({ message: "Api is Healthy" })
  })

  router.post('/auth/register', registerUser)
  router.post('/auth/login', loginUser)

  router.use('/users', createUsersRoutes())
  router.use('/roles', createRolesRoutes())

  return router
}
