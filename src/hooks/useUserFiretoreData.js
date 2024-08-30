import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firebaseDB } from "../firebase/firebase";

export const useUserFiretoreData = (user) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user && user.id) {
        const userQuery = query(
          collection(firebaseDB, "fitness_users"),
          where("id", "==", user.id)
        );

        try {
          const querySnapshot = await getDocs(userQuery);
          if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0].data();
            setUserData(userDoc);
          } else {
            setUserData(null);
          }
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  return { userData, loading, error };
};
