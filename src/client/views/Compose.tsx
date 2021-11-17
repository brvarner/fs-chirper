import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const Compose: React.FC<ComposeProps> = props => {
	const navigate = useNavigate()
	
	const [content, setContent] = React.useState<string>('')
	

	const submitChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		const res = await fetch('/api/chirps/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({content, userid: 10})
		});
		if (res.ok){
			const result = await res.json()
			console.log(result)
			navigate(`/details/${result.chirpid}`)
		}
	} 

	return (
		<main className="container">
			<h1 className="text-center">Compose Your Chirp</h1>
			<section className="row justify-content-center my-2">
				<div className="col-md-8">
					<form className="form-group p-3 border border-primary rounded">
						<label htmlFor="username">Username</label>
						<input type="text" className="form-control" />
						<label htmlFor="chirp">Chirp</label>
						<textarea value={content} onChange={e => setContent(e.target.value)} rows={8} className="form-control"/>
						<button onClick={submitChirp} className="btn btn-success btn-block mx-auto w-25 mt-3">Send Chirp</button>
					</form>
				</div>
			</section>
		</main>
	);
};

interface ComposeProps {}

export default Compose;