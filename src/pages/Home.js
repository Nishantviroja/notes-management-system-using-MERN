import React from "react";
import "./Home.css";
import Nishant from '../Images/1.jpg';
import Pratham from '../Images/2.jpg';
import Radhika from '../Images/3.jpg';

export const Home = (props) => {
  return (
    <>
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col">
            <img src={require("../Images/svg2.svg").default} />
          </div>
          <div className="col d-flex flex-column align-items-center">
            <h2 className="text-primary">What Is SkYNOTE</h2>

            <p className="p-tag">
              SkYNOTE taking is a combination of techniques that allow you to
              take and store your notes electronically. Most think of digital
              note taking as simply typing notes, but with digital handwriting
              apps and software such as Notud you can also handwrite, store, and
              share your digital notes.
            </p>
            <span>
              <br></br>
            </span>
            <p>
              By definition, note taking is nothing more than recording
              information captured from another source. While this can be done
              on paper, there are benefits to having access to your notes online
              including better organisation, increased security, more
              flexibility and improved shareability.
            </p>
            <span>
              <br></br>
            </span>
            <p>
              With SKYNotE you can create notes containing texts, images with
              footnotes, voice recordings, and music. Moreover, you can share
              your notes easily to SNS. Previously made any memos from SKYNotE
              and Memo also can be imported into Samsung Notes.
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5" data-aos="fade-up">
        <div className="row pt-7">
          <div className="col d-flex flex-column align-items-center">
            <h2 className="text-primary">WHat is Mern????</h2>
            <p className="p-tag">
              MERN Stack: MERN Stack is a Javascript Stack that is used for
              easier and faster deployment of full-stack web applications. MERN
              Stack comprises of 4 technologies namely: MongoDB, Express, React
              and Node.js. It is designed to make the development process
              smoother and easier.
            </p>
            <span>
              <br></br>
            </span>
            <p>
              Let’s start with MongoDB, the document database at the root of the
              MERN stack. MongoDB was designed to store JSON data natively (it
              technically uses a binary version of JSON called BSON), and
              everything from its command line interface to its query language
              (MQL, or MongoDB Query Language) is built on JSON and JavaScript.
            </p>
            <span>
              <br></br>
            </span>
            <p>
              MongoDB works extremely well with Node.js, and makes storing,
              manipulating, and representing JSON data at every tier of your
              application incredibly easy. For cloud-native applications,
              MongoDB Atlas makes it even easier, by giving you an auto-scaling
              MongoDB cluster on the cloud provider of your choice, as easy as a
              few button clicks.
            </p>
          </div>
          <div className="col d-flex justify-content-center ">
            <img src={require("../Images/svg1.svg").default} />
          </div>
        </div>
      </div>
      <div className="container  mt-3" data-aos="fade-up">
      <h2 className="text-primary mb-3">Team PNR</h2>
         <div className="row  d-flex justify-content-center">
      <div className="col-md-3 "> 
            <div className="card my-3 border border-1 border-secondary"> 
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img class="img-fluid" src={Pratham} />
   
  </div>
  <div class="card-footer">
    <h6 class="card-title text-center fw-bold">Pratham Pathak</h6>
    <h6 class="card-title text-center text-primary">20BT04040</h6>
    
     </div>
            </div>
           
        </div>

        <div className="col-md-3"> 
            <div className="card my-3 border border-1 border-secondary"> 
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img class="img-fluid" src={Nishant} />
   
  </div>
  <div class="card-footer">
    <h6 class="card-title text-center fw-bold">Nishant Viroja</h6>
    <h6 class="card-title text-center text-primary">20BT04052</h6>
  </div>
            </div>
           
        </div>

        <div className="col-md-3"> 
            <div className="card my-3 border border-1 border-secondary"> 
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img class="img-fluid" src={Radhika} />
    
  </div>
  <div class="card-footer">
    <h6 class="card-title text-center fw-bold">Radhika Meghani</h6>
    <h6 class="card-title text-center text-primary">20BT04022</h6>
    
  </div>
            </div>
           
        </div>
        </div>
      </div>
    </>
  );
};
