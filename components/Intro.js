import React from 'react';

const Intro = () => {
	return (
		<section>
			<div className="container">
				<h2>Hi, I’m Aron. Nice to meet you.</h2>
				<p>
					Since beginning my journey as a freelance designer nearly 8 years ago,
					I've done remote work for agencies, consulted for startups, and
					collaborated with talented people to create digital products for both
					business and consumer use. I'm quietly confident, naturally curious,
					and perpetually working on improving my chops one design problem at a
					time.
				</p>
			</div>

			<style jsx>{`
				section {
					padding: 12rem 0 25rem 0;
					background: #7510f7;
					color: #fff;
				}

				h2 {
					font-size: 3.2rem;
					margin-bottom: 2.5rem;
				}

				p {
					max-width: 71rem;
					margin: 0 auto;
				}

				h2,
				p {
					text-align: center;
				}
			`}</style>
		</section>
	);
};

export default Intro;
