import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Search = ()=>{
    const [text,setText] = useState('cat');
    const [debounceText, setDebounceText] = useState(text);
    const [result ,setResult]= useState([]);

   useEffect(()=>{
     const time = setTimeout(()=>{
       setDebounceText(text)
     },500)

     return ()=>{
      clearTimeout(time)
    }
   },[text])

   useEffect(()=>{
       const search = async ()=>{
          const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
            params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: debounceText,
              },
           })
          setResult(data.query.search)
          } 

          if(debounceText){
            search() 
          }
            
   },[debounceText])

   

   const searchResult = result.map((result)=>{
 
    return (
        <div key={result.pageid} className="item">
          <div className="right floated content">
            <a
              className="ui button"
              href={`https://en.wikipedia.org?curid=${result.pageid}`}
            >
              Go
            </a>
          </div>
          <div className="content">
            <div className="header">{result.title}</div>
            <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
          </div>
        </div>
      );
   })

    return(
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Search</label>
                    <input
                    value={text}
                    onChange={(e)=>{setText(e.target.value)}}
                    className='input'
                    />
                   
                </div>
            </div>
            <div className='ui celled list'>{searchResult}</div>
        </div>
    )
}

export default Search;