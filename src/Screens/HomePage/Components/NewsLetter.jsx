import React from 'react'

function NewsLetter() {

    return (
        <>

            <div className='NewsLetter_wrapper'>
                <div className="col-12 text-center">
                    <p className='light_highlighted_head'>Best Ai Business Manage Software</p>
                    <h1 className='col-12 my-4 aibased-heading'>Subscribe Our Newsletter</h1>
                    <p className='col-12 col-xxl-5 col-xl-6 col-lg-7 col-md-9 col-md-10 description text-center  m-0'>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt labore dolore magna aliquyam erat sed diam voluptua.</p>
                </div>

                <div className='Col-12 text-center'>
                    <div className='col-12 Subscribe_Section'>

                        <div className=" input-group">
                            <input
                                color='white'
                                type="text"
                                className="form-control col-6"
                                placeholder=""
                                aria-label=""
                                aria-describedby="button-addon2"
                            />
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default NewsLetter