import { Prisma } from '@prisma/client'
import { ResolverArgs } from '@redwoodjs/api/dist/types'
import { db } from 'src/lib/db'

export const members = () => {
  return db.member.findMany()
}

export const Member = {
  team: (_obj, { root }: ResolverArgs<Prisma.MemberWhereUniqueInput>) =>
    db.member.findUnique({ where: { id: root.id } }).team(),
  user: (_obj, { root }: ResolverArgs<Prisma.MemberWhereUniqueInput>) =>
    db.member.findUnique({ where: { id: root.id } }).user(),
}
