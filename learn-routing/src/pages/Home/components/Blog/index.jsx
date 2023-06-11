import React from 'react';
import { Link } from 'react-router-dom';
// import './css/style.css';

const Blog = ({ id, title, description, createdAt, author }) => {
	return (
		<>
			<div className='post-preview'>
				<Link to={`/posts/${id}`}>
					<h2 className='post-title'>{title}</h2>
					<h3 className='post-subtitle'>{description}</h3>
				</Link>
				<p className='post-meta'>
					Posted by
					<a href='#!'>{author}</a>
					on {createdAt}
				</p>
			</div>
			<hr className='my-4' />
		</>
	);
};

export default Blog;
