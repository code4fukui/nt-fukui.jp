const rootTitle = "NTふくい 2025" as const;

export default ({ title, children }: Lume.Data, helpers: Lume.Helpers) => (
  <>
    {{ __html: /* HTML */`<!DOCTYPE html>` }}
    <html class="w-screen h-screen">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title ? title + " | " + rootTitle : rootTitle}</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body class="w-screen h-screen flex flex-col">
        {children}
      </body>
    </html>
  </>
)