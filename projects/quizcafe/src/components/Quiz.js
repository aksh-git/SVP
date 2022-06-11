import React, { useEffect, useState } from 'react'
import '../style/Quiz.css'
import { FiSearch } from 'react-icons/fi'
import CustomSection from './CustomSection'

function Quiz() {
  //data by category
  const [csdata, setcsdata] = useState([])
  
  return (
    <div className="container">
      <div className="q-menu">
        <div className="header-badge">
          <span className='txt heading'>Explore Topics</span>
        </div> 
        <div className='search-bar'>
          <input type="search" placeholder='Find quiz by topic, domain........' />
          <div><div><FiSearch/></div></div>
        </div>
      </div>
      <div className='content'>
        {csdata.length === 0 && <div style={{padding:'1rem',fontSize:'2.3rem'}}>
          <center>Error : No data found</center></div>} 
        {csdata.length > 0 && csdata.map((cdata)=>{
            console.log(cdata);
            return(
              <CustomSection data={cdata} />
            )
        })}
      </div>
    </div>
  )
}

export default Quiz