import { useNavigate } from "react-router";

const navHelper = () => {
  const navigate = useNavigate()
  return {
    toLogin: () => {
      console.log('???')
      navigate('/login')
    },
    toWelcome: () => {
      navigate('/welcome')
    }
  }
}

export default navHelper;