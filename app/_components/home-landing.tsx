import Image from "next/image";
import servicesData from "@/common/data/layout/services.json";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const HomeLanding = () => {
  return (
    <section className="bg-background">
      <article className="py-6 px-4 flex flex-col gap-8 lg:gap-2  items-center justify-center md:flex-row ">
        <article className="space-y-4 ">
          <h1 className="text-foreground font-grotesk text-4xl md:text-6xl lg:text-6xl  max-w-sm md:max-w-md font-bold ">
            Architecture platform for webs 2024
          </h1>
          <p className="text-xl md:3xl  max-w-md md:max-w-lg  font-normal font-roboto">
            Our software development company helps businesses grow and succeed
            on the Internet through a range of services including SEO, web
            development and mobile application creation.
          </p>

          <Button
            className="max-w-sm w-full  font-medium text-2xl mx-auto py-7 rounded-xl font-grotesk"
            asChild
          >
            <Link href={"/dashboard"}>Go to dashboard</Link>
          </Button>
        </article>
        <section className="">
          <Image
            src={"/images/home-draw.svg"}
            alt="Home draw"
            className="w-full h-auto"
            height={300}
            width={400}
          />
        </section>
      </article>
      <div className="flex-row items-center mt-3">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6">
          <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
            <Image
              src="/images/clients/01.svg"
              className="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width={60}
              height={50}
            />
          </div>
          <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
            <Image
              src="/images/clients/02.svg"
              className="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width={60}
              height={50}
            />
          </div>
          <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
            <Image
              src="/images/clients/03.svg"
              className="h-9 w-auto m-auto"
              loading="lazy"
              alt="client logo"
              width={60}
              height={50}
            />
          </div>
          <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
            <Image
              src="/images/clients/04.svg"
              className="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width={60}
              height={50}
            />
          </div>
          <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
            <Image
              src="/images/clients/05.svg"
              className="h-8 w-auto m-auto"
              loading="lazy"
              alt="client logo"
              width={60}
              height={50}
            />
          </div>
          <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
            <Image
              src="/images/clients/06.svg"
              className="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width={60}
              height={50}
            />
          </div>
        </div>
      </div>

      <article className="flex flex-col items-center gap-2 md:flex-row md:gap-4  lg:gap-1 max-w-sm mx-auto mt-6 md:max-w-full md:ml-0 py-6 px-8">
        <h2 className="text-3xl bg-primary text-white font-bold font-grotesk p-3 rounded-2xl overflow-hidden">
          Our Services
        </h2>
        <p className="text-center font-lato text-xl font-medium">
          Complete solutions for a powerful and optimized web architecture
        </p>
      </article>

      <div className="flex-row items-center py-5 px-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map(
            ({ background, name1, name2, arrow, link, image }, index) => (
              <div
                className={cn(
                  background,
                  "rounded-2xl border-b-4 border-x-[1px] border-primary"
                )}
                key={index}
              >
                <div className="flex-col justify-center items-start gap-[93px] inline-flex p-5 ">
                  <div className="flex-col justify-start items-start flex">
                    <div className="px-[7px]  rounded-[7px] flex-col justify-start items-start gap-2.5 flex">
                      <div className=" text-3xl font-medium">{name1}</div>
                    </div>
                    <div className="px-[7px] rounded-[7px] flex-col justify-start items-start gap-2.5 flex">
                      <div className="text-3xl font-medium">{name2}</div>
                    </div>
                  </div>
                  <a
                    className="justify-start items-center gap-[15px] inline-flex"
                    href={link}
                  >
                    <div className="w-[41px] h-[41px] relative">
                      <Image
                        width={41}
                        height={41}
                        alt="Home"
                        className="w-[41px] h-[41px] left-0 top-0 absolute"
                        src={arrow}
                      />
                    </div>
                    <div className="text-xl font-normal leading-7">
                      Learn more
                    </div>
                  </a>
                </div>
                <div className="w-[210px] h-[170px] pt-0.5 pb-[1.95px] justify-center items-center flex relative">
                  <Image fill alt="Home" className="" src={image} />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
