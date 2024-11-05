import { useContext } from "react";
import { context } from "../hooks/Context";
import { BiSearch } from "react-icons/bi";
import { BiLocationPlus } from "react-icons/bi";
const keyApi = "ae08fadb887596f1418c04f7a65e86dc";
export default function Form(props){
    const {InputI , setInput , satas , setS} = useContext(context)
    function City(value){
        setInput({...InputI, city: value});
      }
      let GetWeather = async (event) => {
        event.preventDefault();
        try {
          setInput({...InputI , loading: true})
          const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${InputI.city}&units=metric&appid=${keyApi}`).catch((error)=>{setS({...satas , error: "Oop! not found this city"})});
          const data = await api.json()
          InputI.city ? setS({...satas , tempreature:data.main.temp , main: data.weather[0].main , city:data.name , country: data.sys.country ,humidity: data.main.humidity ,description: data.weather[0].description, wind: data.wind.speed , error : ''}) : setS({...satas , tempreature: '' , main: '' , city:'' , country: '' ,humidity: '' ,description: '' , wind: '' , error: 'please enter city and country' })
          setInput({...InputI , loading: false})  
        } catch (error) {
          setInput({...InputI , loading: false}) 
          setS({...satas , error: "Oop! not found this city"}) 
        }
      }
    return(
        <div className="search-box">
            <BiLocationPlus className="location" />
            <form onSubmit={GetWeather}>
                <input value={InputI.city} onChange={(event)=>{City(event.target.value)}} type="text" placeholder="enter city .."/>
                {/* <input value={InputI.country} onChange={(event)=>{Country(event.target.value)}} type="text" placeholder="enter country .."/> */}
                <button><BiSearch /></button>
            </form>
        </div>
    )
}