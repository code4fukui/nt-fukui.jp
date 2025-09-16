import { url } from "../utils/path.ts";

const sites: Record<
  string,
  { imgUrl: string; url: string; name: string; description?: string }
> = {
  cyberfriday: {
    imgUrl: "/assets/cyberfriday.png",
    url: "https://cybervalley.jp/cyberfriday.html",
    name: "Cyber Friday",
    description: "前日 9/26(金) 19:00~ 開催",
  },
  kumando: {
    imgUrl: "/assets/kumando-digital-alive.png",
    url: "https://www.fisc.jp/kumadigifes/",
    name: "クマンドウ デジタルアライブ",
    description: "9/25(木)〜9/28(日) 開催",
  },
  nicotech: {
    imgUrl: "/assets/nicotech.png",
    url:
      "http://wiki.nicotech.jp/nico_tech/index.php?%E3%83%8B%E3%82%B3%E3%83%8B%E3%82%B3%E6%8A%80%E8%A1%93%E9%83%A8%E3%80%80%E3%81%BE%E3%81%A8%E3%82%81wiki",
    name: "ニコニコ技術部まとめwiki",
  },
  ntFukuiWiki: {
    imgUrl: "/assets/ntfukui2025-banner.png",
    url:
      "https://wiki.nicotech.jp/nico_tech/index.php?NT%E3%81%B5%E3%81%8F%E3%81%842025",
    name: "NTふくい2025wiki",
  },
  ntSabae2022HP: {
    imgUrl: "/assets/ntsabae2022.png",
    url: "https://nt.sabae.cc/",
    name: "NT鯖江2022 なんかつくってみた、技術の祭典！",
  },
  ntSabae2021HP: {
    imgUrl: "/assets/ntsabae2021.jpg",
    url: "https://nt.sabae.cc/2021/index.html",
    name: "NT鯖江2021 なにかつくろう、技術の祭典",
  },
};

export function Sites() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-sm">
      <h2 className="text-3xl font-bold text-gray-800">サイトマップ</h2>
      <nav className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {Object.values(sites).map((site) => (
          <a
            className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 hover:scale-105"
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={url(site.imgUrl)}
              alt={site.name}
              className="mb-4 max-w-full h-auto"
            />
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              {site.name}
            </h3>
            {site.description && (
              <p className="text-sm text-gray-600 text-center mt-2">
                {site.description}
              </p>
            )}
          </a>
        ))}
      </nav>
    </section>
  );
}
