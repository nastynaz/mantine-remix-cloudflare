import {MantineProvider} from "@mantine/core";
import {StylesPlaceholder} from "@mantine/remix";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import {cache} from "./mantine-polyfill";

export default function App() {
  return (
    <html lang="en">
      <head>
        <StylesPlaceholder />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <MantineProvider emotionCache={cache} withGlobalStyles withNormalizeCSS>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </MantineProvider>
      </body>
    </html>
  );
}
