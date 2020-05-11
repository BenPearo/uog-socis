import React from 'react';

import Navbar, { NavItem } from './Navbar'

export default class Header extends React.Component {
	render () {
		return (
			<Navbar>
				<NavItem heading='Events' route=''></NavItem>
				<NavItem heading='GCC' route=''></NavItem>
				<NavItem heading='Roboticon' route=''></NavItem>
				<NavItem heading='CUSEC' route=''></NavItem>
				<NavItem heading='CS Games' route=''></NavItem>
				<NavItem heading='About' route=''></NavItem>
			</Navbar>
		)
	}
}