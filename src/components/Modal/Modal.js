import React from 'react';

const Modal = ({ title, img, overview, releaseDate, id }) => {
	return (
		<div>
			<div
				className='modal fade'
				id={id}
				tabIndex='-1'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content bg-dark text-light'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								{title}
							</h5>
						</div>
						<div className='modal-body img_backdrop'>
							<img src={img} alt='imageFilm' />
							<p>{overview}</p>
							<span>{releaseDate}</span>
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn '
								data-bs-dismiss='modal'
							>
							<span>Close</span>	
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;