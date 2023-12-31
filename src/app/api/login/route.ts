import { TUser } from '@/types'
import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email, password } = (await req.json()) as TUser

  const findUser = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!findUser) {
    return NextResponse.json('Nao exite usuario')
  }

  const comparePassword = findUser.password === password

  if (!comparePassword) {
    return NextResponse.error()
  }

  return NextResponse.json('Foi maneiro')
}
