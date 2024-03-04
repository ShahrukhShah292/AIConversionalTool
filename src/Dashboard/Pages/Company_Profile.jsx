import { Avatar } from 'antd';
import React, { useRef } from 'react';

function CompanyProfile() {
    const fileInputRef = useRef(null);
    const [avatarSrc, setAvatarSrc] = React.useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setAvatarSrc(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <>
            <div className='company-add my-3'>
                <div className='popup-bg'>
                    <div className='add-employee-heading'>
                        <h3>Company Profile</h3>
                    </div>
                    <div className='add-company-avatar'>
                        <Avatar style={{ border: '1px solid' }} src={avatarSrc} size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} />
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                        />
                        <button className='dashboard-btn' onClick={handleClick}>Upload Image</button>
                    </div>
                    <div className='add-employee-form'>
                        <div>
                            <input autoComplete="off" className='form-input-company' type="text" name="companyname" placeholder="Company Name" />
                            <input autoComplete="off" className='form-input-company' type="email" name="companyemail" placeholder="Company Email" />
                            <input autoComplete="off" className='form-input-company' type="text" name="companyphone" placeholder="Company Phone" />
                            <input autoComplete="off" className='form-input-company' type="text" name="companyId" placeholder="Company ID" />
                        </div>
                        <div className='d-flex w-100 flex-column' style={{ alignItems: 'end' }}>
                            <input autoComplete="off" className='form-input-company' type="text" name="companyaddress" placeholder="Company Address" />
                            <input autoComplete="off" className='form-input-company' type="text" name="companytype" placeholder="Company Type" />
                            <input autoComplete="off" className='form-input-company' type="text" name="other" placeholder="Other" />
                            <button className='dashboard-btn' >Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CompanyProfile;
