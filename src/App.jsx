import { useLoaderData } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import CoffeeCard from './components/CoffeeCard'

function App() {

    const coffees = useLoaderData()
  console.log(coffees)
  return (
    <body className='max-w-5xl mx-auto'>
     <div className='py-10'>
     <Navbar></Navbar>
     </div>
   <div className='max-w-4xl mx-auto mt-11 grid grid-cols-2 gap-6 justify-between items-center '>
   {
      coffees.map(coffee => 
      <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
     }
   </div>
     
    </body>
  )
}

export default App
