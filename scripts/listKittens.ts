// To access your database
import { db } from '../api/src/lib/db'

export default async ({ args }) => {
  // Your script here...
  console.log(':: Executing script with args ::')
  console.log(args)

  const kittenList = await db.pet.findMany()
  console.log('el kitten list', kittenList)
}
