import KeyVisual from "./components/key-visual.tsx";
import { Sites } from "./components/sites.tsx";
import { EventInfo } from "./components/event-info.tsx";

export default function App() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center gap-4">
      <KeyVisual />
      <section className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto px-4">
        <span className="text-3xl font-bold text-blue-600 mb-4">
          3年ぶりに福井にNTが帰ってきた!
        </span>
        <p className="text-lg leading-relaxed mb-4">
          これまで「NT鯖江」として開催してきたものづくりのお祭り。
          <br />
          今年から「NTふくい」に改名し、開催場所も福井市へ！？
        </p>
        <p className="text-xl font-semibold text-green-600">
          皆さまの出展・見学を心よりお待ちしております！
        </p>
      </section>
      <EventInfo />
      <Sites />
    </main>
  )
}