import { useEffect } from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import MobileBar from "./components/MobileBar/MobileBar";

function App() {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    console.log(tg.initDataUnsafe);
  }, [tg]);

  return (
    <>
      <Header />
      <MobileBar />
      <main className="padding-top">
        <HomePage />
      </main>
    </>
  );
}

export default App;
