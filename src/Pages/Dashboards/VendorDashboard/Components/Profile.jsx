import React, { useState } from 'react'
import DashboardUi from './DashboardUi';
import { MdOutlineAddAPhoto } from 'react-icons/md';
import { useAuthContext } from '../../../../Context/AuthContext';

function Profile() {
    const [imagePreview, setImagePreview] = useState('');

    const { user } = useAuthContext();

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImagePreview(imageUrl);
        console.log(imageUrl)
        }
        console.log(file);
    };

	return (
		<DashboardUi>
				<h3 className="dashboard__heading">Your Profile</h3>
				<form className="form__data form-image-data">
					<div id="uploader__image--card">
						<img
							className="uploader__image"
							id="uploader__image"
							src={imagePreview || user.image}
							alt=""
						/>
						<div id="uploader__image--label-box">
							<input
								className="user-profile-image"
								id="uploader__image--input"
                                onChange={handleImageChange}
								name="image"
								type="file"
								accept="image/*"
							/>
							<label id="uploader__image--label" htmlFor="uploader__image--input">
                                <MdOutlineAddAPhoto /> Add photo
							</label>
						</div>
					</div>
					<p id="uploader__image--username" />
					<button className="img__upload--btn btn" type="submit">
						Upload image
					</button>
				</form>
				<form className="form__data form-profile-data" id="form-data">
					<h3 className="dashboard__heading">Update profile info</h3>

					<div className="form--item">
						<label className="form--label" htmlFor="businessName">Brand name</label>
						<input className="form--input disable" id="businessName" value={user.businessName} type="text" placeholder="Enter your brand name" />
					</div>
					<div className="form--item">
						<label className="form--label" htmlFor="email">
							Email address
						</label>
						<input
							className="form--input disable"
							id="email"
							type="email"
							readOnly="readonly"
							disable="disable"
                            value={user?.email}
						/>
					</div>
					<div className="form--item">
						<label className="form--label" htmlFor="phone">
							Phone number
						</label>
						<input
							className="form--input"
							id="phone"
							type="tel"
							placeholder="Enter a phone number"
						/>
					</div>
					<div className="form--item">
						<label className="form--label" htmlFor="country">
							Country
						</label>
						<input
							className="form--input"
							id="country"
							type="country"
							placeholder="Enter a country"
						/>
					</div>
					<div className="form--item">
						<label className="form--label" htmlFor="state">
							State
						</label>
						<input
							className="form--input"
							id="state"
							type="state"
							placeholder="Enter a state"
						/>
					</div>
					<div className="form--item">
						<label className="form--label" htmlFor="city-region">
							City / Province / Region
						</label>
						<input
							className="form--input"
							id="city-region"
							type="city-region"
							placeholder="Enter a city / region"
						/>
					</div>
					<div className="form--item">
						<label className="form--label" htmlFor="zip-postal">
							Zip code / Postal code
						</label>
						<input
							className="form--input"
							id="zip-postal"
							type="number"
							name="zip-postal"
							placeholder="Enter a zip code"
						/>
					</div>
					<div className="form--item">
						<button className="btn form-btn" type="submit">
							Save settings
						</button>
					</div>
				</form>
		</DashboardUi>
	);
}

export default Profile
