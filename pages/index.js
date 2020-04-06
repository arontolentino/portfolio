import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

const Index = () => {
	return (
		<Layout>
			<Hero />
			<Intro />
			<Skills />
			<Projects />
		</Layout>
	);
};

export default Index;
