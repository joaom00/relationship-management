import { TOfficeWithClient } from '@/types'
import { AuthRoute } from '@/hook/authRoute'
import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function PATCH(req: NextRequest) {
  const { email, name, description, location, phone, website } =
    (await req.json()) as TOfficeWithClient

  const id = req.nextUrl.searchParams.get('id')

  const Auth = AuthRoute(req)

  if (!Auth) {
    return NextResponse.json('Token Incorreto')
  }

  if (!id) {
    return NextResponse.json('Tem id nao mano')
  }

  const findOffice = await prisma.office.findUnique({
    where: {
      id,
    },
  })

  if (!findOffice) {
    return NextResponse.json('Office não exists')
  }

  const office = await prisma.office.update({
    where: {
      id,
    },
    data: {
      name,
      email,
      phone,
      description,
      location,
      website,
    },
  })

  return NextResponse.json(office)
}
