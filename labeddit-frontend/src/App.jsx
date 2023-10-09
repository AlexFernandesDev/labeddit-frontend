import { useEffect, useState } from 'react'
import './App.css'
import { GlobalContext } from './contexts/GlobalContext'
import Router from './routes/Router'
import { BASE_URL, TOKEN_NAME } from './constants/url'
import axios from 'axios'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const token = window.localStorage.getItem(TOKEN_NAME)

    if (token) {
      fetchPosts()
    }
  }, [])

  const fetchPosts = async () => {
    try {
      const token = window.localStorage.getItem(TOKEN_NAME)

      const config = {
        headers: {
          Authorization: token
        }
      }
      
      const response = await axios.get(BASE_URL + "/posts", config)

      setPosts(response.data)
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data)
    }
  }

  const context = {
    posts,
    fetchPosts
  }
  
  return (
    <>
     <GlobalContext.Provider value={context}>
       <Router />
     </GlobalContext.Provider>
    </>
  )
}

export default App
