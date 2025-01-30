"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { GraduationCap, Award, School, MapPin } from "lucide-react";
import { ImOffice } from "react-icons/im";
import "react-vertical-timeline-component/style.min.css";

interface Experience {
  title: string;
  contract: string;
  compagny: string;
  location: string;
  description: string;
  date: string;
  icon: React.ReactNode;
  iconBg: string;
}

const GlobalTimeLine = () => {
  const experiences = [
    {
      title: "Blockchain Development Certification",
      contract: "",
      compagny: "",
      location: "Remote, France",
      description: "Advanced Smart Contract Development and Security",
      date: "2024 - 2025",
      icon: <Award className="h-6 w-6" />,
      iconBg: "#EEB422",
    },
    {
      title: "Software Engineer",
      contract: "CDI",
      compagny: "Ineo Nuclear",
      location: "Lyon, France",
      description: "",
      date: "2020 - 2024",
      icon: <ImOffice className="h-6 w-6" />,
      iconBg: "#26a769",
    },
    {
      title: "Master's Degree",
      contract: "",
      compagny: "",
      location: "Lyon, France",
      description: "Information Systems Expert",
      date: "2019",
      icon: <Award className="h-6 w-6" />,
      iconBg: "#EEB422",
    },
    {
      title: "Software Engineer",
      contract: "Apprenticeship",
      compagny: "Ineo Nuclear",
      location: "Lyon, France",
      description: "Software engineer for Ineo Nuclear compagny",
      date: "2018-2019",
      icon: <GraduationCap className="h-6 w-6" />,
      iconBg: "#26a769",
    },
    {
      title: "Full Stack Developer",
      contract: "Apprenticeship",
      compagny: "Pegasus developpement",
      location: "Lyon, France",
      description:
        "Full Stack Developer for the compagny, Pegasus developpement",
      date: "2017-2018",
      icon: <GraduationCap className="h-6 w-6" />,
      iconBg: "#3d85c6",
    },
    {
      title: "Bachelor's Degree",
      contract: "",
      compagny: "",
      location: "Sophia Antipolis, France",
      description: "Computer Science",
      date: "2014 - 2017",
      icon: <School className="h-6 w-6" />,
      iconBg: "#B2766A",
    },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-center">
        Professional Experiences
      </h3>
      <VerticalTimeline className="custom-timeline" animate={true}>
        {experiences.map((experience: Experience, index) => (
          <VerticalTimelineElement
            key={index}
            date={experience.date}
            iconStyle={{
              background: experience.iconBg,
              color: "#fff",
            }}
            icon={experience.icon}
          >
            <div className="space-y-2">
              <div>
                <h3 className="text-lg font-semibold inline-flex items-center">
                  {experience.title}
                  {experience.contract && (
                    <span className="ml-2 text-sm font-medium text-muted-foreground">
                      ({experience.contract})
                    </span>
                  )}
                </h3>
              </div>

              {experience.compagny && (
                <h4 className="text-base font-medium text-muted-foreground">
                  {experience.compagny}
                </h4>
              )}

              {experience.location && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-1 h-4 w-4" />
                  {experience.location}
                </div>
              )}

              {experience.description &&
                experience.description.trim() !== "" && (
                  <p className="text-sm text-muted-foreground mt-2">
                    {experience.description}
                  </p>
                )}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};
export default GlobalTimeLine;
