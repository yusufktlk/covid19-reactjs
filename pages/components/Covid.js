import React, { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'
import axios from 'axios';



export default function Covid() {

    const [data,setData] = useState();
    const [date,setDate] = useState("");

    useEffect(()=>{
        axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
        .then(res => setData(res.data[date]))
        .catch(err => console.log(err))
    },[data,date])

    
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h2>Türkiye COVID-19 Verileri</h2>
            <input className={styles.input} type='text' placeholder='GG/AA/YY' onChange={e =>setDate(e.target.value)}/>
        </div>
        <div className={styles.table}>
            <table className={styles.table} cellspacing="0" cellpadding="0">
                <thead className={styles.thead}>
                    <tr>
                        <th>Tarih</th>
                        <th>Test Sayısı</th>
                        <th>Hasta Sayısı</th>
                        <th>Ölüm sayısı</th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                        <tr>
                            <th className={data === undefined ? styles.warning : styles.success}>{data === undefined ? "Tarih Giriniz" : data.date}</th>
                            <th className={data === undefined ? styles.warning : styles.success}>{data=== undefined ? "Tarih Giriniz" : data.totalTests}</th>
                            <th className={data === undefined ? styles.warning : styles.success}>{data === undefined ? "Tarih Giriniz" : data.patients}</th>
                            <th className={data === undefined ? styles.warning : styles.success}>{data === undefined ? "Tarih Giriniz" : data.totalDeaths}</th>
                        </tr>
                </tbody>
            </table>
        </div>

        <div className={styles.not}>
            <p>Vaka Verileri Tarih Aralığı:</p>
            <p>Başlangıç:  <span>11/03/2020</span></p>
            <p>Bitiş:  <span>31/05/2022</span></p>
        </div>
    </div>
  )
}
