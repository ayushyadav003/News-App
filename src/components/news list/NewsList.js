import React, { useEffect, useState } from 'react'
import axios from 'axios';
import News from './NewsBody/News'
import './News.css'


export default function NewsList({ style }) {

    const[news, setNews] = useState([]);
    const[click,setClick]= useState(false);
    const[detail,setDetail]= useState(null);
    
    useEffect(()=>{
      const key = '6dbb2b7cebf84b889c131d0df72ff13d'
      const loadnews1 = async ()=>{
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`)
      let data = response.data.articles
      console.log(data)
      setNews(data)
      }
      loadnews1();
  },[])

  const onCardClick = async (i)=>{
    const key = '6dbb2b7cebf84b889c131d0df72ff13d'
    setClick(!click)
    setDetail(null)
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}/${i}`)
  }
  return (
    <div className='newslist'>
        <div className={style?'newsContainer':'newsContainer2'}>
        {
          news?  news.map((data, i) =>
                  <div key={i} className={style?'newsCard':'newsCard2'} onClick={()=>{onCardClick(data.i)}}>
                      <div className='title'>{data.title}</div>
                 
                      <div style={{marginTop:"auto"}}>
                      <div style={{display:"flex",marginTop:"auto"}}>
                        <p className='NewsDT' >{data.author}</p>
                        <p className='NewsDT' >---{data.publishedAt}</p>
                      </div>
                        <img className={style?'Newsimage':'Newsimage2'}alt="" src={data.urlToImage} />
                      </div>  
                  </div>               
            )
            : <p>Loading...</p>
        }   
        </div>
        {
         click?  <div>
            {  
              detail ? <News  title={detail.title} body={detail.body}/> : null
            } 
            </div> : null
        }
    </div>
  )
}
