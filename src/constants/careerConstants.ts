import { Experience } from "@/types/careerTypes";

export const COLORS = {
  GOLD: "#EEB422",
  GREEN: "#26a769",
  BLUE: "#3d85c6",
  BROWN: "#B2766A",
};

export enum ContractType {
  CDI = "CDI",
  APPRENTICESHIP = "Apprenticeship",
}

export const EXPERIENCES: Experience[] = [
  {
    titleKey: "blockchain_certification",
    contract: "",
    compagny: "",
    locationKey: "remote_france",
    descriptionKey: "blockchain_description",
    date: "2024-2025",
    icon: "award",
    iconBg: COLORS.GOLD,
  },
  {
    titleKey: "software_engineer_ineo",
    contract: ContractType.CDI,
    compagny: "Ineo Nuclear",
    locationKey: "lyon_france",
    descriptionKey: "software_engineer_ineo_description",
    date: "2020-2024",
    icon: "office",
    iconBg: COLORS.GREEN,
  },
  {
    titleKey: "masters_degree",
    contract: "",
    compagny: "Isitech Partner Formation",
    locationKey: "lyon_france",
    descriptionKey: "masters_degree_description",
    date: "2019",
    icon: "award",
    iconBg: COLORS.GOLD,
  },
  {
    titleKey: "software_engineer_apprentice",
    contract: ContractType.APPRENTICESHIP,
    compagny: "Ineo Nuclear",
    locationKey: "lyon_france",
    descriptionKey: "software_engineer_apprentice_description",
    date: "2018-2019",
    icon: "graduation",
    iconBg: COLORS.GREEN,
  },
  {
    titleKey: "fullstack_developer",
    contract: ContractType.APPRENTICESHIP,
    compagny: "Pegasus developpement",
    locationKey: "lyon_france",
    descriptionKey: "fullstack_developer_description",
    date: "2017-2018",
    icon: "graduation",
    iconBg: COLORS.BLUE,
  },
  {
    titleKey: "bachelors_degree",
    contract: "",
    compagny: "Polytech Nice S",
    locationKey: "sophia_antipolis_france",
    descriptionKey: "computer_science",
    date: "2014-2017",
    icon: "school",
    iconBg: COLORS.BROWN,
  },
];
