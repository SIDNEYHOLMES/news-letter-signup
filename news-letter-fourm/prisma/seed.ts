import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.upsert({
    create: {
      email: 'test@test.com',
    },
    update: {},
    where:<any>{ 
      email: 'test@test.com'
    }
  })
  console.log({ user }, "THE USER")
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })