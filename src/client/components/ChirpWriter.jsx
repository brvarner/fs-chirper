import React from "react";

const ChirpWriter = props => {
    // ChirpWriter is another card that holds two inputs,
    // a username input and a text area.
  return (
    <>
      <div id="chirp-writer" className="col-3 mh-50 d-inline-block">
        {/* Setting up username and input card*/}
        <div className="card border border-light col 3 shadow p-3 mb-5 bg-white rounded">
          <div className="card-body">
            {/* Username div */}
            <div>
              <input
                placeholder="Username"
                value={props.username}
                onChange={props.handleUsernameChange}
                className="form-control"
              />
            </div>
            {/* Textarea div */}
            <div>
              <textarea
                className="form-control my-3"
                id="textAreaExample"
                rows="4"
                placeholder="Say Something!"
                value={props.newChirp}
                onChange={props.handleChirpChange}
              ></textarea>
            </div>
            {/* Button to send Chirp, which sets the global 
            values of username and NewChirp */}
            <button onClick={props.handleClick} className="btn btn-primary">
              Send Chirp!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChirpWriter;