// I imported the "Handler" type to use in the function
import { Handler } from "@netlify/functions";

// Created a variable called handler, with the type Handler
// and being an asynchronous function
const handler: Handler = async (event, context) => {
  // This code is almost the same, I only added a
  // nullish verification in the query parameters
  const { name } = event.queryStringParameters ?? {}
  const message = `Hello ${name || "world"}!`

  return {
    statusCode: 200,
    body: JSON.stringify({ data: message })
  }
}

// Instead of using module exports, we will
// use export { handler }, and just as javascript,
// handler is a reserved word, other names will not be readed
export { handler }