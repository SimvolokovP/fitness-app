
import './Burger.css';

export default function Burger({ setSidebar, active }) {
  return (
    <div
      className={!active ? "burger" : "burger active"}
      onClick={() => setSidebar(true)}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
