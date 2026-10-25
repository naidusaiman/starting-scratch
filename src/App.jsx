import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <Pizza name="Pizza 1" description="Description 1" />
      <Pizza name="Pizza 2" description="Description 2" />
      <Pizza name="Pizza 3" description="Description 3" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
