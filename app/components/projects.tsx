import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div>
      <section className="pt-36 pb-16 bg-slate-100">
        <div className="container">
          <div className="w-full p-4">
            <div className="max-w-xl mx-auto text-center">
              <h4 className="font-semibold text-lg text-primary">Portofolio</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Project Terbaru
              </h2>
              <p className="font-medium text-md text-secondary md:text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem similique numquam quisquam placeat sequi ad, sapiente
                repellat sed autem. Ducimus!
              </p>
            </div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <Image
                  src="/golden-kolak.jpg"
                  alt="Landing page"
                  width={640}
                  height={317}
                />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Title 1
              </h3>
              <div className="font-medium text-base text-secondary">
                Lorem ipsum dolor sit amet.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
