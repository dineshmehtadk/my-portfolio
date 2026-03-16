import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrum";

export const metadata: Metadata = {
  title: "Frontend Developer | Projects",
  description: "Portfolio of Dinesh Mehta - Frontend & Software Developer",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen w-full max-w-7xl mx-auto px-6">
      <Breadcrumb title="projects" subTitle="List of my projects" />
      {children}
    </main>
  );
}