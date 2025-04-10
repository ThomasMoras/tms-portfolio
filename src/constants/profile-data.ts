export type ProfileData = {
  fullName: string;
  title: string;
  avatarUrl: string;
  GitHubUrl: string;
  LinkedinUrl: string;
  resumeUrl: string;
};

export type TypewriterItem = {
  text: string;
  color: string;
};

export const PROFILE: ProfileData = {
  fullName: "John Doe", // Remplacez par votre nom
  title: "Full Stack Developer",
  avatarUrl: "/images/profile.jpg",
  GitHubUrl: "https://github.com/yourusername",
  LinkedinUrl: "https://linkedin.com/in/yourprofile",
  resumeUrl: "/resume.pdf",
};

export const TYPEWRITER_STRINGS: TypewriterItem[] = [
  { text: "Blockchain Developer", color: "cyan-500" },
  { text: "Full Stack Developer", color: "purple-500" },
  { text: "Smart Contract Developer", color: "emerald-500" },
  { text: "Web3 Enthusiast", color: "orange-500" },
];
