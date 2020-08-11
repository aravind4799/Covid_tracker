import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchdata = async (country) => {

    let changeableurl = url;

    if(country){
        changeableurl = `${url}/countries/${country}`
    }

    try{
        const { data :{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableurl);

        return {confirmed,recovered,deaths,lastUpdate};
    }
    catch(error){

    }

}

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);
        
        const modified_data = data.map((dailydata)=>({
            confirmed:dailydata.confirmed.total,
            deaths:dailydata.deaths.total,
            date:dailydata.reportDate,
        }));
        return modified_data;
    }
    catch(error){

    }
}

export const fetchCountries = async () => {

    try{

        const {data:{countries}} = await axios.get(`${url}/countries`);


        return countries.map((country)=>country.name)
    }
    catch(error){
        console.log(error)

    }
}