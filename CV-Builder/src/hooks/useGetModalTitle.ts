import { useNewCVContext } from "./useNewCVContext";

export default function useGetModalTitle() {
  const { stepName } = useNewCVContext();

  switch (stepName) {
    case "newCvContent":
      return "CvContent";
    case "image":
      return "Image";
    case "header":
      return "Header";
    case "skills":
      return "Skills";
    case "languages":
      return "languages";
    case "Certificates":
      return "certificates";
    case "Projects":
      return "projects";
    case "achievements":
      return "Achievements";
    case "work":
      return "Work";
    case "education":
      return "Education";
    default:
      return null;
  }
}
