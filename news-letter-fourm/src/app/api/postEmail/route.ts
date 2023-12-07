import { Prisma, PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


export async function POST(req: Request) {
    if (req.method === 'POST') {
      const prisma = new PrismaClient();
      const { data } = await req.json();

      console.log('Received data:', data);
      // Process the data (perform necessary operations)
      await prisma.user.upsert({
        where: {
          email: data,
        },
        update: {},
        create: { email: data}
      })
      return NextResponse.json({ status: 200 });
    } else {
      console.error('Incorrect method request')
    }
}