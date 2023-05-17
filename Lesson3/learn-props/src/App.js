import logo from './logo.svg';
import './App.css';
import Navigation from './layout/Navigation';
import { Footer } from './layout/Footer';
import Header from './layout/Header';
import Homepage from './pages/Homepage/Homepage';

function App() {
	return (
		<>
			<Navigation />
			<Header />
			<Homepage />
			<Footer />
		</>
	);
}

export default App;
