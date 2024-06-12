import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-screen-md w-full mx-auto p-4">
      <Link href="/" className="m-3">
          Back
        </Link>
        <hr className="mt-5"/>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem
        </p>
      </div>
    </div>
  );
}
