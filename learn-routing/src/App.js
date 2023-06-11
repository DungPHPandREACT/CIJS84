import logo from './logo.svg';
import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Posts from './pages/Posts';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import Navigation from './layouts/Navigation';
import PageHeader from './layouts/PageHeader';
import Footer from './layouts/Footer';

function App() {
	return (
		<div className='App'>
			<Navigation />
			<PageHeader />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/posts/:blogId' element={<Posts />}></Route>
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='*' element={<h1>Page not found</h1>} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
