import { db } from 'src/lib/db'

export const pets = () => {
  // @MARK: Let's check current user type
  // Should have no TS errors here
  const name = context.currentUser.name
  console.log(name)

  return db.pet.findMany()
}
