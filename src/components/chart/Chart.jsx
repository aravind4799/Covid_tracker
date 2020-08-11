import React,{useEffect,useState} from "react";
import { fetchDailyData } from "../../api";
import {Line,Bar} from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({data : { confirmed,deaths,recovered },country}) => {
    const [dailydata,setdailydata] = useState([]);

    useEffect(()=>{
        const fetchAPI = async() => {
            setdailydata(await fetchDailyData());
        }
        
        fetchAPI();

    },[]);

    const lineChart = (
        dailydata.length ? (
            <Line
            data={{
                labels:dailydata.map(({ date })=>(date)),
                datasets:[{
                    data:dailydata.map(({confirmed})=>(confirmed)),
                    label:"Infected",
                    borderColor:"#3333ff",
                    fill:true,
                },
                {
                    data:dailydata.map(({deaths})=>(deaths)),
                    label:"Deaths",
                    borderColor:"red",
                    backgroundColor:"rgba(255,0,0,0.5)",
                    fill:true,
                }
            ],
            }}
            />) : null
            
    );


    const barChart = (
        confirmed ? 
        (<Bar
        data={{
            labels:["Infected","Recovered","Deaths"],
            datasets:[{
                label:'people',
                backgroundColor:[
                    'rgba(0,0,225,0.8)',
                    'rgba(0,225,0,0.8)',
                    'rgba(255,0,0,0.8)',
                ],
                data:[confirmed.value,recovered.value,deaths.value],
            }]

        }}
        options={{
            legend:{display:false},
            title:{display:true,text:`Current state in ${country} `},
        }}

        
        />):null
    );
    return(
        <div className={styles.container}>

            {country ? barChart: lineChart}

        </div>
    )
}

export default Chart;