import React,{useContext} from 'react'
import './News.css'
import { Context } from '../../context/Context';
import Categories from './category/Categories';
import SearchBar from '../Panel/searchbar/SearchBar';


export default function NewsList() {
   
    const {search, style, news} = useContext(Context)


  const onCardClick = (i)=>{
    console.log("data", i)

  }
  
  return (
    <div className='newslist'>
      <Categories />
        <div className={style?'newsContainer':'newsContainer2'}>
        {
          news ?  news.filter( val =>{
            if( search === "" ){
              return val;
            } else if (val.title.toLowerCase().includes(search.toLowerCase())){
              return val
            }
          }).map((data, i) =>
                  <div key={i} className={style?'newsCard':'newsCard2'} onClick={()=>{onCardClick(i)}}>
                    <a style={{textDecoration:"none"}} href={data.url}>
                      <div className='title'>{data.title}</div>                 
                      <div style={{marginTop:"auto"}}>
                      <div style={{display:"flex",marginTop:"auto"}}>
                        <p className='NewsDT' >{data.author}</p>
                        <p className='NewsDT' >---{data.publishedAt}</p>
                      </div>
                        <img className={style?'Newsimage':'Newsimage2'}alt="" src={data.urlToImage} />
                      </div>  
                    </a>  
                  </div>               
            )
            : <p>Loading...</p>
        }   
        </div>
       
    </div>
  )
}
