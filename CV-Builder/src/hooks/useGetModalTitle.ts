import { useNewCVContext } from "./useNewCVContext";

export default function useGetModalTitle() {
  const { stepName } = useNewCVContext();

  switch (stepName) {
    case "newCvContent":
      return "CvContent";
    case "image":
      return "image";
    case "header":
      return "header";
    case "skills":
      return "skills";
    case "languages":
      return "languages";
    case "certificates":
      return "certificates";
    case "projects":
      return "projects";
    case "achievements":
      return "achievements";
    case "work":
      return "work";
    case "education":
      return "education";
    default:
      return null;
  }
}
