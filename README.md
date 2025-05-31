# nt-fukui.jp

NTふくいのLPリポジトリです。  
[Deno](https://deno.com/)と[Lume](https://lume.land/)を利用して開発しています。

## 開発環境

以下のソフトウェアが必要です。

* [Deno](https://deno.com)
  * インストール: <https://docs.deno.com/runtime/>

## ディレクトリ構成

* docs
  * ビルド結果が出力されるディレクトリです
  * gitignoreによって追跡範囲外に設定されています
* src
  * このディレクトリ内のソースがビルドされ出力されます

## 開発

* 開発用サーバーの起動
  * `deno task serve`
* サイトのビルド
  * `deno task build`
