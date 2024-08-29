import React, { useEffect, useState } from 'react';
import { suggestionApi } from './const';

const useSuggestion = ({obj}) => {
   
    const[result , setResult] = useState([]);



    const fetchData = async () =>
    {
          try{
              const data = await fetch(suggestionApi+obj);
              if(!data.ok)
              {
                throw new Error("something went wrong during fetching", )
              }

              const dataJson  = await data.json();
              setResult(dataJson);
          }
          catch(error)
          {
            console.log('I am in catch', error.message);
          }
    }


     
    useEffect( () =>
    {
       fetchData();
    }, [obj]);


    return result;

}

export default useSuggestion