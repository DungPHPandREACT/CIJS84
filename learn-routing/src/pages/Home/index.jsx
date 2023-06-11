import React, { useEffect, useState } from 'react';
import Blog from './components/Blog';

const Home = () => {
	const [listBlog, setListBlog] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);

	const handleSelectPage = (pg) => {
		setPage(pg);
	};

	useEffect(() => {
		setLoading(true);
		fetch(
			`https://6485ce17a795d24810b75639.mockapi.io/api/v1/blogs?page=${page}&limit=10`,
			
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setListBlog(data);
				setLoading(false);
			});
	}, [page]);

	return (
		<div className='container px-4 px-lg-5'>
			{loading === true ? (
				<div className='spinner-border' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</div>
			) : (
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
						<ul className='pagination'>
							<li className='page-item disabled'>
								<a className='page-link'>Previous</a>
							</li>
							{[1, 2, 3].map((pg) => (
								<li
									className={`page-item ${pg === page ? 'active' : ''}`}
									onClick={() => handleSelectPage(pg)}
								>
									<a className='page-link' href='#'>
										{pg}
									</a>
								</li>
							))}
							<li className='page-item'>
								<a className='page-link' href='#'>
									Next
								</a>
							</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default Home;
