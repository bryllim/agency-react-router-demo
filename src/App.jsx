import {useEffect} from 'react';
import Index from './pages/Index';
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(()=>{
    AOS.init();
  }, []);

  return (
    <Index />
  )
}

export default App
