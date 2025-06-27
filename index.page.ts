import { createElement } from "react";
import { renderToString } from "react-dom/server";
import App from "./app/app.tsx";

const ssr = renderToString(createElement(App));

export default function (_data: Lume.Data, { url }: Lume.Helpers) {
  return /* HTML */ `
    <!DOCTYPE html>
    <html lang="ja">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>NTふくい 2025</title>
        <link rel="stylesheet" href="${url("style.css")}">
        <link rel="icon" href="/assets/sabae-hana-icon.png">
      </head>
      <body>
        <div id="app">${ssr}</div>
        <footer class="flex items-center justify-center gap-2 h-16 mt-4">
          <p>主催: NT鯖江運営委員会</p>
          <img src="/assets/code4fukui_logo.svg" alt="Code for FUKUI" class="h-14" />
        </footer>
      </body>
    </html>
  `
}