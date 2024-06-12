import getGoal from "@/app/libs/getGoal";
import { Suspense } from "react";
import GoalDetails from "@/app/components/GoalDetails";
import Link from "next/link";

export default async function UserPage({ params: { id } }) {
  // initiate both request in parallel
  // console.log(id);
  const goalData = getGoal(id);
  const goal = await goalData;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-screen-md w-full mx-auto p-4">
        <Link href="/">Back</Link>
        <hr className="mt-5" />
        <h1 className="text-5xl font-bold text-center mt-20">
          Goal Information
        </h1>
        <Suspense fallback={<p className="text-center text-5xl">Loading...</p>}>
          <GoalDetails promise={goal} />
        </Suspense>
      </div>
    </div>
  );
}
