import logo from '../../assets/spiro_logo-1.svg'

function Footer() {
  return (
    <div>
      <footer className="bg-gray-500 rounded-lg shadow-xl dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src={logo}
                className="h-14"
                alt="Spiro"
              />
              {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Spiro
              </span> */}
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-text sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-text sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-text sm:text-center dark:text-gray-400">
            ©{" "}
            <a href="" className="hover:underline">
              By Gavin Boris
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
