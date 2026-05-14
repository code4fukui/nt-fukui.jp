# nt-fukui.jp

NTふくい2025（技術の祭典）の公式ランディングページです。このリポジトリには、DenoとLumeで構築されたサイトのソースコードが含まれています。

NTふくいのLPリポジトリです。

## ライブデモ

➡️ **[nt-fukui.jp](https://nt-fukui.jp)**

![nt-fukui.jpウェブサイトのスクリーンショット。「NTふくい 2025」のメインバナーに続き、イベント情報（日時、場所、地図）、ワークショップのスケジュール、関連イベントや過去のサイトへのリンクを含むサイトマップが表示されています。](https://nt-fukui.jp/assets/ntfukui2025.png)

## 機能

-   **静的サイト生成**: Deno向けの高速で柔軟な静的サイトジェネレーターである[Lume](https://lume.land/)を使用して構築されています。
-   **Reactの統合**: コンポーネントベースのUIに[React](https://react.dev/)を使用し、サーバーサイドレンダリング（SSR）とクライアントサイドのハイドレーションをサポートしています。
-   **ユーティリティファーストCSS**: [Tailwind CSS](https://tailwindcss.com/)を使用してスタイリングを行い、モダンでレスポンシブなデザインを実現しています。
-   **自動デプロイ**: [GitHub Actions](https://github.com/features/actions)を通じて、GitHub Pagesへの継続的デプロイが設定されています。
-   **フォークフレンドリー**: デプロイのワークフローがサイトのベースパスを自動的に調整するため、フォークしたリポジトリでも自身のGitHub Pagesに正しくデプロイできます。
-   **開発者向けツール**: 自動コードフォーマット（`deno fmt`）とリントチェック（`deno lint`）を行うpre-commitフックが含まれています。

## 技術スタック

-   **ランタイム**: [Deno](https://deno.com/)
-   **静的サイトジェネレーター**: [Lume](https://lume.land/)
-   **UIフレームワーク**: [React](https://react.dev/)
-   **CSSフレームワーク**: [Tailwind CSS](https://tailwindcss.com/)
-   **バンドラー**: [esbuild](https://esbuild.github.io/)（Lumeプラグイン経由）

## はじめに

### 前提条件

-   [Deno](https://deno.com/)（v2.x以降）
    -   インストールガイド: <https://docs.deno.com/runtime/>

### インストール

1.  リポジトリをクローンします:
    ```bash
    git clone https://github.com/code4fukui/nt-fukui.jp.git
    cd nt-fukui.jp
    ```

2.  （任意ですが推奨）自動フォーマットとリントチェックを有効にするため、Gitのpre-commitフックを初期化します:
    ```bash
    deno task init-hooks
    ```

## 使用方法

### 開発

ライブリロード付きのローカル開発サーバーを起動するには:

```bash
deno task serve
```

サイトは `http://localhost:20052` で利用可能になります。

### 本番ビルド

本番用の静的サイトを生成するには:

```bash
deno task build
```

出力は `_site/` ディレクトリに生成されます。

## ディレクトリ構成

-   `_site/`: 生成された静的サイトです。このディレクトリはGitで追跡されません。
-   `src/`: Lumeによって処理されるすべてのソースファイル（ページ、コンポーネント、アセット）が含まれます。
-   `_config.ts`: Lumeの設定ファイルです。プラグインとビルドパイプラインを定義しています。
-   `deno.jsonc`: Denoの設定ファイルです。インポートマップやタスクランナースクリプトを含みます。
-   `.github/workflows/`: GitHub Pagesへのデプロイを行うCI/CDパイプラインを定義しています。

## デプロイ

`main` ブランチにプッシュされるたびに、プロジェクトは自動的にビルドされ、GitHub Pagesにデプロイされます。

GitHub Actionsのワークフローは、元のリポジトリとフォークされたリポジトリの両方のデプロイを処理するように設定されています。フォークされたリポジトリの場合、正しい `BASE_PATH` が自動的に設定されるため、フォーク先のGitHub PagesのURL（例: `https://<user>.github.io/nt-fukui.jp`）でもすべてのアセットリンクが正しく機能します。

## クレジット

本プロジェクトはNT鯖江実行委員会によって運営され、[Code for FUKUI](https://github.com/code4fukui)によって保守されています。

## ライセンス

This project is unlicensed.
