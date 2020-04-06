import React from 'react';
import Illustration from './svg/Illustration';

const Hero = () => {
	return (
		<section>
			<div className="container">
				<h2>I build digital products, and I love what I do.</h2>
				<h3>
					2-time Kickstarter creator, previous digital project manger, and
					current full-stack developer.
				</h3>

				<Illustration />
			</div>

			<style jsx>
				{`
					section {
						margin-top: 15rem;
					}

					.container {
						display: flex;
						flex-direction: column;
					}

					h2 {
						margin-bottom: 2rem;
					}

					h3 {
						font-size: 2.1rem;
						font-weight: 300;
						margin-bottom: 9rem;
					}

					h2,
					h3 {
						text-align: center;
					}
				`}
			</style>
		</section>
	);
};

export default Hero;
