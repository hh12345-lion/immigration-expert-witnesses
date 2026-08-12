import Link from "next/link";
import { witnessTypes } from "@/data/witness-types";
import { services } from "@/data/services";

export default function NotFound() {
  const featuredTypes = witnessTypes.slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden bg-ink py-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 50% 50% at 20% 40%, rgba(110,36,51,0.3), transparent 55%), radial-gradient(ellipse 40% 40% at 90% 10%, rgba(58,82,68,0.25), transparent 50%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
          <p className="font-display text-4xl tracking-tight text-chalk sm:text-5xl">
            Immigration Expert Witnesses
          </p>
          <p className="mt-8 font-display text-7xl leading-none text-oxblood/80 sm:text-8xl" aria-hidden="true">
            404
          </p>
          <h1 className="mt-4 font-display text-2xl text-chalk sm:text-3xl">Page not found</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-chalk/70">
            The page may have moved. Use the links below for witness guidance, or instruct directly.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-[48px] items-center justify-center bg-oxblood px-7 text-sm font-semibold text-chalk hover:bg-oxblood-deep"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center border border-chalk/40 px-7 text-sm font-semibold text-chalk hover:bg-chalk/10"
            >
              Instruct
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-rule py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl tracking-tight text-ink">Popular destinations</h2>
          <ul className="mt-6 border-t border-rule">
            {[
              { label: "Witness Types", href: "/witness-types", desc: "Country condition, persecution, human rights, oral evidence" },
              { label: "Expert Witness Framework", href: "/expert-witness-framework", desc: "CPR Part 35, Practice Direction 2024" },
              { label: "Network Directory", href: "/network", desc: "Country and thematic expert witness sites" },
              { label: "How to Instruct", href: "/how-to-instruct", desc: "Legal Aid, letter of instruction, timelines" },
            ].map((item, i) => (
              <li key={item.href}>
                <Link href={item.href} className="index-row flex gap-4 py-5">
                  <span className="w-8 font-display text-sm text-brass tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-display text-lg text-ink">{item.label}</span>
                    <span className="mt-0.5 block text-sm text-body">{item.desc}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-xl text-ink">Witness types</h2>
            <ul className="mt-4 space-y-2">
              {featuredTypes.map((w) => (
                <li key={w.slug}>
                  <Link href={`/witness-types/${w.slug}`} className="text-sm font-medium text-moss hover:text-oxblood">
                    {w.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/witness-types" className="text-sm font-semibold text-ink hover:text-oxblood">
                  View all witness types
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl text-ink">Services</h2>
            <ul className="mt-4 space-y-2">
              {services.slice(0, 5).map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm font-medium text-moss hover:text-oxblood">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm font-semibold text-ink hover:text-oxblood">
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
