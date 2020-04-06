import React from 'react';

const Skills = () => {
	return (
		<section>
			<div className="container">
				<div className="skill">
					<h3>Front-End Development</h3>
					<p>
						I like to code things from scratch, and enjoy bringing ideas to life
						in the browser.
					</p>
					<h4>Technology Stack</h4>
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>SASS</li>
						<li>JavaScript</li>
						<li>jQuery</li>
						<li>React.js</li>
						<li>Redux</li>
						<li>React Native</li>
						<li>Vue.js</li>
					</ul>
				</div>
				<div className="skill">
					<h3>Back-End Development</h3>
					<p>
						I like to code things from scratch, and enjoy bringing ideas to life
						in the browser.
					</p>
					<h4>Technology Stack</h4>
					<ul>
						<li>Node.js</li>
						<li>Express.js</li>
						<li>Next.js</li>
						<li>MongoDB</li>
						<li>MySQL</li>
						<li>Firebase</li>
						<li>Netlify</li>
						<li>AWS</li>
						<li>WordPress</li>
					</ul>
				</div>
				<div className="skill">
					<h3>Product Management</h3>
					<p>
						I like to code things from scratch, and enjoy bringing ideas to life
						in the browser.
					</p>
					<h4>Methodologies & Tools</h4>
					<ul>
						<li>Agile Scrum</li>
						<li>Lean Startup</li>
						<li>A/B Testing</li>
						<li>Adobe XD</li>
						<li>Balsamiq</li>
						<li>Typeform</li>
						<li>Jira</li>
						<li>Trello</li>
						<li>Google Analytics</li>
					</ul>
				</div>
			</div>

			<style jsx>{`
				section {
					margin: -14rem 0 5rem 0;
				}

				.container {
					border-radius: 2rem;
					background: #fff;
					display: flex;
					justify-content: center;
					box-shadow: 0 3px 6px rgb(0, 0, 0, 0.05);
				}

				.skill {
					padding: 6.5rem 5rem;
					width: calc(3 / 100%);
				}

				.skill:not(:last-child) {
					border-right: 1px solid #f0f0f0;
				}

				h3 {
					margin-bottom: 2.5rem;
				}

				h4 {
					color: #7510f7;
					margin-bottom: 2rem;
				}

				p {
					margin-bottom: 2.5rem;
				}

				ul {
					font-size: 1.8rem;
					font-weight: 300;
					list-style: none;
				}

				li:not(:last-child) {
					margin-bottom: 1.5rem;
				}

				h3,
				h4,
				p,
				ul {
					text-align: center;
				}
			`}</style>
		</section>
	);
};

export default Skills;
