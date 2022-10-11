import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

const Statistic = () => {

    const quizStat = useLoaderData()
    console.log(quizStat.data);
    const quizData = quizStat.data
    console.log(name);
    const data = [
        {
          name: quizData[0].name,
         quiz: quizData[0].total,
       
        },
        {
            name: quizData[1].name,
            quiz: quizData[1].total,
      
        },
        {
            name: quizData[2].name,
            quiz: quizData[2].total,
      
        },
        {
            name: quizData[3].name,
            quiz: quizData[3].total,
        },
        
      ];

    return (
        <div className='container mx-auto my-6'>
            <h1 className='font-semibold text-center text-3xl'>Quiz Stats</h1>

            <div className='w-2/3 mx-auto my-8 shadow-lg rounded p-5'>
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
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="quiz" fill="#8884d8" />
                   
                      </BarChart>
                      
                    }
                    <h1 className='text-center'>Quiz Chart</h1>
            </div>
        </div>
        
    );
};

export default Statistic;