import React from 'react';
import "../assets/css/contain.css"
export default function 
() {
  return (
    <div className='contain'>
        <h2 className='title__list'>There are 4 Todo</h2>
        <ul className='blockItems'>
            <li className='item'> 
                <p>Buy Milk </p>
                    <div className='btn__edit'>
                        <button>update</button>
                        <button>complete</button>
                        <button>delete</button>
                    </div>
            </li>
            <li className='item'> 
                <p>Buy Milk </p>
                    <div className='btn__edit'>
                        <button>update</button>
                        <button>complete</button>
                        <button>delete</button>
                    </div>
            </li>
            <li className='item'> 
                <p>Buy Milk </p>
                    <div className='btn__edit'>
                        <button>update</button>
                        <button>complete</button>
                        <button>delete</button>
                    </div>
            </li>
        </ul>
    </div>
  )
}
