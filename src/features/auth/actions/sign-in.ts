"use server";

import { redirect } from "next/navigation";
import { verify } from "@node-rs/argon2";
import z from "zod";
import { prisma } from "@/lib/prisma";
import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { setSessionCookie } from "@/auth/cookie";
import { createSession } from "@/auth/session";
import { tickyasPath } from "@/paths";
import { generateRandomToken } from "@/utils/crypto";

const signInSchema = z.object({
  email: z.string().min(1, { message: "Is required" }).max(191).email(),
  password: z.string().min(6).max(191),
});

export const signIn = async (_actionState: ActionState, formData: FormData) => {
  try {
    const { email, password } = signInSchema.parse(
      Object.fromEntries(formData)
    );

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return toActionState("ERROR", "Incorrect email or password", formData);
    }

    const validPassword = await verify(user.passwordHash, password);

    if (!validPassword) {
      return toActionState("ERROR", "Incorrect email or password", formData);
    }

    const sessionToken = generateRandomToken();
    const session = await createSession(sessionToken, user.id);

    await setSessionCookie(sessionToken, session.expiresAt);
  } catch (error) {
    return fromErrorToActionState(error, formData);
  }

  redirect(tickyasPath());
};
