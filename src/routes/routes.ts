import { Router } from "express";

const router = Router()

export default () => {
  router.get('/health', (req, res) => {
    res.json({ message: "Api is Healthy" })
  })

  return router
}
