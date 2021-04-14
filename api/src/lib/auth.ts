import { AuthenticationError, ForbiddenError } from '@redwoodjs/api'
import { db } from './db'

interface DecodedJWTToken {
  id: string
  aud: string
  role: string
  email: string
  confirmed_at: Date
  created_at: Date
  updated_at: Date
}

export const getCurrentUser = async (decoded: DecodedJWTToken) => {
  return db.user.findUnique({
    where: {
      email: decoded.email,
    },
    include: {
      Member: true,
    },
  })
}

export const requireAuth = () => {
  if (!context.currentUser) {
    throw new AuthenticationError("You don't have permission to do that.")
  }
}
