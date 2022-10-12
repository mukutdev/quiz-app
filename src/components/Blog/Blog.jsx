import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto my-6">
      <h2 className="font-semibold text-center text-3xl">Blogs </h2>
      <div className="w-2/3 mx-auto my-8 shadow-lg rounded p-5">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-4"
        >
              <input type="checkbox" /> 

          <div className="collapse-title text-xl font-medium text-indigo-600">
            What is the purpose of react  router ?
          </div>
          <div className="collapse-content">
            <p className="font-medium">ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
              <input type="checkbox" /> 

          <div className="collapse-title text-xl font-medium text-indigo-600">
            What is the purpose of react  router ?
          </div>
          <div className="collapse-content">
            <p className="font-medium">ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
