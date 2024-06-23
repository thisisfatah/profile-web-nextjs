import React from "react";

const Navbar = () => {
  return (
    <div>
      <header
        className="bg-transparent absolute top-0 left-0 w-full flex items-center
                    z-10"
      >
        <div className="container">
          <div
            className="flex items-center justify-start
                    relative"
          >
            <div className="px-4">
              <a
                href="/"
                className="font-extrabold text-2xl text-primary
                  block py-6"
              >
                Fatahillah
              </a>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden"
              >
                <span className="hamburger-line transition duration-300 ease-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-out"></span>
                <span className="hamburger-line transition duration-300 ease-out origin-bottom-left"></span>
              </button>

              <nav
                id="nav-menu"
                className="hidden absolute py-5 bg-white 
                  shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full
                  lg:shadow-none lg:rounded-none"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="/about"
                      className="text-base text-primary py-4
                              mx-8 flex group-hover:text-secondary lg:mx-2 lg:text-sm"
                    >
                      Tentang Saya
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="/projects"
                      className="text-base text-primary py-4
                              mx-8 flex group-hover:text-secondary lg:mx-2 lg:text-sm"
                    >
                      Portofolio
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="/contact"
                      className="text-base text-primary py-4
                              mx-8 flex group-hover:text-secondary lg:mx-2 lg:text-sm"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
