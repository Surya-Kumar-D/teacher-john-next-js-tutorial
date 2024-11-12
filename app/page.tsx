import Link from "next/link";
const HomePage = () => {
  return (
    <div>
      <h1 className="text-7xl mb-8 font-bold">HomePage</h1>
      <Link href={"/client"} className="btn btn-accent">
        Get started
      </Link>
    </div>
  );
};

export default HomePage;

console.log("hello from client");
