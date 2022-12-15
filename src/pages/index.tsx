import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className=" text-center text-2xl">Which Pokemon is rounder</div>
      {/* use below instead of margins to make the specific components have less side effect */}
      <div className="p-2" />
      <div className="flex  max-w-xl items-center justify-between rounded border p-8">
        <div className="h-16 w-16 bg-red-200" />
        <div className="p-8">Vs</div>
        <div className="h-16 w-16 bg-red-200" />
      </div>
    </div>
  );
};

export default Home;
