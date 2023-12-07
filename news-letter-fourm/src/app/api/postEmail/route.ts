import { Prisma } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    if (req.method === 'POST') {
      const { data } = await req.json();
      console.log('Received data:', data);
      // Process the data (perform necessary operations)

      return NextResponse.json({ status: 200 });
    } else {
      console.error('Incorrect method request')
    }
}