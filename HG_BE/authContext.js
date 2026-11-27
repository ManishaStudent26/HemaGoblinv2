import { useContext, useState, useEffect } from "react";
import firebase, {auth} from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
const AuthContext =React.createContext();
export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser]= useState(null);
    const [userLogin, setUserLogin]=useState(false);
    const[loading, setLoading]=useState(true);

    useEffect(()=>{
        const disconnectfb = onAuthStateChanged(auth, initializeUser)
        return disconnectfb
    }, [])

    async function initializeUser(user){
        if (user){
            setCurrentUser({...user});
            setUserLogin(true)
        }
        else{
            setCurrentUser(null);
            setUserLogin(false);
        }
    setLoading(false);
    }
    const authValue={
    userLogin,
    currentUser,
    setCurrentUser}
};

return (
    <AuthContext.AuthProvider value={authValue}>
        (!loading &&children)
        </AuthContext.AuthProvider>
)

