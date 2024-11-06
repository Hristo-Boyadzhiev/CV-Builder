// import "./App.css";
import CVBuilder from "./components/CVBuilder";
import { NewCVContextProvider } from "./contexts/newCVContext";

export default function App() {
  return (
    <NewCVContextProvider>
      <CVBuilder />
    </NewCVContextProvider>
  );
}
