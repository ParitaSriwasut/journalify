import Image from "next/image";
import Link from "next/link";
import JournalCard from "./components/JournalCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users" className="Link">
        Users
      </Link>
      <JournalCard />
    </main>
  );
}
