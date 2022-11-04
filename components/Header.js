import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="p-4 dark:bg-green-700 dark:text-green-100 border-b-2 dark:border-b-0 border-green-300">
      <div className="container flex justify-between items-center h-16 mx-auto">
        <a
          rel="noopener noreferrer"
          href={process.env.NEXT_PUBLIC_HOST_URL}
          aria-label="Back to homepage"
          className="flex items-center mx-auto lg:mx-32"
        >
          <Image
            src="/logo.svg"
            alt="SpotifyInfo Logo"
            width="64px"
            height="64px"
          />
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href={process.env.NEXT_PUBLIC_HOST_URL}
              className="flex items-center px-4 -mb-1 border-b-2 border-green-400 hover:border-green-600 transition duration-300 delay-150 hover:delay-100 dark:border-gray-300"
            >
              Home
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href={`${process.env.NEXT_PUBLIC_HOST_URL}/about`}
              className="flex items-center px-4 -mb-1 border-b-2 border-green-400 hover:border-green-600 transition duration-300 delay-150 hover:delay-100 dark:border-gray-300"
            >
              About
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href={`${process.env.NEXT_PUBLIC_HOST_URL}/about#faq`}
              className="flex items-center px-4 -mb-1 border-b-2 border-green-400 hover:border-green-600 transition duration-300 delay-150 hover:delay-100 dark:border-gray-300"
            >
              FAQ
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href={`${process.env.NEXT_PUBLIC_HOST_URL}/contact`}
              className="flex items-center px-4 -mb-1 border-b-2 border-green-400 hover:border-green-600 transition duration-300 delay-150 hover:delay-100 dark:border-gray-300"
            >
              Contact
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href={`${process.env.NEXT_PUBLIC_HOST_URL}/privacy`}
              className="flex items-center px-4 -mb-1 border-b-2 border-green-400 hover:border-green-600 transition duration-300 delay-150 hover:delay-100 dark:border-gray-300"
            >
              Privacy
            </a>
          </li>
          <li className="flex">
            <a
              className="text-gray-900 hover:text-gray-900/75 dark:text-gray-300 dark:hover:text-gray-300/75"
              href="https://github.com/nesaku/SpotifyInfo"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          {/*
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href={process.env.NEXT_PUBLIC_HOST_URL}
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Link
            </a>
          </li>
          */}
        </ul>
        {/*
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded">Sign in</button>
          <button className="self-center px-8 py-3 font-semibold rounded dark:bg-green-400 dark:text-green-900">
            Sign up
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-green-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        */}
      </div>
    </header>
  );
};

export default Header;
