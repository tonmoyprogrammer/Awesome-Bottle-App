import Bottles from './Components/bottles/bottles';
import { Suspense } from 'react';
import './App.css'


const getPromise = fetch('./bottles.json')
  .then(res => res.json());

function App() {
const getPromiseBottle = getPromise;

console.log(getPromiseBottle)
  return (
    <>
  <Suspense fallback={<p>Data is loading..................</p>}>
    <Bottles bottles={getPromiseBottle}></Bottles>
  </Suspense>
     
    </>
  )
}

export default App
