import { User } from "../entity/User";
import { Response } from "express";
import { sign } from "jsonwebtoken";

export const createAccessToken = (user: User) => {
  return sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "15m",
  });
};

export const createRefreshToken = (user: User) => {
  return sign(
    { userId: user.id, tokenVersion: user.tokenVersion },
    process.env.REFRESH_TOKEN_SECRET!,
    {
      expiresIn: "7d",
    }
  );
};

export const sendRefreshToken = (response: Response, token: string) => {
  response.cookie("jid", token, {
    httpOnly: true,
    path: "/refresh_token",
  });
};

export const createConfirmationToken = (user: User) => {
  return sign({ userId: user.id }, process.env.CONFIRM_TOKEN_SECRET!, {
    expiresIn: "4h",
  });
};