# NT Fukui 2025

English README is here: [README.md](README.md)

日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

このリポジトリには、NT Fukui 2025 イベントのための Lume ベースのスタティックサイトが含まれています。

Here is the Japanese translation of the provided README markdown chunk, preserving the same markdown structure, heading levels, lists, and section order:

## 機能

- [Deno](https://deno.com/) と [Lume](https://lume.land/) で構築されています
- GitHub Actions による自動ビルドとデプロイ
- レスポンシブでアクセシブルなデザイン
- 組み込みの Google マップと イベント詳細

## 要件

- [Deno](https://deno.com/runtime) がインストールされている必要があります

## 使用方法

- 開発サーバーを起動する: `deno task serve`
- サイトをビルドする: `deno task build`

## GitHub Actions

GitHubのActionsワークフローが設定されており、メインブランチへのプッシュやプルリクエストの際に、自動的にサイトをビルドおよびデプロイします。ベースパスは、オリジナルのリポジトリとフォークの両方で正しく設定されています。

## ライセンス
このプロジェクトは [MIT License](LICENSE) のもとで公開されています。
