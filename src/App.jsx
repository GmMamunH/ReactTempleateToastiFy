import { TostiFy } from "./components/TostiFy";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <h1 className="text-2xl text-center text-red-800 underline underline-offset-2">
        Setup React & Tailwind & Vite Using PNPM
      </h1>
      <TostiFy />
      <ToastContainer />
    </>
  );
}

export default App;
