"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { GraduationCap, Book, Award, School } from "lucide-react";
import "react-vertical-timeline-component/style.min.css";

const WorkTimeLine = () => {
  const studies = [
    {
      title: "Master's in Computer Science",
      location: "University of Technology",
      description:
        "Specialized in Blockchain Technology and Distributed Systems",
      date: "2020 - 2022",
      icon: <GraduationCap className="h-6 w-6" />,
      iconBg: "#3b82f6",
    },
    {
      title: "Bachelor's in Software Engineering",
      location: "Tech Institute",
      description: "Focus on Full Stack Development and System Architecture",
      date: "2017 - 2020",
      icon: <School className="h-6 w-6" />,
      iconBg: "#10b981",
    },
    {
      title: "Blockchain Development Certification",
      location: "Ethereum Foundation",
      description: "Advanced Smart Contract Development and Security",
      date: "2019",
      icon: <Award className="h-6 w-6" />,
      iconBg: "#8b5cf6",
    },
    {
      title: "Web Development Bootcamp",
      location: "Code Academy",
      description: "Intensive training in modern web technologies",
      date: "2016",
      icon: <Book className="h-6 w-6" />,
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

export default WorkTimeLine;
