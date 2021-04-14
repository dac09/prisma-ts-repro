import { db } from 'src/lib/db'

export const pets = () => {
  // @MARK: Let's check current user type
  // Should have no TS errors here
  const name = context.currentUser.name
  console.log(name)
  console.log(context.currentUser.Member[0].role)

  return db.pet.findMany()
}
