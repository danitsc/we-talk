import React, { useState, useEffect } from 'react'
import './SideBar.css'
// import socketIOClient from 'socket.io-client'
import { request } from '../services/requests-wrapper'
import Header from './Header'
import { Link } from 'react-router-dom'
import { palette } from '../../theme/style'
import Modal from '../modal/Modal'
const mockResults = [
	{
		image:
			'https://storage.spatiulconstruit.ro/storproc/firma/h13/f13753/gama/10338/foto_gama/237234/teren_de_fotbal_237234.jpeg',
		fieldName: 'Teren-1',
		facilityName: 'Royal Victory Arena',
		price: '100 RON / ora',
		minimumReservationTime: '1h',
	},
	{
		image: 'https://www.gazonsportiv.ro/images/gazon-fotbal.jpg',
		fieldName: 'Teren-2',
		facilityName: 'Royal Victory Arena',
		price: '100 RON / ora',
		minimumReservationTime: '1h',
	},
	{
		image:
			'https://www.indfloor.ro/wp-content/uploads/2019/05/montaj-gazon-sintetic3-1024x768.jpeg',
		fieldName: 'Teren-3',
		facilityName: 'Royal Victory Arena',
		price: '100 RON / ora',
		minimumReservationTime: '1h',
	},
	{
		image:
			'https://storage.spatiulconstruit.ro/storproc/firma/h13/f13753/gama/10338/foto_gama/237234/teren_de_fotbal_237234.jpeg',
		fieldName: 'Teren-1',
		facilityName: 'Royal Victory Arena',
		price: '100 RON / ora',
		minimumReservationTime: '1h',
	},
	{
		image: 'https://www.gazonsportiv.ro/images/gazon-fotbal.jpg',
		fieldName: 'Teren-2',
		facilityName: 'Royal Victory Arena',
		price: '100 RON / ora',
		minimumReservationTime: '1h',
	},
	{
		image:
			'https://www.indfloor.ro/wp-content/uploads/2019/05/montaj-gazon-sintetic3-1024x768.jpeg',
		fieldName: 'Teren-3',
		facilityName: 'Royal Victory Arena',
		price: '100 RON / ora',
		minimumReservationTime: '1h',
	},
	{
		image:
			'https://storage.spatiulconstruit.ro/storproc/firma/h13/f13753/gama/10338/foto_gama/237234/teren_de_fotbal_237234.jpeg',
		fieldName: 'Teren-1',
		facilityName: 'Royal Victory Arena',
		price: '100 RON / ora',
		minimumReservationTime: '1h',
	},
	{
		image: 'https://www.gazonsportiv.ro/images/gazon-fotbal.jpg',
		fieldName: 'Teren-2',
		facilityName: 'Royal Victory Arena',
		price: '100 RON / ora',
		minimumReservationTime: '1h',
	},
	{
		image:
			'https://www.indfloor.ro/wp-content/uploads/2019/05/montaj-gazon-sintetic3-1024x768.jpeg',
		fieldName: 'Teren-3',
		facilityName: 'Royal Victory Arena',
		price: '100 RON / ora',
		minimumReservationTime: '1h',
	},
]

const RezervaTerenForm = ({ setResults }) => {
	//todo: usememo for this
	const [activity, setActivity] = useState('')
	const [period, setPeriod] = useState('')

	const searchActivity = () => {
		setResults(mockResults)
	}
	return (
		<div className='container'>
			<div className='d-flex flex-column rezerva-teren-container'>
				<div className='' style={{ color: palette.offWhite }}>
					<h4>Rezerva un teren</h4>
				</div>
				<div
					className='d-flex flex-column activities-container'
					style={{ color: palette.offWhite }}
				>
					<div className='d-flex flex-row activities-box row'>
						<div className='activity-box col-lg-3 col-md-4 col-xs-6'>
							<input type='text' />
							<label>Activitate</label>
						</div>
						<div className='activity-box col-lg-3 col-md-4 col-xs-6'>
							<input type='text' />
							<label>Perioada</label>
						</div>
						<div className='activity-box col-lg-3 col-md-4 col-xs-12'>
							<input
								// placeholder={'Timisoara'}
								onChange={e => setPeriod(e.target.value)}
							/>
							<label>Localitate</label>
						</div>
						<div className='col-lg-3 col-md-12 col-xs-12 align-self-end'>
							<button
								className='btn btn-outline-success btn-sm cauta-btn'
								style={{ color: palette.offWhite }}
								onClick={searchActivity}
							>
								Cauta
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const RezervareModal = () => {
	/*
		to show: 
			- calendar
			- price
			- sport type
			- caracteristici teren
			- facilitati
			- return in caz de anulare/imposibilitate desfasurare
			- vezi locatie

		pasul urmator (plateste rezervarea)
			- review comanda (ora, data, interval, pret)
			- metoda de plata (cash / card)
	*/
	return <div>lala</div>
}

const RezervaTerenFormResults = ({ results, setResults }) => {
	const [showModal, setShowModal] = useState(false)
	return (
		<div className='form-results-container'>
			{showModal && (
				<Modal showModal={showModal} setShowModal={setShowModal}>
					<RezervareModal />
					<div>idkid</div>
				</Modal>
			)}
			{/* <div
				className='d-flex justify-content-center'
				style={{ color: palette.offWhite }}
			>
				<h2>Terenuri gasite</h2>
			</div> */}
			<ul className='d-flex row results-box'>
				{results.map(result => {
					const {
						image,
						fieldName,
						facilityName,
						price,
						minimumReservationTime,
					} = result
					return (
						<li
							className='col-lg-3 col-md-6 col-xs-12 field-box'
							style={{ color: palette.offWhite }}
						>
							{/* <div>
								<img src={image} style={{ width: 200, height: 150 }} />
							</div>
							<div>
								<span>{fieldName}</span>
								<span>{facilityName}</span>
								<span>{price}</span>
								<span>{minimumReservationTime}</span>
							</div> */}
							<img src={image} style={{ width: 140, height: 120 }} />
							<div className='field-info-box'>
								<div className='field-facility-box'>
									<span
										className='field-name'
										style={{ color: palette.orangeDarker }}
									>
										{fieldName}
									</span>
									<span
										className='facility-name'
										style={{ color: palette.lightGrey }}
									>
										{facilityName}
									</span>
								</div>
								<div className='price-reservation-box'>
									<div className='d-flex flex-column'>
										<span
											style={{ color: palette.lightGrey, fontSize: '12px' }}
										>
											Rezerva minim: {minimumReservationTime}
										</span>
										<span style={{ fontSize: '14px' }}>{price} </span>
									</div>
									<div class='align-self-end'>
										<button
											className='btn btn-outline-success btn-sm'
											style={{ color: palette.offWhite }}
											// onClick={() => {
											//  console.log('Clicked')
											//  setShowModal(!showModal)
											// }}
										>
											Rezervare
											{/* <Link to={`/rezervari/${fieldName}/${facilityName}`}>
												Rezerva
											</Link> */}
										</button>
									</div>
								</div>
							</div>
						</li>
					)
				})}
			</ul>
			<div className='d-flex justify-content-center show-more-box'>
				<button
					className='btn btn-outline-primary'
					style={{ color: palette.offWhite }}
					onClick={() => {
						setResults([
							...results,
							{
								image:
									'https://storage.spatiulconstruit.ro/storproc/firma/h13/f13753/gama/10338/foto_gama/237234/teren_de_fotbal_237234.jpeg',
								fieldName: 'Teren-1',
								facilityName: 'Royal Victory Arena',
								price: '100 RON / ora',
								minimumReservationTime: '1h',
							},
							{
								image: 'https://www.gazonsportiv.ro/images/gazon-fotbal.jpg',
								fieldName: 'Teren-2',
								facilityName: 'Royal Victory Arena',
								price: '100 RON / ora',
								minimumReservationTime: '1h',
							},
							{
								image:
									'https://www.indfloor.ro/wp-content/uploads/2019/05/montaj-gazon-sintetic3-1024x768.jpeg',
								fieldName: 'Teren-3',
								facilityName: 'Royal Victory Arena',
								price: '100 RON / ora',
								minimumReservationTime: '1h',
							},
						])
					}}
				>
					Afiseaza mai multe rezultate
				</button>
			</div>
		</div>
	)
}

const Main = ({}) => {
	const [results, setResults] = useState(mockResults)

	return (
		<>
			<RezervaTerenForm setResults={setResults} />
			{results.length ? (
				<RezervaTerenFormResults results={results} setResults={setResults} />
			) : null}
		</>
	)
}

export default Main
