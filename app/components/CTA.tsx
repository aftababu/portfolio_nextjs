import Link from "next/link";
import { FC } from "react";

const CTA:FC = () => {
  return (
    <section className="flex justify-between items-center my-3">
      <p className=" text-base sm:text-3xl  font-semibold text-green-950 dark:text-green-700">
        Let&apos;s work together.
      </p>
      <Link className="btn px-5 py-2 w-fit" href="/contact">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
