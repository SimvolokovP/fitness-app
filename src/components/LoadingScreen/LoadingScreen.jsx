import "./LoadingScreen.css";
import { InfinitySpin } from "react-loader-spinner";

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <InfinitySpin ariaLabel="loading" color="var(--accent-color)" />
    </div>
  );
}
