import React from 'react'
import './modal.css'
const Modal = ({ showModal, setShowModal, children }) => {
	console.log('da aici')
	return (
		<div className='modal-container'>
			<div className='modal-box'>
				<div className=' d-flex justify-content-end close-modal-box'>
					<button onClick={() => setShowModal(!showModal)} className=" align-self-end">X</button>
				</div>
				<div>{children}</div>
				{/* <div>
					<button >Close</button>
				</div> */}
			</div>
		</div>
	)
}

export default Modal
