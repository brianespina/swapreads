import { NextResponse } from "next/server";
import { z } from "zod";

export default function POST(request: Request) {
  try {
    const { email, password } = request.json();
    console.log(email, password);
    // const validatedCredentials = z.object({
    //   email: z.string().email(),
    //   password: z.string().min(6),
    // });
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ message: "success" });
}
