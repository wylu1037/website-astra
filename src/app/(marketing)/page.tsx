import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, User, UserIcon, Zap } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import SectionBadge from "@/components/ui/section-badge";
import { features, perks, pricingCards, reviews } from "@/constants";
import { Icons } from "@/components";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { LampContainer } from "@/components/ui/lamp";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
  return (
    <section className="relative flex w-full flex-col items-center justify-center px-4 py-8 md:px-0">
      {/* Hero */}
      <Wrapper>
        <Container>
          <div className="flex w-full flex-col items-center justify-center py-20">
            {/* marquee button*/}
            <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
              <span className="absolute inset-x-0 bottom-0 h-full w-full bg-gradient-to-tr from-primary/40 blur-md"></span>
              <span className="z-10 flex items-center justify-center gap-1.5 py-0.5 text-sm text-neutral-100">
                <Image
                  src="/icons/sparkles-dark.svg"
                  alt="✨"
                  width={24}
                  height={24}
                  className="h-4 w-4"
                />
                Introducing Astra AI
                <ChevronRight className="h-4 w-4" />
              </span>
            </button>
            {/* hero content */}
            <div className="mx-auto mt-8 flex w-11/12 max-w-3xl flex-col items-center md:w-full">
              <h1 className="bg-gradient-to-b from-gray-50 to-gray-100 bg-clip-text text-center text-4xl font-semibold text-transparent md:text-6xl md:!leading-snug">
                Build your next idea and ship your dream site
              </h1>
              <p className="mt-6 text-center text-base text-foreground/80 md:text-lg">
                Zero code, maximum speed. Make professional sites easy, fast and
                fun while delivering best-in-class SEO, performance.
              </p>
              <div className="relative mt-8 hidden w-full items-center justify-center md:mt-12 md:flex">
                <Link
                  href="/"
                  className="flex w-max cursor-pointer select-none items-center justify-center rounded-full border-t border-foreground/30 bg-white/20 px-2 py-1 shadow-2xl shadow-foreground/40 backdrop-blur-lg md:gap-8 md:py-2"
                >
                  <p className="lg:marker md:text-base:pr-0 pl-4 pr-4 text-center text-sm font-medium text-foreground">
                    ✨{""} Start Building your dream website now!
                  </p>
                  <Button
                    size="sm"
                    className="hidden rounded-full border border-foreground/20 lg:flex"
                  >
                    Get started
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            {/**/}
            <div className="relative flex w-full items-center justify-center py-10 md:py-20">
              <div className="gradient absolute inset-0 left-1/2 top-1/2 -z-10 h-3/4 w-3/4 -translate-x-1/2 -translate-y-12 blur-[10rem]"></div>
              <div className="lg:rounded-2 bg-opacity-50xl -m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 backdrop-blur-lg md:-m-4">
                <Image
                  src="/assets/dashboard.svg"
                  alt="Dashboard"
                  width={1200}
                  height={1200}
                  className="rounded-md bg-foreground/10 shadow-2xl ring-1 ring-border lg:rounded-xl"
                />
                <BorderBeam size={250} duration={12} delay={9} />
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* How it works */}
      <Wrapper className="relative flex flex-col items-center justify-center py-12">
        <Container>
          <div className="max-w-md text-start md:mx-auto md:text-center">
            <SectionBadge title="The process" />
            <h2 className="mt-6 text-3xl font-semibold lg:text-4xl">
              Three steps to build your dream website
            </h2>
            <p className="mt-6 text-muted-foreground">
              Turn yout vision into reality in just 3 simple steps
            </p>
          </div>
        </Container>
        {/**/}
        <Container>
          <div className="flex w-full flex-col items-center justify-center py-10 md:py-20">
            <div className="grid w-full grid-cols-1 divide-x-0 divide-y divide-gray-900 first:border-gray-900 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-3 lg:first:border-none">
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="flex flex-col items-start px-4 py-4 md:px-6 lg:px-8 lg:py-6"
                >
                  <div className="flex items-center justify-center">
                    <perk.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{perk.title}</h3>
                  <p className="mt-2 text-start text-muted-foreground">
                    {perk.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Features */}
      <Wrapper className="relative flex flex-col items-center justify-center py-12">
        <Container>
          <div className="max-w-md text-start md:mx-auto md:text-center">
            <SectionBadge title="Features" />
            <h2 className="mt-6 text-3xl font-semibold lg:text-4xl">
              Discover our powerful features
            </h2>
            <p className="mt-6 text-muted-foreground">
              Astra offers a range of features to help you build a stunning
              websites in no time
            </p>
          </div>
        </Container>
        <Container>
          <div className="mx-auto mt-8 flex items-center justify-center">
            <Icons.feature className="h-80 w-auto" />
          </div>
        </Container>
        <Container>
          <div className="flex w-full flex-col items-center justify-center py-10 md:py-20">
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-start px-0"
                >
                  <div className="flex items-center justify-center">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">{feature.title}</h3>
                  <p className="mt-2 text-start text-muted-foreground">
                    {feature.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Pricing */}
      <Wrapper className="relative flex flex-col items-center justify-center py-12">
        <Container>
          <div className="max-w-md text-start md:mx-auto md:text-center">
            <SectionBadge title="Pricing" />
            <h2 className="mt-6 text-3xl font-semibold lg:text-4xl">
              Unlock the right plan for your business
            </h2>
            <p className="mt-6 text-muted-foreground">
              Choose the best plan for your business and start building your
              dream website today
            </p>
          </div>
        </Container>
        <Container>
          <div className="flex items-center justify-center">
            <div className="grid w-full max-w-4xl grid-cols-1 flex-wrap gap-5 py-10 md:gap-8 md:py-20 lg:grid-cols-3">
              {pricingCards.map((card) => (
                <div key={card.title} className="">
                  <Card
                    key={card.title}
                    className={cn(
                      "flex w-full flex-col border-neutral-700",
                      card.title === "Unlimited SaaS" &&
                        "border-2 border-primary",
                    )}
                  >
                    <CardHeader className="border-2 border-border">
                      <span className="">{card.title}</span>
                      <CardTitle
                        className={cn(
                          card.title !== "Unlimited SaaS" &&
                            "to-muted-foreground",
                        )}
                      >
                        {card.price}
                      </CardTitle>
                      <CardDescription>{card.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 pt-6">
                      {card.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <Zap className="h-4 w-4 fill-primary text-primary" />
                          <p>{feature}</p>
                        </div>
                      ))}
                    </CardContent>
                    <CardFooter className="mx-auto w-full">
                      <Link
                        href="#"
                        className={cn(
                          "w-full rounded-md bg-primary p-2 text-center text-sm font-medium text-primary-foreground",
                          card.title !== "Unlimited SaaS" &&
                            "!bg-foreground !text-background",
                        )}
                      >
                        {card.buttonText}
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Testimonials */}
      <Wrapper className="relative flex flex-col items-center justify-center py-12">
        <Container>
          <div className="mx-auto max-w-md text-start md:text-center">
            <SectionBadge title="Our customers" />
            <h2 className="mt-6 font-serif text-3xl font-semibold lg:text-4xl">
              What people are saying?
            </h2>
            <p className="mt-6 text-muted-foreground">
              See how Astra empowers business of all sizes. Here&apos;s what
              real people are saying on Twitter
            </p>
          </div>
        </Container>
        <Container>
          <div className="w-full py-10 md:py-20">
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
              <Marquee pauseOnHover className="select-none [--duration:20s]">
                {firstRow.map((review) => (
                  <figure
                    key={review.name}
                    className="relative w-64 cursor-pointer overflow-hidden rounded-xl border border-zinc-50/[.1] bg-background p-4 hover:bg-zinc-50/[.15]"
                  >
                    <div className="flex flex-row items-center gap-2">
                      <User className="h-6 w-6" />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium">
                          {review.name}
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">
                          {review.username}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">
                      {review.body}
                    </blockquote>
                  </figure>
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="select-none [--duration:20s]"
              >
                {secondRow.map((review) => (
                  <figure
                    key={review.name}
                    className="relative w-64 cursor-pointer overflow-hidden rounded-xl border border-zinc-50/[.1] bg-background p-4 hover:bg-zinc-50/[.15]"
                  >
                    <div className="flex flex-row items-center gap-2">
                      <User className="h-6 w-6" />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium">
                          {review.name}
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">
                          {review.username}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">
                      {review.body}
                    </blockquote>
                  </figure>
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Newsletter*/}
      <div className="motion-preset-confetti">✨✨✨</div>
      <Wrapper className="relative flex flex-col items-center justify-center py-12">
        <Container>
          <LampContainer>
            <div className="relative flex w-full flex-col items-center justify-center text-center">
              <h2 className="mt-8 text-4xl font-semibold lg:text-5xl lg:!leading-snug xl:text-6xl">
                From Idea to Launch <br /> Faster Than Ever
              </h2>
              <p className="mx-auto mt-6 max-w-md text-muted-foreground">
                Build stunning websites with Astra&apos;s intuitive
                drag-and-drop builder and powerful AI assistant
              </p>
              <Button variant="white" className="mt-6" asChild>
                <Link href="/sign-in">
                  Get started for free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </LampContainer>
        </Container>
        <Container className="z-[99999 relative">
          <div className="-mt-40 flex w-full items-center justify-center">
            <div className="flex w-full flex-col items-start justify-start rounded-lg border border-border/80 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-8 md:py-8 lg:rounded-2xl">
              <div className="flex w-full flex-col items-start gap-4">
                <h4 className="text-xl font-semibold md:text-2xl">
                  Join our newsletter
                </h4>
                <p className="text-base text-muted-foreground">
                  Be up to date with everything about AI builder
                </p>
              </div>
              <div className="mt-5 flex w-full flex-col items-start gap-2 md:mt-0 md:w-max md:min-w-80">
                <form className="flex w-full flex-col items-center gap-2 md:max-w-xs md:flex-row">
                  <Input
                    required
                    type="email"
                    placeholder="Enter your email"
                    className="w-full duration-300 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent"
                  />
                  <Button
                    type="submit"
                    variant="secondary"
                    className="w-full md:w-max"
                    size="sm"
                  >
                    Subscribe
                  </Button>
                </form>
                <p className="to-muted-foreground text-xs">
                  By subscribing you agree with our{" "}
                  <Link href="#">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
};

export default HomePage;
