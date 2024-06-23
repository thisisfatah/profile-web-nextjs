import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div>
      <section id="blog" className="pt-36 pb-32 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center">
              <h4 className="font-semibold text-lg text-primary">Blog</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Terkini
              </h2>
              <p className="font-medium text-md text-secondary md:text-lg">
                Ini adalah blog saya sendiri
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center mt-10">
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div
                className="bg-white rounded-xl overflow-hidden shadow-lg
        mb-10"
              >
                <Image
                  src="/golden-kolak.jpg"
                  alt="Golden Kolak"
                  className="w-full"
                  width={500}
                  height={500}
                />

                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="/blog/{{ $post->slug }}"
                      className="block mb-3 font-semibold text-xl text-dark
                    hover:text-primary truncate"
                    >
                      Title 1
                    </a>
                  </h3>
                  <p className="font-medium text-base text-secondary mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque, enim.
                  </p>
                  <a
                    href="/blog/{{ $post->slug }}"
                    className="font-medium text-sm text-white bg-primary
                py-2 px-4 rounded-lg hover:opacity-80"
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
