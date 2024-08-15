import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components'


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'] )
  const onAddCategory = (newCategory) =>{

    if (categories.includes(newCategory)) return;
    
    setCategories( [newCategory ,...categories]  )
  }
  
  return (
    <>
      <h1>GiftExpertApp</h1>

      {/* Input */}
      <AddCategory 
        /* setCategories={setCategories}  */
        onNewCategory= {event => onAddCategory(event)}
      />


      

      {/* Listado de Gif*/}

        { 
          categories.map( category =>
            <GifGrid key= {category} category = {category} />
          )
        }
        {/* <li>ABC</li> */}
      
    </>
  )
}
