export type ProfileData = {
  Location: string;
  FullName: string;
  Description: string;
  Titles: string[];
  GhibliProfileUrl: string;
  AvatarUrl: string;
  GitHubUrl: string;
  LinkedinUrl: string;
  WebSiteUrl: string;
  ResumeEnUrl: string;
  ResumeFrUrl: string;
};

export const PROFILE: ProfileData = {
  FullName: "Thomas Moras",
  Titles: ["Software Engineer", "Full Stack Developer", "Web3 Enthusiast"],
  Description: "Full Stack Developer specializing in modern web technologies",
  Location: "Toronto, Canada, UTC-4",
  AvatarUrl: "/images/profile.jpg",
  GhibliProfileUrl: "/images/ghibli/profile/2.jpg",
  GitHubUrl: "https://github.com/ThomasMoras",
  LinkedinUrl: "https://www.linkedin.com/in/thomas-moras-48006213b",
  WebSiteUrl: "https://thomasmoras.dev",
  ResumeEnUrl: "/resume.pdf",
  ResumeFrUrl: "/resume_fr.pdf",
};
