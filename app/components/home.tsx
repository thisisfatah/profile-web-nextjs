import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div>
      <section id="home" className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">
                Halo Semua 👋, Saya{" "}
                <span
                  className="block font-bold
                text-dark
                    text-4xl mt-1 lg:text-5xl"
                >
                  Muhammad Fatahillah
                </span>
              </h1>
              <h2
                className="font-medium text-secondary text-lg
            mb-12"
              >
                Game | Web <span className="text-dark">Programmer</span>
              </h2>
              <a
                href="/contact"
                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full
            hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
              >
                Hubungi Saya
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-0 lg:right-0">
                <Image
                  src="/art-profile.png"
                  alt="Fatah Logo"
                  className="dark:invert"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
