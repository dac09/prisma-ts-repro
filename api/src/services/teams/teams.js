import { Prisma } from '@prisma/client'
import { ResolverArgs } from '@redwoodjs/api/dist/types'
import { db } from 'src/lib/db'

export const teams = () => {
  return db.team.findMany()
}

export const team = ({ id }) => {
  return db.team.findUnique({
    where: { id },
  })
}

export const createTeam = ({ input }) => {
  return db.team.create({
    data: input,
  })
}

export const updateTeam = ({ id, input }) => {
  return db.team.update({
    data: input,
    where: { id },
  })
}

export const deleteTeam = ({ id }) => {
  return db.team.delete({
    where: { id },
  })
}

export const Team = {
  Member: (_obj, { root }) =>
    db.team.findUnique({ where: { id: root.id } }).Member(),
}
