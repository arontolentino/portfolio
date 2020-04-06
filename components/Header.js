import React from 'react';
import Link from 'next/link';

const Header = () => {
	return (
		<header>
			<div className="container">
				<h1>Aron Tolentino</h1>
				<nav>
					<ul>
						<li>
							<Link href="/">
								<a href="/">Home</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a href="/">Portfolio</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a href="/">Blog</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a href="/">Contact</a>
							</Link>
						</li>
					</ul>
				</nav>
			</div>

			<style jsx>
				{`
					header {
						padding: 3rem;
					}

					h1 {
						font-size: 2.5rem;
					}

					a {
						font-size: 1.6rem;
					}

					.container {
						display: flex;
						justify-content: space-between;
						align-items: center;
					}

					ul {
						list-style: none;
						display: flex;
					}

					li:not(:last-child) {
						margin-right: 2rem;
					}
				`}
			</style>
		</header>
	);
};

export default Header;
