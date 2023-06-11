import React, { useEffect, useState } from 'react';
import Blog from './components/Blog';

const Home = () => {
	const [listBlog, setListBlog] = useState([]);

	useEffect(() => {
		fetch('https://6485ce17a795d24810b75639.mockapi.io/api/v1/blogs')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setListBlog(data);
			});
	}, []);

	return (
		<div className='container px-4 px-lg-5'>
			<div className='row gx-4 gx-lg-5 justify-content-center'>
				<div className='col-md-10 col-lg-8 col-xl-7'>
					{listBlog.map((blog) => (
						<Blog
							key={blog.id}
							id={blog.id}
							title={blog.title}
							description={blog.description}
							author={blog.author}
							createdAt={blog.createdAt}
						/>
					))}

					{/* Pager*/}
					<div className='d-flex justify-content-end mb-4'>
						<a className='btn btn-primary text-uppercase' href='#!'>
							Older Posts →
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
