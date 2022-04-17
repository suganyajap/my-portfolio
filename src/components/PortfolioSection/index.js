import React from "react";
import "./Portfolio.css";
import * as SiIcons from "react-icons/si";
import meal from "../../Images/meal.JPG";
import movie from "../../Images/movie.JPG";
import ecommerce from "../../Images/ecommerce.JPG";
import usermanagement from "../../Images/usermanagement.JPG";

function Portfolio() {
  return (
    <div id="portfolio">
      <h1 className="logo-text">Portfolio</h1>
      <div className="allProjects">
        <div className="card" data-aos="zoom-in-up">
          <img src={ecommerce} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">E-Commerce Application</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Shopify</div>
            <div className="img-description">
              <p>
                User can filter products by Brand,Product_type,Price range using
                filter bars.{" "}
              </p>
              <p>
                Implemented this application with complete authentication system
                along with varoius roles(Admin,Client)
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/suganyajap/e-commerce-frontend"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/suganyajap/e-commerce-backend"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://my-e-commerce-app1.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img
            src={movie}
            className="card-img-top"
            alt="..."
          />
          <div className="title_heading">
            <h5 className="card-title">Movie Application</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">moviezoid</div>
            <div className="img-description">
              <p>
              Mern stack movie app with login authentication
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/suganyajap/react-movie"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/suganyajap/movie-node"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://my-moviee-app1.netlify.app/login"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={meal} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Meal Application</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Meal App</div>
            <div className="img-description">
              
              <p>
              A simple Mern stack Meal App
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/suganyajap/meal-app-react"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/suganyajap/meal-app-node"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://my-meals-app1.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={usermanagement} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">User Management</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">user-Zoid</div>
            <div className="img-description">
             <p> 
            A Simple Mern Stack application to handle Crud Operations  for managing Users
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/suganyajap/user-management-frontend"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/suganyajap/user-management-backend"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://my-user-management.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;