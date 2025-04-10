import axios from "axios";
import { NextResponse } from "next/server";
import { ChzzUserResponse } from "@/types/chzzk/user";

export const GET = async (req: Request) => {
  const token = req.headers.get("Authorization")?.split(" ")[1];
  try {
    const response = await axios.get<ChzzUserResponse>(
      process.env.CHZZK_API_URL + "/open/v1/users/me",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
