import * as React from 'react';
import { IChirp } from '../utils';
import ChirpContainer from '../components/ChirpContainer'

const Home: React.FC<HomeProps> = props => {

	return (
		<main className="container">
			<h1 className="text-center">The Last Chirper!</h1>
			<section className="row justify-content-center my-2">
					<ChirpContainer />
			</section>
		</main>
	);
};

interface HomeProps {}

export default Home;