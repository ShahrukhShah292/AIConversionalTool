import { Breadcrumbs, Typography, } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';

function BannerComponent({ imageUrl, heading, linkUrl, LinkText }) {
    return (
        <>
            <div className='Banner_wrapper'
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}>
                <div className='Banner_content'>
                    <h1>{heading}</h1>
                    <hr />
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" to="/">
                            Home
                        </Link>
                        <Typography >{heading}</Typography>
                    </Breadcrumbs>

                </div>

            </div>
        </>
    )
}

export default BannerComponent