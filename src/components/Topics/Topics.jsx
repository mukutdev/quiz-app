import React from "react";
import { useLoaderData } from "react-router-dom";
import Hero from "../Hero/Hero";
import SingleTopic from "../SingleTopic/SingleTopic";

const Topics = () => {
    const quizData = useLoaderData()
    const quizDep = quizData.data
   
  return (
    <div>
         <Hero></Hero>

         <div className="container mx-auto mt-20" id="quiz-area">
             <h2 className="text-center text-3xl font-bold">Select Quiz Department </h2>
             <div className="grid grid-cols-2 justify-center gap-10 my-20">
                 {
                   quizDep.map(quiz => <SingleTopic 
                    key={quiz.id}
                    quiz={quiz}
                    ></SingleTopic>)
                 }
             </div>
         </div>
    </div>
  );
};

export default Topics;
