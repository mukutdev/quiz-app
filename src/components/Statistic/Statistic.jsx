import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from "recharts";


const Statistic = () => {

    const quizStat = useLoaderData()
    const quizData = quizStat.data

    return (
        <div className='container mx-auto my-6'>
            <h1 className='font-semibold text-center text-3xl'>Quiz Stats</h1>

            <div className='md:w-2/3 mx-auto my-8 shadow-lg rounded md:p-5 py-3'>
                
                    {
                       <ResponsiveContainer width= {'100%'}
                       height={300}>
                      <BarChart
                    className='md:mx-auto '
                    
                    data={quizData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#4506CB" />
               
                  </BarChart>
                  </ResponsiveContainer>
                  
                }
                    
               
            </div>
        </div>
        
    );
};

export default Statistic;