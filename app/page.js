import About from "@/components/About";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import VideoPage from "@/components/EmbedVideo";
import LoadingWrapper from "../components/LoadingWrapper";
import { Navbar } from "@/components/Navbar";

import data from '../data.json'

export default function Home() {
  return (
    <LoadingWrapper>
      <nav>
        <Navbar />
      </nav>
      <div className="items-center justify-items-center sm:p-5 font-[family-name:var(--font-geist-sans)]">
        <main className="items-center min-h-screen">
          <About />
          {data.projects.map((project, i) => {
            if (project.type === 'article') {
              return (
                <Cards key={i} title={project.title} url={project.url} desc={project.desc} bg_img={project.bg_img} />
              )
            }
            else if (project.type === 'video') {
              return (
                <VideoPage key={i} url={project.url} />
              )
            }
          })

          }
          <div className="flex gap-4 items-center flex-col sm:flex-row">
          </div>
        </main>
        <footer className="flex flex-wrap justify-center gap-6 py-10">
          <Footer />
        </footer>
      </div>
    </LoadingWrapper>
  );
}