import React from "react";
import {fetchdata} from "./api";
import {Cards,Chart,Countrypicker} from "./components";
import styles from "./App.module.css";
import image from "./images/image.png";

class App extends React.Component{
    state = {
        data:{},
        country:"",
    }

    async componentDidMount(){
        const fetcheddata = await fetchdata();
        this.setState({data:fetcheddata})
    }

    handleCountryChange = async(country)=>{
        //console.log(country)
        const fetchedData = await fetchdata(country);

        this.setState({data:fetchedData,country:country})
    }

    render(){
        const {data,country} = this.state;
        return(

            <div className={styles.container} >
            <img src={image} className={styles.image}/>
            <Cards data={data}/>
            <Countrypicker handleCountryChange= {this.handleCountryChange}/>
            <Chart data={data} country={country}/>  
            </div>

        );
       
    }
}

export default App;