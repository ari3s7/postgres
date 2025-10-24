import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export default client;



async function createUser () {
      await client.user.create({
  data: {
    username: "john",
    password: "john123",
    age: 24,
    city: "London"
  }
})
}

createUser()

