import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

const QuizChart = ({data}) => {

    const {name , total} = data
    console.log(data);
    return (
        <div>
            <h1>this is bar</h1>
            {
                        <BarChart
                        className='mx-auto'
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={name} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={total} fill="#8884d8" />
                   
                      </BarChart>
                      
                    }
        </div>
    );
};

export default QuizChart;