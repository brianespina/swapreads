import { NextResponse } from "next/server";
import { z } from "zod";
import { hash } from "bcrypt";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();
    // console.log(name, email, password);
    const validatedCredentials = z
      .object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(4),
      })
      .parse({ name, email, password });

    const hashedPassword = await hash(validatedCredentials.password, 10);

    const newUser = await prisma.user.create({
      data: {
        name: validatedCredentials.name,
        email: validatedCredentials.email,
        password: hashedPassword,
      },
    });

    console.log(newUser);
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ message: "success" });
}
