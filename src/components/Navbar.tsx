import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <nav className="w-full mx-auto py-2">
        <MaxWidthWrapper>
          <Button>Projects</Button>
        </MaxWidthWrapper>
      </nav>
    </>
  );
};

export default Navbar;
