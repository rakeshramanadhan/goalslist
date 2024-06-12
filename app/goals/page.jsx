import Link from "next/link";
import getGoals from "../libs/getGoals";
import Card from "../components/Card";
import Header from "../components/header";
import fetchImage from '../utils/fetchImage';
import Image from "next/image";

export default async function UsersPage() {
    
  const goals = await getGoals();

  console.log(goals);
  return (
    <div className="text-center max-w">
      <Header />
      <Link href="/" className="m-3">
        Back
      </Link>
      
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="max-w-screen-lg w-full mx-auto p-4">
        

          
          <div className="min-h-screen flex justify-center items-center bg-gray-100 custom-bg">
            <div className="max-w-screen-md w-full mx-auto p-4">
            <h1 className="text-5xl font-bold text-7xl text-white">
            17 Goals to transfer our world
          </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {goals.map((goal) => {
                  return (
                    <>
                      <div key={goal.code} className="text-3xl mt-10">
                        <Link href={`/goals/${goal.code}`}>
                          <Card
                            key={goal.code}
                            title={goal.title}
                            code={goal.code}
                          />
                        </Link>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
