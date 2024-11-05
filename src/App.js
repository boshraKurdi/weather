import Form from "./components/Form";
import Weather from "./components/Weather";
import { useState } from "react";
import { context } from "./hooks/Context";
import Loading from "./components/Loading/Loading";
// https://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
function App() {
  const [InputI , setInput] = useState({city : "" , loading:false});
  const [satas , setS] = useState({
    tempreature: '',
    main: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    wind: '' ,
    error: ''
  })
  return (
    <div className="App">
      <div className="container">
        <context.Provider value={{InputI , setInput , satas , setS}}>
          <Form />
          {InputI.loading ? <Loading /> : 
          <Weather wind={satas.wind} tempreature={satas.tempreature} main={satas.main} city={satas.city} country={satas.country} humidity={satas.humidity} description={satas.description} error={satas.error}/>}
        </context.Provider>
      </div>
    </div>
  );
}

export default App;
