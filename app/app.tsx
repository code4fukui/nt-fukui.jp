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
      <section className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-8 py-12 bg-white rounded-xl shadow-md">
        <h2 className="text-3xl font-bold mb-4">
          ワークショップのお知らせ
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          今回もNTふくい2025の会場で、2つのワークショップを開催予定です。<br />
          どちらも<strong className="text-blue-600">
            エルパ2F エルパホール
          </strong>にて開催されます。
          <br />
          <div
            className="list-decimal list-inside my-4 text-left mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <div className="mb-4">
              <strong className="text-xl text-green-600">
                1. 太陽光パネルを作ろう
              </strong>
              <ul>
                <li className="list-disc text-gray-600 ml-4 mt-2">
                  <strong>概要</strong>
                  <br />
                  NT東京2025にて大盛況だった<strong className="text-blue-600">
                    「有機半導体太陽光パネル製造ハンズオンイベント」
                  </strong>のNTふくい2025版を<a
                    href="https://ishi-kai.org/about/"
                    className="underline text-blue-600"
                  >
                    ISHI会
                  </a>様に開催いただきます！<br />
                  詳細は<a
                    href="https://ishi-kai.org/information/2025/09/19/NT_fukui_2025.html"
                    className="underline text-blue-600"
                  >
                    ISHI会様のホームページ
                  </a>よりご確認ください！
                </li>
                <li className="list-disc text-gray-600 ml-4 mt-2">
                  <strong>日時</strong>
                  <ul className="list-disc ml-6">
                    <li>
                      1回目：2025年9月28日（日） 11:00～13:00
                    </li>
                    <li>
                      2回目：2025年9月28日（日） 14:00～16:00
                    </li>
                    <li>
                      3回目：2025年9月28日（日） 17:00～19:00
                    </li>
                  </ul>
                  <span className="block mt-1">※すべて同じ内容となります</span>
                </li>
                <li className="list-disc text-gray-600 ml-4 mt-2">
                  <strong>申し込み</strong>
                  <br />
                  当日、直接お越しください。事前申し込みは不要です。<br />
                </li>
                <li className="list-disc text-gray-600 ml-4 mt-2">
                  <strong>参加費</strong>
                  <br />
                  無料
                </li>
              </ul>
            </div>
            <div className="mb-2">
              <strong className="text-xl text-green-600">
                2. こどもパソコン IchigoJam を組み立てよう
              </strong>
              <ul>
                <li className="list-disc text-gray-600 ml-4 mt-2">
                  <strong>概要</strong>
                  <br />
                  IchigoJamという手のひらサイズの小さなパソコンをはんだ付けして組み立てます！<br />
                  組み立てたIchigoJamはお持ち帰りいただけます。<br />
                  IchigoJamの詳細は
                  <a
                    href="https://ichigojam.net/"
                    className="underline text-blue-600"
                  >
                    公式サイト
                  </a>
                  よりご確認ください。
                </li>
                <li className="list-disc text-gray-600 ml-4 mt-2">
                  <strong>日時</strong>
                  <br />
                  2025年9月28日（日） 11:00～17:00 の間 随時受付いたします。
                </li>
                <li className="list-disc text-gray-600 ml-4 mt-2">
                  <strong>申し込み</strong>
                  <br />
                  当日、直接お越しください。事前申し込みは不要です。
                </li>
                <li className="list-disc text-gray-600 ml-4 mt-2">
                  <strong>参加費</strong>
                  <br />
                  材料費として
                  <ul className="list-disc ml-6">
                    <li>
                      ショートコース（IchigoDake S）：1,000円
                    </li>
                    <li>
                      ロングコース（IchigoJam R）：2,000円
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          ぜひご参加ください！
        </p>
      </section>
      <EventInfo />
      <Sites />
    </main>
  );
}
