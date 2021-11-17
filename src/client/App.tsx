import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Admin from './views/Admin';
import Compose from './views/Compose';
import Details from './views/Details';
import Home from './views/Home';

const App: React.FC<AppProps> = props => {
	
	return (
		<BrowserRouter>
		<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/details/:chirpid" element={<Details />} />
				<Route path="/admin/:chirpid" element={<Admin />} />
				<Route path="/compose" element={<Compose />} />
			</Routes>
		</BrowserRouter>
	);
};

interface AppProps {}

export default App;