import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer>
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center py-6 mt-3 border-t border-gray-200">
          <div className="text-center text-gray-500 dark:text-gray-400 text-xs">
            © 2023 by{" "}
            <a
              href="https://www.linkedin.com/in/adit/"
              target="_blank"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-all"
            >
              Adit
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
