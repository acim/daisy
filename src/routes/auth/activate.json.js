import { goto } from "@sapper/app"
import jwt from "jsonwebtoken"
import User from "../../models/User"

export async function get(req, res, next) {
  res.setHeader("Content-Type", "application/json")

  try {
    const decoded = jwt.verify(
      decodeURI(req.query.token),
      process.env.JWT_SECRET_KEY
    )
    const user = await User.findOne({ username: decoded.username })
    user.activate()
    res.status(204).end()
  } catch (err) {
    res.status(500).json({
      error: err.message,
    })
  }
}
