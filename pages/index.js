import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState, useMemo } from 'react'
import { useAxios } from '../service/useAxios'
import styles from '../styles/Home.module.css'


export default function Home() {

  const { data } = useAxios('https://5e4f6bd143b2b200142a36de.mockapi.io/testeme', 'GET');

  return (
    <>
    <ul>
        {data?.map((e)=> <li key={e.id}>{e.name}</li>)}
    </ul>
   </>
  )
}
