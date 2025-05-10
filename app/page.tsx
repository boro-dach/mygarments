import { Button } from "@/shared/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <Button asChild>
        <Link href={"categories"}>categories</Link>
      </Button>
    </div>
  );
};

export default Home;
