
import React,{useState,useEffect} from "react";
import './../styles/App.css';

const indian_cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Ahmedabad",
  "Pune",
  "Surat",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Pimpri-Chinchwad",
  "Patna",
  "Vadodara",
  "Ghaziabad",
  "Ludhiana",
  "Agra",
  "Nashik",
  "Faridabad",
  "Meerut",
  "Rajkot",
  "Kalyan-Dombivali",
  "Vasai-Virar",
  "Varanasi",
  "Srinagar",
  "Aurangabad",
  "Dhanbad",
  "Amritsar",
  "Navi Mumbai",
  "Allahabad",
  "Ranchi",
  "Howrah",
  "Jabalpur",
  "Gwalior",
  "Vijayawada",
  "Jodhpur",
  "Madurai",
  "Raipur",
  "Kota",
  "Chandigarh",
  "Guwahati",
  "Solapur",
  "Hubli-Dharwad",
  "Tiruchirappalli",
  "Bareilly"
 
]

const App = () => {
  const [cities,setCities]=useState();
const [search,setSearch]=useState("");
const [click,setClick]=useState(false);

useEffect(()=>{

  search && setCities(indian_cities.filter(city =>city.toLowerCase().includes(search.trim().toLocaleLowerCase())))
  },[search]);

  function updateSearch(city){
    setSearch(city);
    setClick(true);
    }

  return (
    <div>
        <h1>Search cities of India:</h1>
        <form>
          <input type="text" 
          onChange={e =>{
            setSearch(e.target.value) 
            setClick(false)
           }} 
            value={search}  placeholder="Search..."/>
        </form>

        { 
        !click &&
           <ul>
           {cities && cities.map((city,index)=>(
           <li key={index} onClick={()=>updateSearch(city)}>{city}</li>
           )
           )}
         </ul>
        }
       
    </div>
  )
}

export default App;
