import React from 'react';
import './App.css';
        import Clickcounter from './Component/ClickCounter';
        import EvenOddApp from './Component/EvenOddApp';
        import FruitsCounter from './Component/FruitsCounter';
        import Login from './Component/LoginApp';
        import ShowHide from './Component/ShowHideApp';                   
        import Speedometer from './Component/SpeedometerApp';
        import Welcome from './Component/WelcomeApp';

const App = () =>{
return (
        <div>
    
            <Clickcounter/>
            <Speedometer />
            <FruitsCounter />
            <Welcome />
            <ShowHide />
            <EvenOddApp />
            <Login/>

        </div>
            

);
}
export default App;


