import React, { useState } from 'react';
import {AppRouter, AppRouterProps} from './router';


const App = () => {
    let elements = <div/>;
    //tests whether mobile or not
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        //is mobile
        elements = <div>mobile</div>;
    } else {
        //is not mobile
        elements = <div>not mobile</div>;
    }


    let [theme, setTheme] = useState("dark");

    return (
    <>
        <AppRouter theme={theme} setTheme={setTheme}/>
        {elements}
    </>
)
};


export default App;