import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { IChirp } from '../utils';


const Admin: React.FC<AdminProps> = props => {

	const { chirpid } = useParams();
	const navigate = useNavigate();

	const [content, setContent] = React.useState<string>('')

	React.useEffect(() => {
		(async () => {
			const res = await fetch(`/api/chirps/${chirpid}`);
			if (res.ok) {
				const chirp = await res.json();
				setContent(chirp.content);
			}
		})()
	}, [])

	const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		const res = await fetch(`/api/chirps/${chirpid}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({content})
		});
		if (res.ok){
			navigate(`/details/${chirpid}`)
		}
	}
	const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		const res = await fetch(`/api/chirps/${chirpid}`, {
			method: 'DELETE',
		});
		if (res.ok){
			navigate(`/`)
		}
	}

	return (
		<main className="container">
			<h1 className="text-center">Edit Chirp {chirpid}</h1>
			<section className="row justify-content-center my-2">
				<div className="col-md-8">
					<form className="form-group p-3 border border-primary rounded">
						<label htmlFor="username">Username</label>
						<input type="text" className="form-control" />
						<label htmlFor="chirp">Chirp</label>
						<textarea value={content} onChange={e => setContent(e.target.value)} rows={8} className="form-control" />
						<button onClick={handleSave} className="btn btn-success btn-block mx-auto w-25 mt-3">Save Chirp</button>
						<button onClick={handleDelete} className="btn btn-danger btn-block mx-auto w-25 mt-3">Delete Chirp</button>
					</form>
				</div>
			</section>
		</main>
	);
};

interface AdminProps { }

export default Admin;