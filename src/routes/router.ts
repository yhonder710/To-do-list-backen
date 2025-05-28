import { Router } from "express";
import { createUsersRoutes } from "./usersRoutes";

const router = Router()


export default () => {
  router.get('/health', (req, res) => {
    res.json({ message: "Api is Healthy" })
  })

  router.use('/users', createUsersRoutes())

  return router
}
