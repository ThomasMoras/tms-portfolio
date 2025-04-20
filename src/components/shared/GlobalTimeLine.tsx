"use client";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { MapPin, GraduationCap, Award, School } from "lucide-react";
import { ImOffice } from "react-icons/im";
import "react-vertical-timeline-component/style.min.css";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import { EXPERIENCES } from "@/constants/careerConstants";
import { Experience } from "@/types/careerTypes";

const GlobalTimeLine = () => {
  const t = useTranslations("Career");

  // Function to get the appropriate icon component
  const getIconComponent = (iconName: string): ReactNode => {
    switch (iconName) {
      case "award":
        return <Award className="h-6 w-6" />;
      case "graduation":
        return <GraduationCap className="h-6 w-6" />;
      case "office":
        return <ImOffice className="h-6 w-6" />;
      case "school":
        return <School className="h-6 w-6" />;
      default:
        return <Award className="h-6 w-6" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="mb-8 md:mb-12 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">{t("title")}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
          {t("subtitle")}
        </p>
      </div>
      <VerticalTimeline className="custom-timeline" animate={true}>
        {EXPERIENCES.map((experience: Experience, index) => (
          <VerticalTimelineElement
            key={index}
            date={experience.date}
            iconStyle={{
              background: experience.iconBg,
              color: "#fff",
            }}
            icon={getIconComponent(experience.icon)}
          >
            <div className="space-y-2">
              <div className="space-y-2">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    {t(experience.titleKey)}
                    {experience.contract && (
                      <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                        ({t(`contracts.${experience.contract.toLowerCase()}`)})
                      </span>
                    )}
                  </h3>
                </div>
              </div>

              {experience.compagny && (
                <h4 className="text-base font-medium text-muted-foreground">
                  {experience.compagny}
                </h4>
              )}

              {experience.locationKey && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-1 h-4 w-4" />
                  {t(experience.locationKey)}
                </div>
              )}

              {experience.descriptionKey && (
                <p className="text-sm text-muted-foreground mt-2">{t(experience.descriptionKey)}</p>
              )}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default GlobalTimeLine;
