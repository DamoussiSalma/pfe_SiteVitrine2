import React from "react"
import { featured } from "../../data/Data"

const FeaturedCard = () => {
  const handleOnClick = (categorie) => {
    
    
  };

  return (
    <>
      <div className='content grid5 mtop'>
        {featured.map((items, index) => (
          <div className='box' key={index}  >
            <img src={items.cover} alt='' onClick={() => handleOnClick(items.name)} />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard
