import { useLoaderData } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'

function App() {

  const loadedCoffee = useLoaderData()

  const [coffees, setCoffees]= useState(loadedCoffee)
 
  return (
    <body className='max-w-5xl mx-auto'>
     <div className='py-10'>
     <Navbar></Navbar>
     </div>
     <h2>Number of Coffee: {coffees.length}</h2>
   <div className='max-w-4xl mx-auto mt-11 grid grid-cols-2 gap-6 justify-between items-center '>
   {
      coffees.map(coffee => 
      <CoffeeCard key={coffee._id} coffee={coffee} setCoffees={setCoffees} coffees={coffees}>

      </CoffeeCard>)
     }
   </div>
     
    </body>
  )
}

export default App
