"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { GraduationCap, Book, Award, School } from "lucide-react";
import "react-vertical-timeline-component/style.min.css";

const GlobalTimeLine = () => {
  const studies = [
    {
      title: "Blockchain Development Certification",
      location: "Remote, France",
      description: "Advanced Smart Contract Development and Security",
      date: "2024 - 2025",
      icon: <Award className="h-6 w-6" />,
      iconBg: "#8b5cf6",
    },
    {
      title: "Software Engineer",
      contract: "CDI",
      compagny: "Ineo Nuclear",
      location: "Lyon, France",
      description: "",
      date: "2020 - 2024",
      icon: <GraduationCap className="h-6 w-6" />,
      iconBg: "#3b82f6",
    },
    {
      title: "Master's Degree",
      location: "Lyon, France",
      description: "Information Systems Expert",
      date: "2019",
      icon: <Award className="h-6 w-6" />,
      iconBg: "#8b5cf6",
    },
    {
      title: "Software Engineer",
      contract: "Apprenticeship",
      compagny: "Ineo Nuclear",
      location: "Lyon, France",
      description:
        "Software engineer in apprenticeship for Ineo Nuclear compagny",
      date: "2018-2019",
      icon: <Book className="h-6 w-6" />,
      iconBg: "#8b5cf6",
    },
    {
      title: "Full Stack Developer",
      location: "Lyon, France",
      contract: "Apprenticeship",
      compagny: "Pegasus developpement",
      description:
        "Full Stack Developer for the compagny, Pegasus developpement",
      date: "2017-2018",
      icon: <Book className="h-6 w-6" />,
      iconBg: "#8b5cf6",
    },
    {
      title: "Bachelor's Degree",
      location: "Lyon, France",
      description: "Computer Science",
      date: "2014 - 2017",
      icon: <School className="h-6 w-6" />,
      iconBg: "#f97316",
    },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-center">
        Professional Experiences
      </h3>
      <VerticalTimeline className="custom-timeline" animate={true}>
        {studies.map((study, index) => (
          <VerticalTimelineElement
            key={index}
            date={study.date}
            iconStyle={{
              background: study.iconBg,
              color: "#fff",
            }}
            icon={study.icon}
          >
            <h3 className="timeline-title">{study.title}</h3>
            <h4 className="timeline-location">{study.location}</h4>
            <p className="timeline-description">{study.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default GlobalTimeLine;
