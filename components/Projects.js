import React from 'react';

const Projects = () => {
	return (
		<section>
			<div className="container">
				<h2> Projects</h2>
				<p>Here are a few web development projects I’ve worked on recently.</p>
				<ul>
					<li>
						<h3>Sueldo.io</h3>
						<p>
							A platform that helps mission-driven companies hire the best tech
							talent in Canada.
						</p>
						<h4>Built with:</h4>
						<p>React.js, Node.js, Express.js, MongoDB</p>
					</li>
					<li>
						<img src="https://i.imgur.com/fhCZCP3.png" alt="RBC Logo" />
						<p>
							An employee crowdsourcing tool for recording and matching local
							competitor rates.
						</p>
						<h4>Built with:</h4>
						<p>PWA, React.js and Firebase</p>
					</li>
					<li>
						<h3>DoIHaveCOVID19.ca</h3>
						<p>A COVID-19 self assessment tool for Canadians.</p>
						<h4>Built with:</h4>
						<p>PWA, React.js and Firebase</p>
					</li>
					<li>
						<img
							src="https://i.imgur.com/VKarnY7.png"
							alt="Travel Eatinerary logo"
						/>
						<p>
							An employee crowdsourcing tool for recording and matching local
							competitor rates.
						</p>
						<h4>Built with:</h4>
						<p>React.js, Next.js, and ZEIT Now</p>
					</li>
					<li>
						<img src="https://i.imgur.com/lSjG4Si.png" alt="Ahon CBT logo" />
						<p>
							A platform designed to manage anxiety and depression with
							Cognitive Behavioural Therapy.
						</p>
						<h4>Built with:</h4>
						<p>React and Firebase</p>
					</li>
					<li>
						<h3>SafeChat</h3>
						<p>
							A Slack-like chatbot that detects whether text-toxcity in
							real-time chat environments.
						</p>
						<h4>Built with:</h4>
						<p>jQuery and Firebase</p>
					</li>
				</ul>
			</div>

			<style jsx>{`
				section {
					padding: 10rem 0 6rem 0;
				}

				h2 {
					margin-bottom: 1rem;
				}

				h3 {
					font-size: 2rem;
					text-align: center;
					margin-bottom: 1rem;
				}

				p {
					margin-bottom: 6rem;
				}

				h2,
				p {
					text-align: center;
				}

				ul {
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					list-style: none;
				}

				li {
					width: 370px;
					height: 370px;
					border: 1px solid #f0f0f0;
					border-radius: 2rem;
					box-shadow: 0 3px 6px rgb(0, 0, 0, 0.05);
					margin-bottom: 2.75rem;
					padding: 2rem;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					transition: 0.2s all;
				}

				li:hover {
					transform: scale(1.03);
				}

				li p {
					margin-bottom: 2rem;
				}

				img {
					max-height: 10rem;
					object-fit: contain;
					margin-bottom: 1rem;
				}
			`}</style>
		</section>
	);
};

export default Projects;
