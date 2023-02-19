import { useNavigate } from "react-router";

const navHelper = () => {
  const navigate = useNavigate()
  return {
    toLogin: () => {
      navigate('/login')
    },
    toWelcome: () => {
      navigate('/welcome')
    },
    toKey: (key: string) => {
      navigate(key)
    }
  }
}

export default navHelper;