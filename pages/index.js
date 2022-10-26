import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'


export default function Home() {

  const [data, setData] = useState([]);

  useEffect(()=> {
    const myApi = async()=> {
      const response = await fetch('https://5e4f6bd143b2b200142a36de.mockapi.io/testeme');
      const mayReponse = await response.json();
      setData(mayReponse);
      console.log(mayReponse)
    }

    myApi();
  }, [])

  return (
    <>
      {data.map((e)=> <div key={e.id}>{e.name}</div>)}
   </>
  )
}
