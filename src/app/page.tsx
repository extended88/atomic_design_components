import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-5">
      <section className="py-5 items-center text-center">
        <h2 className="pb-5">atomic design components</h2>
        <ul>
          <li className="pb-4"><span className="pr-2">▶</span><Link href="/button1" className="text-red-600 font-bold">Presentational Component Button</Link></li>
          <li className="pb-4"><span className="pr-2">▶</span><Link href="/button2" className="text-red-600 font-bold">Container Component Button</Link></li>
        </ul>
      </section>
    </main>
  );
}
