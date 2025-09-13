# nt-fukui.jp

NT ふくいの LP リポジトリです。\
[Deno](https://deno.com/)と[Lume](https://lume.land/)を利用して開発しています。

## 開発環境

以下のソフトウェアが必要です。

- [Deno](https://deno.com)
  - インストール: <https://docs.deno.com/runtime/>

## ディレクトリ構成

- \_site
  - ビルド結果が出力されるディレクトリです
  - gitignore によって追跡範囲外に設定されています
- src
  - このディレクトリ内のソースがビルドされ出力されます

## 開発

- 開発用サーバーの起動
  - `deno task serve`
- サイトのビルド
  - `deno task build`

## デプロイ

### GitHub Actions

GitHub Actions ワークフローが設定されており、`main`ブランチへの push または PR
で自動的にビルド・デプロイが実行されます。fork
リポジトリでも自動的に適切なベースパスが設定されます。
