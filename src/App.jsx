import axios from 'axios'
import { useState, useEffect } from 'react'
import './style/App.css'
import Pagination from './Pagination'
export default function App() {

  const [data, setdata] = useState([])
  const [loading, setLoading] = useState(true);

  const url = 'https://jsonplaceholder.typicode.com/posts'
  // const url = 'http://localhost:3000/api/data' // попытка подключить свой сервер

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

  return (
    <>
      <div className="title">Посты</div>
      <Pagination items={data} />
    </>
  )
}
