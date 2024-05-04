import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { hash } from "bcrypt";
import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have 8 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = userSchema.parse(body);

    // check if email is unique
    const isEmailUnique = await db.users.findUnique({
      where: { email: email },
    });

    if (isEmailUnique) {
      return NextResponse.json({
        user: null,
        message: "Email already exist",
        status: 409,
      });
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await db.users.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      {
        user: rest,
        message: "Registration Succesful",
      },
      { status: 201 }
    );
  } catch (error) {}
}
