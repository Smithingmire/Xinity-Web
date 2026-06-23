import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import VideoSection from "@/components/VideoSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import StatsSection from "@/components/StatsSection";
import PreviousEvents from "@/components/PreviousEvents";
import EventsSection from "@/components/EventsSection";
import JoinSection from "@/components/JoinSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <VideoSection />
      <ProjectsShowcase limit={3} />
      <StatsSection />
      <PreviousEvents />
      <EventsSection limit={3} />
      <JoinSection />
    </>
  );
}
