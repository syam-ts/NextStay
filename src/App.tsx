import {
  BrowserRouter,
  Routes, 
  Route
} from 'react-router-dom'
import Home from './page/Home.tsx'
import List from './list/List.tsx'
import Hotel from './hotel/Hotel.tsx'


const App = () => {

  return (
   <BrowserRouter>
     <Routes> 
       <Route path="/" element={ <Home /> } />
       <Route path="/hotels" element={ <List /> } />
       <Route path="/hotels/:id" element={ <Hotel /> } />
     </Routes>
   </BrowserRouter>
  )
}



export default App