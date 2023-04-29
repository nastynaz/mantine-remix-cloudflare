
import { renderToString } from "react-dom/server"
import { RemixServer } from "@remix-run/react"
import type { EntryContext } from "@remix-run/cloudflare"
import { injectStyles } from "@mantine/remix"
import { createStylesServer, cache } from "./mantine-polyfill"
import { CacheProvider } from "@emotion/react"

const server = createStylesServer()

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let markup = renderToString(
    <CacheProvider value={cache}>
      <RemixServer context={remixContext} url={request.url} />
    </CacheProvider>
  )
  responseHeaders.set("Content-Type", "text/html")

  return new Response(
    `<!DOCTYPE html>${injectStyles(
      markup,
      // @ts-expect-error
      server
    )}`,
    {
      status: responseStatusCode,
      headers: responseHeaders,
    }
  )
}
