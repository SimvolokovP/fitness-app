import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import MobileBar from "./components/MobileBar/MobileBar";
import { useUser } from "./hooks/useUser";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function App() {
  const { userData, loadingDoc, errorDoc } = useUser();

  if (loadingDoc) {
    return <LoadingScreen />;
  }

  if (errorDoc) {
    return <div>Error loading user data.</div>;
  }

  return (
    <>
      <Header />
      <MobileBar />
      <main className="padding-top">
        <HomePage user={userData || currentUser} />
      </main>
    </>
  );
}

export default App;
