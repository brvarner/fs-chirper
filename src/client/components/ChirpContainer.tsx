import * as React from "react";
import { Link } from 'react-router-dom'
import type { IChirp } from "../utils"

const ChirpContainer: React.FC<ChirpContainerProps> = (props) => {

  const [chirps, setChirps] = React.useState<IChirp[]>([])

  React.useEffect(() => {
    (async () => {
      const res = await fetch('/api/chirps');
      if (res.ok) {
        const chirps = await res.json();
        setChirps(chirps);
      }
    })()
  }, [])

  return (
    // Chirp Container is its own card with a nested list group
    <div
      className="card col-8 shadow p-3 mb-5 bg-white rounded"
      id="chirp-container"
    >
      <ul className="list-group list-group-flush">
        {chirps.map((chirp, index) =>
          <Link key={index} to={`/details/${chirp.id}`} style={{ textDecoration: 'none' }}>
            <li className="list-group-item" >
              <div className="card-body">
                <h5 className="card-title">@User {chirp.userid}</h5>
                <p className="card-text fs-3">
                  {chirp.content}
                </p>
                <p className="text-muted">{chirp._created.toString()}</p>
              </div>
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
};

interface ChirpContainerProps {
}

export default ChirpContainer;