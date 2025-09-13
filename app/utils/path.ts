// ベースパスを環境変数から取得
const BASE_PATH = typeof window !== "undefined"
  ? (window as { __BASE_PATH__?: string }).__BASE_PATH__ || ""
  : Deno?.env?.get("BASE_PATH") || "";

/**
 * ベースパスを考慮したURLを生成する
 * @param path - 相対パス
 * @returns ベースパス付きの完全なパス
 */
export function url(path: string): string {
  // パスが既に絶対URL（http/httpsで始まる）の場合はそのまま返す
  if (path.startsWith("http")) {
    return path;
  }

  // ベースパスが空文字の場合はそのまま返す
  if (BASE_PATH === "") {
    return path;
  }

  // パスが/で始まらない場合は/を追加
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  // ベースパスとパスを結合（重複する/を避ける）
  const basePath = BASE_PATH.endsWith("/") ? BASE_PATH.slice(0, -1) : BASE_PATH;

  return `${basePath}${normalizedPath}`;
}
