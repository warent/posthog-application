import { EyeIcon, HeartIcon, SparklesIcon } from "@heroicons/react/16/solid";
import { CTA, Stats } from "./components";

import ImgMe from "./assets/me.jpg";

export default function Example() {
  const features = [
    {
      name: "In love with tech",
      description:
        "He's probably spent like 30,000 hours of his life coding and building things. Seriously, it's kind of scary.",
      icon: HeartIcon,
    },
    {
      name: "Obsessed with awesomeness",
      description:
        "With high personal standards, he always wants apply attention to detail and make awesome experiences for people.",
      icon: SparklesIcon,
    },
    {
      name: "Fearless work",
      description:
        "That ancient complicated clunky thing that people hate but are too afraid to change? Sign him up! (Unless it likely provides little to no business value, then he'll let you know.)",
      icon: EyeIcon,
    },
  ];
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gray-900">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-white/10"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
        <div
          aria-hidden="true"
          className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
            className="aspect-1108/632 w-277 bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
            <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-white sm:text-7xl">
              Deploy to your team with confidence.
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              A bleeding-edge way for this guy named Wyatt to apply to PostHog.
              Definitely not tongue-in-cheek or anything.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="mailto:hello@wyatt.engineer"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Get started
              </a>
              <a
                href="#section-info"
                className="text-sm/6 font-semibold text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <a id="section-info" />
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-indigo-600">
                  Get $%!^ done
                </h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  A senior full stack nerd
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  Wyatt has about 10 years of experience in The Industry™.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute top-1 left-1 size-5 text-indigo-600"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              alt="Product screenshot"
              src={ImgMe}
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
      <Stats />
      <CTA
        title="Nebula"
        description="A fun little hobby project I work on. Pay no heed to the commit messages or WIP sections 😇"
        cta="Check it out"
        ctaLink="https://github.com/Heavenlode/Nebula"
        extra="Docs"
        extraLink="https://nebula.dev.heavenlode.com/Getting_Started_1__Introduction"
      />
      <div className="bg-indigo-100">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Ready to dive in? <br />
            Interview me today.
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
            <a
              href="mailto:hello@wyatt.engineer"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
