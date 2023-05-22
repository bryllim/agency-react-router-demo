import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import About from './About';
import Contact from './Contact';
import NoPage from './NoPage';
import Layout from './Layout';

function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Index;