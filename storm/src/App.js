import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Main  from './components/pageone/main';
import  Galery  from './components/pagetwo/main';
import Concerts from './components/pagetwo/concerts/index'
import Festivals from './components/pagetwo/festivals/index'
import Fashion from './components/pagetwo/fashion/index'
import Corporativs from './components/pagetwo/corporativs/index'



function App() {
return (
<div >




<BrowserRouter>
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="galery" element={<Galery />} />
        <Route path="festivals" element={<Festivals />} />
        <Route path="fashion" element={<Fashion />} />
        <Route path="concerts" element={<Concerts />} />
        <Route path="corporate" element={<Corporativs />} />

      </Routes>
    </BrowserRouter>
</div>
)
}
export default App;









