import { db } from 'src/lib/db'

export const pets = () => {
  return db.pet.findMany()
}
