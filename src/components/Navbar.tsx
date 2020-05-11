import React from 'react';

export default class Navbar extends React.Component {
	render () {
		return (
			<nav className="navbar">
				<ul className="navbar-nav">{this.props.children}</ul>
			</nav>
		)
	}
}

export interface NavItemProps {
	heading: string;
	route: string;
}

export class NavItem extends React.Component<NavItemProps> {
	render () {
		return (
			<li className="nav-item">
				<a href={this.props.route}>{this.props.heading}</a>
			</li>
		)
	}
}