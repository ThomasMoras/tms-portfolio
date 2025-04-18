export type ProfileData = {
  Location: string;
  FullName: string;
  Title: string;
  GhibliProfileUrl: string;
  AvatarUrl: string;
  GitHubUrl: string;
  LinkedinUrl: string;
  ResumeEnUrl: string;
  ResumeFrUrl: string;
};

export type TypewriterItem = {
  text: string;
  color: string;
};

export const PROFILE: ProfileData = {
  FullName: "Thomas Moras",
  Title: "Full Stack Developer",
  Location: "Toronto, Canada, UTC-4",
  AvatarUrl: "/images/profile.jpg",
  GhibliProfileUrl: "/images/ghibli/profile/2.jpg",
  GitHubUrl: "https://github.com/ThomasMoras",
  LinkedinUrl: "https://www.linkedin.com/in/thomas-moras-48006213b",
  ResumeEnUrl: "/resume.pdf",
  ResumeFrUrl: "/resume_fr.pdf",
};

export const TYPEWRITER_STRINGS: TypewriterItem[] = [
  { text: "Blockchain Developer", color: "cyan-500" },
  { text: "Full Stack Developer", color: "purple-500" },
  { text: "Smart Contract Developer", color: "emerald-500" },
  { text: "Web3 Enthusiast", color: "orange-500" },
];
