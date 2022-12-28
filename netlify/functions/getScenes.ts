import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

import fetch from "node-fetch";
import { Scene } from "../../src/types";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const token = process.env.LIFX_API_TOKEN;

  const response = await fetch("https://api.lifx.com/v1/scenes", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = (await response.json()) as Scene[];

  return {
    statusCode: 200,
    body: JSON.stringify(data, null, 2),
  };
};

export { handler };
