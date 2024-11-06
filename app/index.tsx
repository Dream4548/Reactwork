import React from "react";
import Userinfo from './Userinfo';
import { Fatname,Motname,Age,TestCount } from "./Sumfunc";
const App=()=>{
    return(
        <div>SUP BOI
           <Userinfo />
           <Fatname />
           <Motname />
           <Age age={30} year={2516} />
           <TestCount />
        </div>
    );
}
export default App;