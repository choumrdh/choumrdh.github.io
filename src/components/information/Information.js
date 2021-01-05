import React from "react";

function Information() {
  return (

      <div className="card">
        <div className="row">
          <div className="col">
            <div className="card-header text-center bg-dark text-white">
              <h3>Skillset and Contact Info</h3>
            </div>
          </div>
          <div className="card-body col">
            <ul className="list-group inline-block">
              <li className="list-group-item list-group-item-primary">
                <b>Languages:</b> JavaScript, HTML, CSS, SQL
              </li>
              <li className="list-group-item list-group-item-primary">
                <b>Applications: </b>Visual Studio Code, Git, MongoDB, MySQL
              </li>
              <li className="list-group-item list-group-item-primary"> 
                  <b>Libraries:</b> Bootstrap, UI Kit, Material-Ui, jQuery, Moment.js, Node.js, Express.js, Sequelize, Mongoose, Handlebars.js, React.js
              </li>
              <li className="list-group-item">
                <b>Email:</b>m.w.chou21@gmail.com
              </li>
              <li className="list-group-item">
                <b>Phone Number:</b>480-330-5011
              </li>
            </ul>
          </div>
        </div>
      </div>

  );
}

export default Information;
