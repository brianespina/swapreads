import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();
    console.log(name, email, password);
    // const validatedCredentials = z.object({
    //   email: z.string().email(),
    //   password: z.string().min(6),
    // });
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ message: "success" });
}
