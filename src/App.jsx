import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';

import MainContainer from '@Pages/Main/MainContainer';
import PageWrapper from "@Pages/PageWrapper/PageWrapper";
import News from "@Pages/Admin/News";

const App = () => {
    const location = useLocation()
    return (
        <Routes >
            <Route path={'/'} element={<PageWrapper slider={location.pathname === '/'}/>}>
                <Route index element={<MainContainer />}/>
                <Route path={'admin'} element={<News />}/>
            </Route>
        </Routes>
    );
};

export default App;
