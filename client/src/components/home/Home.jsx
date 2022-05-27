import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import getAllOperations from "../../actions/operations/getAllOperations";
import getUser from "../../utils/getUser.js";
import IsLoged from "../../actions/user/isLoged";




const Home = () => {
    const dispatch = useDispatch();
    const isLoged = useSelector(state => state.isLoged);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoged){
          const user = getUser();
          user
          ? dispatch(IsLoged(user))
          : navigate('login')
        } else {
          dispatch(getAllOperations())
        }
        
    }, [isLoged])
    

  return (
    <div>Home</div>
  )
}

export default Home