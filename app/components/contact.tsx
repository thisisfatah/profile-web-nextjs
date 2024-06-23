import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="pt-36 pb-32">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary">Contact</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Hubungi Kami
              </h2>
              <p className="font-medium text-md text-secondary md:text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate praesentium repellendus commodi aspernatur?
              </p>
            </div>
          </div>

          <form action="{{ route('contact.send') }}" method="POST">
            <div className="w-full lg:w-2/3 lg:mx-auto">
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="name"
                  className="text-base font-bold text-primary"
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md 
          focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>

              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="email"
                  className="text-base font-bold text-primary"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md 
          focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>

              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="message"
                  className="text-base font-bold text-primary"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md 
          focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                ></textarea>
              </div>

              <div className="w-full px-4">
                <button
                  className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full
          w-full hover:shadow-lg hover:opacity-80 transition duration-500"
                >
                  Kirim
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
