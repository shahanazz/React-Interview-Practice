import React, { useState } from 'react';
import './Accordian.css';
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 
import { items } from '../../Constants/items';


export const Accordian = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) =>{
        setOpenIndex(openIndex === index ? null : index);

        // if(openIndex === index){
        //     setOpenIndex(null);
        // }else{
        //     setOpenIndex(index);
        // }
    }    

  return (
    <div>
      <h1>Accordian</h1>
      { !items || items.length === 0 ? (
        <p>No items to display</p>
      ) : 
      <div className='accordion'>
      {items.map((item , index) =>{
        return <div className='accordion-item' key={index}>
            <button
            className='accordion-title'
            onClick={() => handleToggle(index)}
            >
                {item.title}
                {openIndex === index ? <FaChevronUp className='right'/> : <FaChevronDown className='right'/> }      
            </button>

            {openIndex === index && 
            <div className='accordion-content'>
                {item.content}
            </div>
            } 
        </div>
        
      })}
      </div>
}
    </div>
  )
}

