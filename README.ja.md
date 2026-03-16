# NT Fukui 2025
English README is available here: [README.md](README.md)

このリポジトリには、NT Fukui 2025 イベントのためのLume ベースのスタティックサイトが含まれています。

## 機能

- [Deno](https://deno.com/) と [Lume](https://lume.land/) で構築されています
- GitHub Actions による自動ビルドとデプロイ
- レスポンシブでアクセシブルなデザイン
- 組み込まれた Google マップとイベント詳細

## 要件

- [Deno](https://deno.com/runtime)がインストールされている必要があります

Here is the translation to Japanese:

## 使用法

- 開発サーバーを起動する: `deno task serve`
- サイトをビルドする: `deno task build`

## GitHub Actions

GitHubのActionsワークフローが設定されており、`main`ブランチへのプッシュやプルリクエストに自動的にサイトをビルドしてデプロイします。ベースパスは、元のリポジトリとフォークの両方で正しく設定されています。

## ライセンス
このプロジェクトは [MIT License](LICENSE) のもとで公開されています。
