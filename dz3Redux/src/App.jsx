import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const CounterComponent = () => {
  const counter = useSelector((state)=> state.counter)
  console.log(counter);
  return (

      <span>{counter}</span>
  )
}

const ButtonComponent = ({sign}) => {
  const dispatch = useDispatch()

  const handleClick = ()=> {
    if(sign === '+' ){
      dispatch({type: 'INCREMENT'}) 
    }else if (sign === '-'){
      dispatch({type: "DECREMENT"})
    }
  }
  
  return (
    <button onClick={handleClick}>{sign}</button>
  )
}

const ContainerComponent = () => {
  return (
    <div>
      <CounterComponent />
    </div>
  )
}

export const App = () => {
   return (
    <div>
       <ButtonComponent sign="-"/>
      <ContainerComponent />
      <ButtonComponent sign="+"/>
    </div>
   
    
      
   )
}


