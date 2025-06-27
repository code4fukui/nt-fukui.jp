import { hydrateRoot } from "react-dom/client";
import App from "./app/app.tsx";

function render() {
  hydrateRoot(document.getElementById("app")!, <App />);
}

render();