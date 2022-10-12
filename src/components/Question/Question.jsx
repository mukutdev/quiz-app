import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

const Question = ({ ques , indexNo }) => {
  

  const { options, correctAnswer, question} = ques;
  const quesSplit = question.replace(/(<([^>]+)>)/gi, "");

  const [selected, setSelected] = useState();

  const rightColors = {bg : 'bg-green-600' , color : 'text-white' }
  const wrongColors = {bg : 'bg-red-600' , color : 'text-white'}


  const handleSelect = answer => {
    if (selected === answer && selected === correctAnswer) {

       return `${rightColors.bg} ${rightColors.color}`;
       
    }
    else if((selected === answer && selected !== correctAnswer) || (selected === correctAnswer)){
      return `${wrongColors.bg} ${wrongColors.color}`;
    }
   
    else if(answer === correctAnswer){
      return `${rightColors.bg} ${rightColors.color}`;
      
    } 
  
  };

  const handleCheck = answer => {
    setSelected(answer);
    if(answer === correctAnswer){
      toast.success('Wow Great Job ! Its a Right answer')
  
    }else{
      toast.error('Opps !, Wrong answer')
    }
    
  };



  return (
    <div className="bg-white my-6 p-5 rounded-sm shadow ">
      <div className="flex justify-between items-center gap-7">
      <h1 className="font-medium text-lg">
        {indexNo + 1}. {quesSplit}
      </h1>
      <span className="cursor-pointer" title="See Answer" onClick={() => toast(

        <h1 className="font-medium text-xl">Correct Answer is : <strong>{correctAnswer}</strong> </h1> ,
        {
          duration: 2000,
        }

      ) } ><FontAwesomeIcon className="bg-indigo-600 text-center p-2 text-white rounded-full text-lg" icon={faQuestionCircle} /></span>
      </div>

      <div className="grid grid-cols-2 mt-5 gap-4 justify-between">
        {
        options.map((op, index) => (
          <button
            key={index}
            onClick={() => handleCheck(op)}
            className={`
                         ${selected && handleSelect(op)}
                         h-auto
                        font-medium
                        btn
                        btn-outline
                        leading-5
                        py-2
                      
                          hover:bg-indigo-600
                          hover:text-white
                         
                          `}
                       
          > {op}
          </button>
          
        )
        )}
               <Toaster />

      </div>
    </div>
  );
};

export default Question;
