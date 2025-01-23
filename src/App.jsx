import axios from 'axios'
import { useState, useEffect } from 'react'
import './style/App.css'
import Post from './Post'
export default function App() {

  const [data, setdata] = useState([])
  const [loading, setLoading] = useState(true);

  const url = 'https://jsonplaceholder.typicode.com/posts'
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(url)
      setdata(response.data)
      setLoading(false);
    }
    fetchData()
  }, [])

  if (loading) {
    return (
    <>
      <div className="loader_bg">
        <h6>Загрузка...</h6>
        <div className='loader'></div>
      </div>
    </>
    )
  }

  console.log(data)

  return (
    <>
      <div className="title">Посты</div>
      <div className="container">
        {data.map(p => (
          <Post userid={p.userId} id={p.id} title={p.title} body={p.body} />
        ))}
      </div>
    </>
  )
}
