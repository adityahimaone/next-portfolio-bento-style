// src/pages/api/spotify.ts

import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { code } = req.body;

    const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

    console.log("redirectUri", redirectUri, clientId, clientSecret);

    if (!redirectUri || !clientId || !clientSecret) {
      res.status(500).json({
        error:
          "Environment variables SPOTIFY_REDIRECT_URI, SPOTIFY_CLIENT_ID, or SPOTIFY_CLIENT_SECRET are not set.",
      });
      return;
    }

    try {
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        new URLSearchParams({
          grant_type: "authorization_code",
          code,
          redirect_uri: redirectUri,
        }),
        {
          headers: {
            Authorization: `Basic ${Buffer.from(
              `${clientId}:${clientSecret}`
            ).toString("base64")}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      res.status(200).json({ access_token: response.data.access_token });
    } catch (error) {
      console.error("Error fetching Spotify token:", error.response?.data);
      res.status(error.response?.status || 500).json({
        error: "Failed to fetch Spotify token.",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
