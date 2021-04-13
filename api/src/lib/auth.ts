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
  })
}

export const requireAuth = ({ role } = {}) => {
  if (!context.currentUser) {
    throw new AuthenticationError("You don't have permission to do that.")
  }

  if (
    typeof role !== 'undefined' &&
    typeof role === 'string' &&
    !context.currentUser.roles?.includes(role)
  ) {
    throw new ForbiddenError("You don't have access to do that.")
  }

  if (
    typeof role !== 'undefined' &&
    Array.isArray(role) &&
    !context.currentUser.roles?.some((r) => role.includes(r))
  ) {
    throw new ForbiddenError("You don't have access to do that.")
  }
}
