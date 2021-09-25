import React, { useEffect, useState, useContext } from 'react'
import './SideBar.css'
import { UserContext } from '../context/user-context'
import { palette } from '../../theme/style'
const Header = ({ showModal, setShowModal }) => {
	const [option, setOption] = useState(1)
	return (
		<div
			className='container d-flex justify-content-between header-container'
			style={{ color: palette.offWhite }}
		>
			<div>
				<h3>LOGO</h3>
			</div>
			<div className='d-flex'>
				<ul
					className='d-flex flex-direction-row menu-container'
					style={{ color: palette.offWhite }}
				>
					<li className={`${option === 1 && 'option-selected'}`} onClick={() => setOption(1)}>Fa o rezervare</li>
					<li className={`${option === 2 && 'option-selected'}`} onClick={() => setOption(2)}>Inscrie Teren</li>
					<li className={`${option === 3 && 'option-selected'}`} onClick={() => setOption(3)}>Login</li>
					<li className={`${option === 4 && 'option-selected'}`} onClick={() => setOption(4)}>Sign Up</li>
				</ul>
			</div>
		</div>
	)
}

export default Header
