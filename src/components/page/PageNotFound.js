import React from "react";

const PageNotFound = ()=>{
    return(
        <div className="container mb-5">
        <div className="card">
          <div className="row">
            <div className="col">
              <div className="card-header text-center bg-dark text-white">
                <h3>404!!</h3>
              </div>
            </div>
            <div className="card-body col text-center">
            <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSD2kLTKLbHm5W7i-5Sg_7H-6-nGR-_Cb5B5Q&usqp=CAU"
                  className="col-12 col-md-3"
                  alt="Cat"
                />
              <h3 className="card-text">
                
               The page you are looking for can't be found.....
              </h3>
  
            </div>
          </div>
        </div>
      </div>
    )
};

export default PageNotFound;