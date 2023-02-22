import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

export function Accordion({ question, answer }) {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-6">
      <div
        className="flex w-full justify-between rounded-lg px-5 py-6 text-left text-base font-medium text-amber-600 bg-[#f5f6fa] 
                                    focus:outline-none focus-visible:ring focus-visible:ring-amber-500 focus-visible:ring-opacity-75 cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <span>{question}</span>

        {!show ? (
          <ChevronDownIcon
            className=" -mr-1 h-5 w-5 text-amber-600 hover:text-amber-500"
            aria-hidden="true"
          />
        ) : (
          <ChevronUpIcon
            className=" -mr-1 h-5 w-5 text-amber-600 hover:text-amber-500"
            aria-hidden="true"
          />
        )}
      </div>

      {show && (
        <p className="px-4 pt-4 pb-2 text-sm md:text-base text-left text-gray-500 cursor-default">
          {answer}
        </p>
      )}
    </div>
  );
}

export default function Faq() {
  const initialState = [
    {
      question: "What is TrocToWork?",
      answer:
        "TrocToWork is a network of companies that exchange products and services with each other without going through the traditional banking system. Created in 2022 by 3 entrepreneurs, 20 million TrocToWork have already circulated among the 3000 companies in the network. Companies put their unused assets online (Stock, Services, Time, Storage space, etc.) in order to value them in TrocToWork.",
    },
    {
      question: "Is it legal?",
      answer: "Answer to the qquestion",
    },
    {
      question: "What types of businesses?",
      answer: "Answer to the qquestion",
    },
    {
      question: "How to ensure the quality of the companies in the network?",
      answer: "Answer to the qquestion",
    },
  ];

  return (
    <div className="mx-5">
      <div className="text md:p-auto mx-auto md:max-w-7xl md:p-7 text-left md:text-center">
        <h2 className="text-center p-5 py-18 text-4xl font-medium sm:px-16">
          Accordion Test
        </h2>

        <div className="w-full px-4 pt-6 md:pt-">
          <div className="mx-auto w-full max-w-md md:max-w-none rounded-2xl p-2">
            {initialState.map((item, index) => (
              <Accordion
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
