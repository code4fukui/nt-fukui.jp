import KeyVisual from "./components/key-visual.tsx";
import { Sites } from "./components/sites.tsx";
import { EventInfo } from "./components/event-info.tsx";

export default function App() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center gap-8 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen pb-5">
      <KeyVisual />
      <section className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-8 py-12 bg-white rounded-xl shadow-md">
        <span className="text-3xl font-bold text-blue-600 mb-6">
          3年ぶりに福井にNTが帰ってきた!
        </span>
        <p className="text-lg leading-relaxed mb-6 text-gray-700">
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
  );
}
