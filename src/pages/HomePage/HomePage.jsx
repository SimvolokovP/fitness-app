import { useEffect } from "react";

export default function HomePage({ user }) {
  useEffect(() => {
    console.log(user)
  }, [user])
  return (
    <div className="home-page">
      <div className="container home-page__container">
        <div className="home-page__chapter">
          <span>С возвращением! 🔥</span>
          <h3>
            {user?.first_name} {user?.last_name}
          </h3>
        </div>
      </div>
    </div>
  );
}
