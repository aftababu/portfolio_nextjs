import React from "react";

const ContactFooter: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-3 sm:py-8 w-screen ">
      <div className="w-full 2xl:w-1/2 flex justify-around flex-wrap gap-4 mx-2  items-center 2xl:mx-auto ">
        <div className="text-lg sm:text-xl">
          <label htmlFor="phone" className="text-green-500">
            Phone:{" "}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={"+8801609017929"}
            readOnly
            className="bg-transparent appearance-none border-none outline-none  max-w-[180px]"
          />

          <a
            href="tel:+8801609017929"
            className="text-xl inline-block translate-y-2 items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M1 4.552C1 3.697 1.303 3 1.8 3h16.4c.497 0 .8.697.6 1.552l-1.2 4.8c-.2.783-.75 1.463-1.533 1.737-.783.273-1.65.09-2.3-.465l-1.842-1.106c-.5-.3-1.1-.3-1.6 0l-1.842 1.107c-.65.354-1.517.537-2.3.464-.783-.274-1.333-.954-1.533-1.737L1.8 4.552zM2.4 5L3 7h14l.6-2H2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div className="text-lg sm:text-xl">
          <span className="text-green-500">Address:</span> Baizid thana, Chittagong
        </div>
       
      </div>
    </footer>
  );
};

export default ContactFooter;
