import Head from 'next/head'
import Link from 'next/link'
import { useAxios } from '../service/useAxios';



export default function Home() {
  const { data } = useAxios('produtos', 'GET');
  console.log('data index', data);
  return (
    <>
     <h1>Home</h1>
     <Link href="/teste">
     <button>Listar dados</button>
     </Link>
    </>
  )
}
