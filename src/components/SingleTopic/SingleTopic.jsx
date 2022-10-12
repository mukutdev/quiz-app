import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const SingleTopic = ({ quiz }) => {
  const { id, name, total, logo } = quiz;
  return (
    <div className="shadow-lg rounded border p-4  md:mx-0 mx-4">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="bg-slate-100 md:w-auto w-full h-72 ">
          <img
            className="h-72  md:w-auto w-full md:object-cover  rounded"
            src={logo}
            alt={name}
          />
        </div>
        <div className="md:ml-28 my-4 ">
          <h2 className="text-3xl font-semibold tracking-widest ">{name}</h2>
          <h3 className="text-base font-semibold tracking-widest my-4">
            Total Quiz : {total}
          </h3>
          <Link to={`/topics/${id}`}>
            <button className="btn btn-primary">
              {" "}
              Start Project{" "}
              <FontAwesomeIcon className="ml-2" icon={faChevronRight} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleTopic;
