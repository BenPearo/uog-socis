import React from 'react';

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

export default class Layout extends React.Component {
	render () {
		return (
			<div>
				<Header />
				{this.props.children}
				<Footer />
			</div>
		)
	}
}