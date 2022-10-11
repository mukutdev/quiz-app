import React, { useState } from 'react';

const Question = ({ques}) => {
    // const [questionNumber , setQuestionNumber] = useState(1)
    // console.log(ques);
    const {id , options , correctAnswer , question} = ques
    const quesSplit = question.replace( /(<([^>]+)>)/ig, '');
    let count = 0
    // console.log(options);
    // setQuestionNumber((count)=> count + 1)

    // const numberIncrease =()=>{
    //     setQuestionNumber(questionNumber + 1)
    // }
    // console.log(questionNumber);
    return (
        <div className='bg-white my-6 p-5 rounded-sm shadow'>
            <h1 className='font-medium text-lg'>{} {quesSplit}</h1>

             <div className='grid grid-cols-2 mt-5 gap-4 justify-between'>
                {
                    options.map((op , index) => <button
                        key={index}
                        className='
          
                        font-medium
                        btn
                         bg-slate-100
                          text-slate-700
                          hover:bg-indigo-600
                          hover:text-white'
                        
                        > {op} </button>)
                }
             </div>
        </div>
    );
};

export default Question;