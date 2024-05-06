import React, { useState, useEffect, useRef } from 'react'
import News from './News';
import './NewsApp.css';
import { Button } from './Button';

function NewsApp() {

    const apiKey = '584b1c67d1954310b59ab2603fb12e52';

    
    const [newsList, setNewsList] = useState([]);
    const [category, setCategory] = useState("business");
    
    const APIUrl2 = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    const APIUrl = `https://newsapi.org/v2/everything?q=${category}&from=2024-01-24&sortBy=publishedAt&apiKey=${apiKey}`

    const queryInputRef = useRef();

    useEffect(() => {
       fetctData();
    }, [])

    async function fetctData() {
        try{
            const response = await fetch(APIUrl);
            const jsonData = await response.json();
            // console.log(jsonData.articles);
            setNewsList(jsonData.articles);
        }catch(e){
            console.log(e, 'error occured');
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const query = queryInputRef.current.value;
        setCategory(query);

        fetctData();
        // console.log(query);
        // console.log(category);
    }

    function handlecategories(data) {
        setCategory(data);
        fetctData();
        // console.log("ckick",data);
    }

  return (
    <div className='news-app'>
        <h1 style={{fontFamily: 'monospace', fontSize: '3rem', textAlign: 'left', marginBottom: '20px'}}>NewsWeb App</h1>
        <form onSubmit={handleSubmit}>
            <input className='query-input' placeholder='  type something for search...' type="text" ref={queryInputRef}/>
            <input className='btn-search' onClick={handleSubmit} type="submit" value="Search"/>
        </form>
        
        <div className='all-btns'>
            <p>Categories:</p>
            <Button handlecategories={handlecategories} data="Ifaa"/>
            <Button handlecategories={handlecategories} data="Fashion"/>
            <Button handlecategories={handlecategories} data="USA"/>
            <Button handlecategories={handlecategories} data="Tech"/>
            <Button handlecategories={handlecategories} data="IT"/>
            <Button handlecategories={handlecategories} data="Jobs"/>
        </div>
        

        <div className='news-cards'>
        {newsList.map((news)=> {
            if(newsList.length == 0 ){
                return;
            }
            return <News news={news} key={news.url}/>
        })}
        </div>
    </div>
  );
}

export default NewsApp;