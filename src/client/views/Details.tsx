import * as React from 'react';
import type { IChirp } from '../utils'
import { useParams, Link } from 'react-router-dom';

const Details: React.FC<DetailsProps> = props => {

	const { chirpid } = useParams();

	const [chirp, setChirp] = React.useState<IChirp>(null);

	React.useEffect(() => {
		(async () => {
			const res = await fetch(`/api/chirps/${chirpid}`);
			if (res.ok) {
				const chirp = await res.json();
				setChirp(chirp);
			}
		})()
	}, [])

	return (
		<main className="container">
			<h1 className="text-center">Details for Chirp {chirpid}</h1>
			<section className="row justify-content-center my-2">
				<div className="col-md-12">
					<div className="card">
						<div className="card-body">
							<h4 className="card-title">@User {chirp?.userid}</h4>
							<p className="card-text">{chirp?.content}</p>
						</div>
						<div className="card-footer">
							<span className="text-muted">{chirp?._created}</span>
						</div>
						<div className="d-flex justify-content-between">
							<Link className="btn btn-outline-danger" to='/'>Go Back</Link>
							<Link className="btn btn-outline-info" to={`/admin/${chirpid}`}>Admin</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

interface DetailsProps { }

export default Details;