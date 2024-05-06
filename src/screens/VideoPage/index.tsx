import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import { CategoryPills } from "../../components/CategoryPills";
import { categories } from "../../data/home";
import { PageHeader } from "../../layout/PageHeader";
import { VideoGridItem } from "../../components/VideoGridItem";
import { Sidebar } from "../../layout/Sidebar";
import { SidebarProvider } from "../../contexts/SidebarContext";
import { Footer } from "../../components/Footer";
import LoadingPage from "../LoadingPage";

import "./index.css";
import useApi from "../../hooks/axios";
import Error404 from "../Error404";

type Video = {
  id: string;
  title: string;
  channel: {
    id: string;
    name: string;
    profileUrl: string;
  };
  views: number;
  postedAt: string;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
};

export default function VideoPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const { data, loading, error } = useApi("/videos");

  return (
    <SidebarProvider>
      <div className="max-h-screen flex flex-col">
        <PageHeader />
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <Sidebar />
          <div className="overflow-x-hidden px-8 pb-4">
            <div className="sticky top-0 bg-white z-10 pb-4">
              <CategoryPills
                categories={categories}
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
              />
            </div>
            {error && (
              <>
                <Error404 />
              </>
            )}
            {loading ? (
              <>
                <LoadingPage />
              </>
            ) : (
              <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                {data?.videos.map((video: Video, index: string) => (
                  <VideoGridItem
                    key={`video` + index}
                    {...(video as unknown as Video)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </SidebarProvider>
  );
}
