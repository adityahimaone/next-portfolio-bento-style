import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer>
      <MaxWidthWrapper>
        <div className="mt-3 flex flex-col items-center justify-center border-t border-gray-200 py-6">
          <div className="flex flex-row items-center text-center text-xs text-gray-500 dark:text-gray-400">
            © 2023 by{" "}
            <a
                href="https://www.linkedin.com/in/adityahimaone"
                target="_blank"
                className="text-gray-500 transition-all ml-1 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              Aditya Himawan
            </a>
            <div className="h-5 border-r border-gray-400 mx-2"></div>
            <a
                href="http://v1.adityahimaone.tech/"
                target="_blank"
                className="text-gray-500 transition-all hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              Version One
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
