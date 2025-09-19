import lume from "lume/mod.ts";
import basePath from "lume/plugins/base_path.ts";
import esbuild from "lume/plugins/esbuild.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import sourceMaps from "lume/plugins/source_maps.ts";

const site = lume({
  location: new URL(Deno.env.get("PAGES_URL") ?? "https://nt-fukui.jp"),
});

site
  .use(basePath())
  // 生成結果に含めないものは先に除外しておく
  .ignore("README.md")
  .ignore("app")
  // esbuildでビルドする起点になるファイルを追加してからビルド
  .add("main.tsx")
  .use(
    esbuild({
      extensions: [".tsx"],
    }),
  )
  // tailwindのエントリーポイントを追加してからビルド
  .add("style.css")
  .use(tailwindcss())
  // ソースマップはビルドが終わったあとに追加する
  .use(
    sourceMaps({
      sourceContent: true,
    }),
  )
  // その他必要なリソースは最後に追加
  .add("CNAME")
  .add("assets/");

export default site;
