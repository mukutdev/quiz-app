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

         <div className="container mx-auto md:mt-20 mt-12" id="quiz-area">
             <h2 className="text-center md:text-3xl  text-2xl font-bold">Select Quiz Department </h2>
             <div className="grid md:grid-cols-2 md:justify-center gap-10 my-20">
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
