import type { Metadata } from "next";
import Image from "next/image";
import { AtSign } from "lucide-react";

import { FacebookIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CONTACT_EMAIL,
  DONATE_URL,
  ELECTION_DAY,
  FACEBOOK_URL,
  SITE_NAME,
  VOTE_INFO_URL,
} from "@/lib/site";

import barShirt from "@/public/images/bar-shirt.jpg";
import familyDeck from "@/public/images/family-deck.jpg";
import familyPorch from "@/public/images/family-porch.jpg";
import forumPanel from "@/public/images/forum-panel.jpg";
import heroFamily from "@/public/images/hero-family.jpg";
import officeMaps from "@/public/images/office-maps.jpg";
import swearingIn from "@/public/images/swearing-in.jpg";

export const metadata: Metadata = {
  title: { absolute: SITE_NAME },
};

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

const PRIORITIES = [
  {
    title: "Safety",
    body: "Safety is Aaron's first priority. He stands behind the officers and firefighters who answer the call, and he is fighting for streets and sidewalks that families can safely walk and bike.",
  },
  {
    title: "Transparency",
    body: "Residents deserve a say in how their tax dollars are spent. Aaron brings an attorney's eye to every contract and proposal, and he works to make sure the community sees a decision before it is made, not after.",
  },
  {
    title: "Community",
    body: "Strong neighborhoods make a strong city. Aaron works for vibrant parks and playgrounds, well-kept public spaces, and events that bring people together in every part of Newport, so no neighborhood is left behind.",
  },
];

function Kicker({
  children,
  onDark = false,
}: {
  children: React.ReactNode;
  onDark?: boolean;
}) {
  return (
    <p
      className={`mb-1.5 text-[0.78rem] font-extrabold tracking-[2px] uppercase ${onDark ? "text-blush" : "text-red-ink"}`}
    >
      {children}
    </p>
  );
}

function SectionHead({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 border-b-[3px] border-navy pb-3 md:mb-6">
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden bg-linear-135 from-navy-deep to-blue text-white md:flex md:min-h-[420px] md:items-center lg:min-h-[460px]"
      >
        {/* Headshot panel. Desktop: fills the right side; its left edge is a
            12° diagonal (tan 12° = 0.2126) with a red stripe. The panel is a
            size container so the slant can use its height (cqh) and keeps the
            same angle at any hero height.
            Mobile: full-width photo on top with a diagonal bottom edge. */}
        <div className="relative h-[300px] w-full [clip-path:polygon(0_0,100%_0,100%_86%,0_100%)] md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-[42%] md:[clip-path:none] md:[container-type:size]">
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden bg-red md:block md:[clip-path:polygon(calc(100cqh*0.2126)_0,100%_0,100%_100%,0_100%)]"
          />
          <div className="absolute inset-0 md:[clip-path:polygon(calc(100cqh*0.2126_+_6px)_0,100%_0,100%_100%,6px_100%)]">
            <Image
              src={heroFamily}
              alt="Aaron Sutherland at home with his wife and their two young sons, one holding a basketball"
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              preload
              className="object-cover object-[40%_30%]"
            />
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1120px] px-5 pt-4 pb-7 md:py-12">
          <div className="md:max-w-[52%]">
            <h1
              id="hero-heading"
              className="max-w-[720px] text-[2.25rem] leading-[1.02] font-black md:text-[clamp(2.2rem,5.2vw,3.6rem)]"
            >
              It&apos;s our city.
              <br />
              Let&apos;s build it <span className="text-blush">together.</span>
            </h1>
            <div className="mt-[22px] flex flex-wrap gap-3">
              <a
                href={DONATE_URL}
                {...external}
                className={buttonVariants({ className: "flex-1 md:flex-none" })}
              >
                Donate
              </a>
              <a
                href="#priorities"
                className={buttonVariants({
                  variant: "outline-light",
                  className: "flex-1 md:flex-none",
                })}
              >
                See His Priorities
              </a>
            </div>
          </div>
        </div>
      </section>

      <p className="bg-red-ink px-5 py-[9px] text-center text-[0.82rem] font-extrabold tracking-[1.5px] text-white uppercase">
        Election Day is {ELECTION_DAY} ·{" "}
        <a href="#vote" className="underline hover:no-underline">
          Make your plan to vote
        </a>
      </p>

      {/* ABOUT */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="bg-surface py-8 md:py-12"
      >
        <div className="mx-auto max-w-[1120px] px-5">
          <SectionHead>
            <h2
              id="about-heading"
              className="text-[clamp(1.5rem,3vw,2rem)] leading-[1.1] font-black text-red-ink"
            >
              About Aaron
            </h2>
          </SectionHead>
          <div className="grid items-center gap-[18px] md:grid-cols-[230px_1fr] md:gap-7">
            <Image
              src={familyPorch}
              alt="Aaron Sutherland with his wife and two young sons on their front porch steps"
              sizes="(min-width: 768px) 230px, 240px"
              className="mx-auto aspect-2/3 w-full max-w-[240px] rounded-[4px] object-cover shadow-[0_10px_24px_-12px_rgba(47,94,158,0.5)]"
            />
            <div className="space-y-3.5 text-[1.1rem] leading-normal">
              <p>
                Aaron Sutherland is an attorney, a father, and your Newport City
                Commissioner. He and his family have made their home here, and
                he has built his career on service: as an attorney, and at City
                Hall as a public servant who shows up, does the homework, and
                puts Newport residents first.
              </p>
              <p>
                On the commission, Aaron has put that into practice. He has
                stood behind Newport&apos;s police, firefighters, and first
                responders. He has insisted that decisions about your tax
                dollars happen in front of the community, not behind closed
                doors. And he has pushed to keep parks, playgrounds, and
                neighborhoods strong in every part of the city.
              </p>
              <p>
                Aaron is running for re-election to keep doing the work: a
                Newport that is safe, strong, and vibrant in every neighborhood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ON THE JOB: photo heights line up because each photo's flex-grow
          equals its width/height ratio. */}
      <section aria-label="Aaron on the job" className="bg-navy-deep">
        <ul className="flex flex-col gap-[2px] lg:flex-row">
          <li className="flex min-w-0 gap-[2px] lg:grow-[1.42] lg:basis-0">
            <PhotoTile
              src={officeMaps}
              grow="grow-[0.75]"
              alt="Aaron signing paperwork at a city office counter"
              sizes="(min-width: 1024px) 18vw, 53vw"
            />
            <PhotoTile
              src={familyDeck}
              grow="grow-[0.67]"
              alt="Aaron sitting on the back steps with his two sons"
              sizes="(min-width: 1024px) 16vw, 47vw"
            />
          </li>
          <li className="flex min-w-0 gap-[2px] lg:grow-[2.8] lg:basis-0">
            <PhotoTile
              src={swearingIn}
              grow="grow-[1.33]"
              alt="Aaron and fellow commissioners raising their right hands as they are sworn in at Newport City Hall"
              sizes="(min-width: 1024px) 32vw, 48vw"
            />
            <PhotoTile
              src={forumPanel}
              grow="grow-[1.47]"
              alt="Aaron listening on a panel at a community forum"
              sizes="(min-width: 1024px) 35vw, 52vw"
            />
          </li>
        </ul>
      </section>

      {/* PRIORITIES */}
      <section
        id="priorities"
        aria-labelledby="priorities-heading"
        className="py-8 md:py-12"
      >
        <div className="mx-auto max-w-[1120px] px-5">
          <SectionHead>
            <Kicker>On the Record</Kicker>
            <h2
              id="priorities-heading"
              className="text-[clamp(1.5rem,3vw,2rem)] leading-[1.1] font-black text-navy"
            >
              Aaron is a champion for
            </h2>
          </SectionHead>
          <ul className="grid gap-3 md:grid-cols-3 md:gap-4">
            {PRIORITIES.map((p) => (
              <li key={p.title} className="flex">
                <Card className="w-full gap-0 rounded-[4px] border border-t-[5px] border-line border-t-navy py-0 text-base text-ink ring-0">
                  <CardContent className="p-4 md:px-5 md:pt-5 md:pb-[18px]">
                    <h3 className="mb-2 text-[1.3rem] leading-none font-black tracking-[0.5px] text-navy uppercase">
                      {p.title}
                    </h3>
                    <p className="text-[0.95rem]">{p.body}</p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* VOTE */}
      <section
        id="vote"
        aria-labelledby="vote-heading"
        className="bg-navy py-7 text-white md:py-9"
      >
        <div className="mx-auto grid max-w-[1120px] items-center gap-4 px-5 md:grid-cols-[1fr_auto] md:gap-7">
          <div>
            <Kicker onDark>Make a Plan</Kicker>
            <h2
              id="vote-heading"
              className="text-[clamp(1.5rem,3vw,2.1rem)] leading-[1.1] font-black"
            >
              Make your plan to vote
            </h2>
            <p className="mt-2 max-w-[560px] text-[0.98rem] text-mist">
              Registration, absentee ballots, early voting dates, and your
              polling place are all at the official Kentucky source. Check it
              now so nothing gets in the way on Election Day.
            </p>
          </div>
          <div className="rounded-[4px] bg-red-ink px-6 py-[18px] text-center md:min-w-[280px]">
            <p className="font-heading text-[1.35rem] leading-[1.1] font-black">
              {ELECTION_DAY}
            </p>
            <p className="mt-1 text-[0.85rem]">Election Day</p>
            <a
              href={VOTE_INFO_URL}
              {...external}
              className={buttonVariants({
                variant: "light",
                className: "mt-3 w-full",
              })}
            >
              Visit govoteky.com
            </a>
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section id="join" aria-labelledby="join-heading">
        <div className="grid md:grid-cols-[0.8fr_1.2fr]">
          <div className="relative h-[300px] md:h-auto md:min-h-[420px]">
            <Image
              src={barShirt}
              alt="Aaron with his wife, wearing a Vote Aaron Sutherland shirt, and their son at a campaign stop"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover object-[center_10%]"
            />
          </div>
          <div className="flex flex-col justify-center border-t-[5px] border-red bg-surface px-5 py-[22px] md:border-t-0 md:border-l-[5px] md:px-10 md:py-9">
            <Kicker>Join Us</Kicker>
            <h2
              id="join-heading"
              className="text-[1.5rem] leading-[1.1] font-black text-navy"
            >
              The campaign runs on neighbors like you.
            </h2>
            <div className="mt-4 flex flex-col gap-2.5 md:flex-row md:flex-wrap md:items-center">
              <a href={DONATE_URL} {...external} className={buttonVariants()}>
                Donate
              </a>
              <a
                href={FACEBOOK_URL}
                {...external}
                className={buttonVariants({ variant: "facebook" })}
              >
                <FacebookIcon />
                Facebook
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-[4px] border border-line bg-white px-3.5 py-[9px] text-[0.95rem] font-bold text-navy transition-colors hover:text-red-ink"
              >
                <span className="flex size-[26px] items-center justify-center rounded-[4px] bg-red-soft text-red-ink">
                  <AtSign className="size-4" aria-hidden="true" />
                </span>
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PhotoTile({
  src,
  alt,
  grow,
  sizes,
}: {
  src: React.ComponentProps<typeof Image>["src"];
  alt: string;
  grow: string;
  sizes: string;
}) {
  return (
    <div className={`min-w-0 basis-0 ${grow}`}>
      <Image src={src} alt={alt} sizes={sizes} className="h-auto w-full" />
    </div>
  );
}
