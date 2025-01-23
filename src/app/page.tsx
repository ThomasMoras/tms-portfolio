import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center">
      <h1>Work In Progress</h1>
      <div className="justify-center items-center">
        <Image
          src="/images/work_in_progress.jpg"
          width={500}
          height={500}
          alt="Work In Progress"
        />
      </div>
    </div>
  );
}
