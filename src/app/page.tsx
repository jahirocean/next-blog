import Container from "@/components/Container";
import LatestPosts from "@/components/Home/latest-posts";
import PopularPost from "@/components/Home/PopularPost";
import TopCategories from "@/components/Home/TopCategories";
import { MainNav } from "@/components/main-nav";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
   <MainNav/> 
    <main className="flex flex-col items-start justify-evenly md:flex-row">
      <div>
    <LatestPosts/>
      </div>
      <div className="h-screen">
        <div>
          <h1 className="font-bold mb-4">TOP CATEGORIS</h1>
          <TopCategories />
        </div>
        <div className="mt-10 sticky top-0">
          <h1 className="font-bold mb-4">POPULAR POST</h1>
          <PopularPost/>
        </div>
      </div>
    </main>
    </Container>
  );
}
