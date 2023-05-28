import "./../globals.css";
import { Inter } from "next/font/google";
import SearchHeader from "@/component/SearchHeader";

const inter = Inter({ subsets: ["latin"] });
// console.log(inter);

export const metadata = {
  title: "Google Search",
  description: "Generated by create next app",
};

export default function SearchLayout({ children }) {
  return (
    <div className="relative min-h-screen">
      <SearchHeader />
      {children}
    </div>
  );
}
