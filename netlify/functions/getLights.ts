import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

import fetch from "node-fetch";
import { Light } from "../../src/types";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const token = process.env.LIFX_API_TOKEN;

  const response = await fetch("https://api.lifx.com/v1/lights/all", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = (await response.json()) as Light[];

  return {
    statusCode: 200,
    body: JSON.stringify(data, null, 2),
  };
};

export { handler };
