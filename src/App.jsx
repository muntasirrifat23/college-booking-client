
import './App.css'
import Admission from './Component/Addmission/Admission'
 import College from './Component/College/College'
import Home from './Component/Home/Home'
import MyCollege from './Component/MyCollege/MyCollege'

function App() {

  return (
   <div className='mt-32 text-black bg-white'>
   <Home></Home>
   <College></College>
   <Admission></Admission>
   <MyCollege></MyCollege>
   </div>
  )
}

export default App
