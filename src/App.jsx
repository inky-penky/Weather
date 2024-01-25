import "./App.css";
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import FavouriteCities from "./Components/FavouriteCities";
import WeatherSearch from "./Components/Search";
import TimeAndLocation from "./Components/TimeAndLocation";
import TemperatureAndDetails from "./Components/TemperatureAndDetails";
import ForecastForecast from "./Components/Forecast";



function App() {
  

  return (
      <div className="max-w-screen-md px-32 py-5 mx-auto mt-4 shadow-xl bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-gray-400">
       <FavouriteCities />
       <WeatherSearch />
       <TimeAndLocation />
       <TemperatureAndDetails />
       <Forecast />
      </div>
  );
}

export default App;