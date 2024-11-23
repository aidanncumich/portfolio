/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/code.jpeg";

const imageAltText = "image of code on a computer screen";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Client-side Instagram Clone",
    description:
      "Built an Instagram client-side clone using REST APIs, React, JavaScript, and Python. Users can login, like, comment, and post very similarly to Instagram itself.",
    url: "https://github.com/aidanncumich",
  },
  {
    title: "MapReduce Framework",
    description:
      "Implemented a MapReduce framework in Python that executes MapReduce programs with distributed processing on a cluster of computers, using distributed systems, fault tolerance, OS-provided threads and processes, and networking sockets.",
    url: "https://github.com/aidanncumich",
  },
  {
    title: "SillyQL Database",
    description:
      "Recreated a SQL database in C++ that follows basic table commands including CREATE, JOIN, GENERATE INDEX, DELETE FROM, INSERT INTO, REMOVE, and QUIT.",
    url: "https://github.com/aidanncumich",
  },
  {
    title: "Student Post Classifier",
    description:
      "Developed a student forum post classifier in C++ using natural language processing and machine learning techniques. Trained the classifier using the bag-of-words model to classify the posts into categories using labels.",
    url: "https://github.com/aidanncumich",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
