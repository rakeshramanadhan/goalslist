import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-20 ">
      <h1 className="text-5xl font-bold">Home</h1>
      
      <dl class="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        <div class="flex flex-col-reverse">
          <dt class="text-base leading-7 ">
            {" "}
            <Link href="/about">About</Link>
          </dt>
        </div>
        <div class="flex flex-col-reverse">
          <dt class="text-base leading-7 ">
            <Link href="/goals">Goals</Link>
          </dt>
        </div>
      </dl>
    </div>
  );
}
