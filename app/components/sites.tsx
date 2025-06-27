const sites: Record<string, {imgUrl: string, url: string, name: string}> = {
  nicotech: {
    imgUrl: "/assets/nicotech.png",
    url: "http://wiki.nicotech.jp/nico_tech/index.php?%E3%83%8B%E3%82%B3%E3%83%8B%E3%82%B3%E6%8A%80%E8%A1%93%E9%83%A8%E3%80%80%E3%81%BE%E3%81%A8%E3%82%81wiki",
    name: "ニコニコ技術部まとめwiki"
  },
  ntFukuiWiki: {
    imgUrl: "/assets/ntfukui2025-banner.png", 
    url: "https://wiki.nicotech.jp/nico_tech/index.php?NT%E3%81%B5%E3%81%8F%E3%81%842025",
    name: "NTふくい2025wiki"
  },
  ntSabae2022HP: {
    imgUrl: "/assets/ntsabae2022.png",
    url: "https://nt.sabae.cc/",
    name: "NT鯖江2022 なんかつくってみた、技術の祭典！"
  },
  ntSabae2021HP: {
    imgUrl: "/assets/ntsabae2021.jpg",
    url: "https://nt.sabae.cc/2021/index.html",
    name: "NT鯖江2021 なにかつくろう、技術の祭典"
  },
}

export function Sites() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">サイトマップ</h2>
      <nav className="max-w-3/5 grid grid-cols-2 gap-4">
        {Object.values(sites).map(site => (
          <a 
            className="flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:text-blue-600 hover:bg-gray-50" 
            href={site.url} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={site.imgUrl} alt={site.name} />
            <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">{site.name}</span>
          </a>
        ))}
      </nav>
    </section>
  )
}