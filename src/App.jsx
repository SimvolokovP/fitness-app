import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import MobileBar from "./components/MobileBar/MobileBar";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import { useTelegram } from "./hooks/useTelegram";
import { useUserFiretoreData } from "./hooks/useUserFiretoreData";
import { Route, Routes } from "react-router-dom";

function App() {
  // const { userData, loadingDoc, errorDoc } = useUser();

  // if (loadingDoc) {
  //   return <LoadingScreen />;
  // }

  // if (errorDoc) {
  //   return <div>Error loading user data.</div>;
  // }

  const { user } = useTelegram();

  const { userData, loading, error } = useUserFiretoreData(user);

  return (
    <>
      <Header />
      <MobileBar />
      <main className="padding-top">
        <Routes>
          <Route index element={<HomePage user={userData} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
