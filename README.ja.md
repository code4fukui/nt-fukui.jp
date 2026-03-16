# NT Fukui 2025
日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

このリポジトリには、NT Fukui 2025イベントのLume ベースのスタティックサイトが含まれています。

## 特徴

- [Deno](https://deno.com/)と[Lume](https://lume.land/)を使って構築
- GitHub Actionsによる自動ビルドと展開
- レスポンシブで使いやすいデザイン
- Google Mapsの埋め込みとイベントの詳細情報

## 要件

- [Deno](https://deno.com/runtime)のインストール

## 使用方法

- 開発サーバーを起動する: `deno task serve`
- サイトをビルドする: `deno task build`

## GitHub Actions

GitHubアクションのワークフローが設定されており、`main`ブランチへのプッシュまたはプルリクエスト時に自動的にサイトをビルドおよびデプロイします。ベースパスは、元のリポジトリおよびフォークの両方に対して正しく設定されています。

## ライセンス
このプロジェクトは [MIT License](LICENSE) のもとで公開されています。
