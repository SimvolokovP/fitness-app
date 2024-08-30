import { useEffect } from "react";  
import { useDocument } from "react-firebase-hooks/firestore";  
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";  
import { firebaseDB } from "../firebase/firebase";  
import { useTelegram } from "./useTelegram";
import { userSample } from "../utils/utils";

export const useUser = () => { 
  const { user, tg } = useTelegram();
  const currentUser = user || userSample;
  const userId = currentUser?.id;

  const userDocRef = userId ? doc(collection(firebaseDB, "fitness_users"), userId) : null;  
  const [userDocSnapshot, loadingDoc, errorDoc] = useDocument(userDocRef);  

  useEffect(() => {  
    if (userId && userDocSnapshot) {  
      if (!userDocSnapshot.exists()) {  
        setDoc(userDocRef, {  
          id: userId,  
          first_name: currentUser?.first_name,  
          last_name: currentUser?.last_name,  
          created_at: Timestamp(),  
        });  
      }  
    }  
  }, [userId, userDocSnapshot, currentUser, userDocRef]);  

  const userData = userDocSnapshot?.data();  

  return { userData, loadingDoc, errorDoc };  
};