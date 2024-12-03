import { Suspense, useState } from 'react'
import { lazy } from 'react'
import { Routes,Route,BrowserRouter } from "react-router-dom"
import { Loader } from './components/loader'
const Home = lazy(() => import('./pages/homePage'));
const AllTables = lazy(() => import('./pages/AllTables'));
const Search = lazy(() => import('./components/search'));


function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/getAllTables' element={<AllTables/>}/>
       {/* <Route path='/getSearch' element={<Search/>}/>  */}
      </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
