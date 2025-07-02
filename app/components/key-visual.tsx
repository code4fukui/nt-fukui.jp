import { url } from "../utils/path.ts";

export default function KeyVisual() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="font-bold top-0 p-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center w-full flex flex-col items-center justify-center gap-2 shadow-md">
        <p className="text-xl">なんでもつくろう、技術の祭典！</p>
        <h1 className="text-3xl font-bold">NTふくい 2025</h1>
      </div>
      <section
        className="w-[100dvw] max-h-[429px] h-[calc(100dvw_*_(858_/_921))] flex flex-col items-center justify-center gap-4 bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url('${url("/assets/ntfukui2025.png")}')` }}
      ></section>
    </section>
  );
}
