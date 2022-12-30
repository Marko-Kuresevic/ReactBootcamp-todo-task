import { useContext } from "react"
import { GlobalContext } from "../context/context"

const useGlobalContext = () => {
    const appContext = useContext(GlobalContext);
    return appContext;
}

export default useGlobalContext;