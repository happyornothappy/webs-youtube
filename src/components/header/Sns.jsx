import React from 'react'

import { snsLink } from '../../data/header'
import { useLocation } from 'react-router-dom'

const Sns = () => {
    const location=useLocation();
    
  return (
    <div className='header__sns'>
                <ul>
                    {snsLink.map((sns, key) => (
                        <li key={key} className={location.pathname === sns.src ? 'active' : ''}>
                            <a href={sns.url} 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            aria-label={sns.title}>

                                <span>{sns.icon}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
  )
}

export default Sns
