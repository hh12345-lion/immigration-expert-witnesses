import Link from "next/link";
import { witnessTypes } from "@/data/witness-types";
import { services } from "@/data/services";

export default function NotFound() {
  const featuredTypes = witnessTypes.slice(0, 4);

  return (
    <>
      <section className="border-b border-line bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Immigration Expert Witnesses
          </p>
          <p className="mt-8 font-display text-7xl leading-none text-sky sm:text-8xl" aria-hidden="true">
            404
          </p>
          <h1 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">Page not found</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-body">
            The page may have moved. Use the links below for witness guidance, or instruct directly.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-sky px-7 text-sm font-semibold text-white hover:bg-sky-deep"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-line px-7 text-sm font-semibold text-ink hover:border-sky hover:text-sky"
            >
              Request a witness
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">Popular destinations</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { label: "Witness Types", href: "/witness-types", desc: "Country condition, persecution, human rights, oral evidence" },
              { label: "Expert Witness Framework", href: "/expert-witness-framework", desc: "CPR Part 35, Practice Direction 2024" },
              { label: "Network Directory", href: "/network", desc: "Country and thematic expert witness sites" },
              { label: "How to Instruct", href: "/how-to-instruct", desc: "Legal Aid, letter of instruction, timelines" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="tile-card block p-5">
                  <span className="block font-display text-lg font-semibold text-ink">{item.label}</span>
                  <span className="mt-1 block text-sm text-body">{item.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">Witness types</h2>
            <ul className="mt-4 space-y-2">
              {featuredTypes.map((w) => (
                <li key={w.slug}>
                  <Link href={`/witness-types/${w.slug}`} className="text-sm font-medium text-sky hover:text-sky-deep">
                    {w.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/witness-types" className="text-sm font-semibold text-ink hover:text-sky">
                  View all witness types
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">Services</h2>
            <ul className="mt-4 space-y-2">
              {services.slice(0, 5).map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm font-medium text-sky hover:text-sky-deep">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm font-semibold text-ink hover:text-sky">
                  View all services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
