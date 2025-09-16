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
    <section className="flex flex-col items-center justify-center gap-6 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-sm">
      <h2 className="text-3xl font-bold text-gray-800">サイトマップ</h2>
      <nav className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {Object.values(sites).map(site => (
          <a 
            className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 hover:scale-105" 
            href={site.url} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={site.imgUrl} alt={site.name} className="mb-4 max-w-full h-auto" />
            <span className="text-lg font-semibold text-gray-800 text-center">{site.name}</span>
          </a>
        ))}
      </nav>
    </section>
  )
}