import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const QuizElement = () => {
  const quizData = useLoaderData();
  const { name, total, logo, questions } = quizData.data;

  return (
    <div className="container mx-auto mt-20">
      <div className="md:w-1/2 md:mx-auto mx-6 rounded-sm shadow-lg p-5">
        <div className="bg-slate-100 w-40 h-40 mx-auto my-4">
          <img className=" rounded " src={logo} alt="" />
        </div>
        <h2 className="text-center text-indigo-600 capitalize text-2xl font-bold">
          {name} Important Question
        </h2>
        <h3 className="text-center my-4 font-semibold text-base">
          Total Quiz : {total}
        </h3>
      </div>

      <div className="md:w-1/2 md:mx-auto rounded-sm shadow-lg bg-slate-100 p-5 my-8">
        <div>
          {questions.map((ques, index) => (
            <Question key={ques.id} ques={ques} indexNo={index}></Question>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizElement;
