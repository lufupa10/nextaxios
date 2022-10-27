import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState, useMemo } from 'react'
import { useAxios } from '../service/useAxios'
import styles from '../styles/Home.module.css'


export default function Teste() {

  const { data } = useAxios('testeme', 'GET');
 console.log('data', data)
  return (
    <>
    <h1>O MUNDO</h1>
   </>
  )
}