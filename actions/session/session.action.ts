"use server";

import { auth } from "@/auth";

export const getAppSession = async () => {
  const session = await auth();

  if (!session) return null;
  return session;
};

export const getUserSession = async () => {
  const session = await auth();

  if (!session) return null;
  return session?.user ? session.user : null;
};
