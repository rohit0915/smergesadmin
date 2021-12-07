import React, { useState, useEffect } from 'react'
import { Grid, Card, Button } from '@material-ui/core';

//common header
import HOC from "../../../Common/HOC";

import "./CreateInvestment.css";

function CreateInvestment() {

    //local state
    const [addMangeopen, setaddMangeopen] = useState(false);

    const [SubscriptionDataArr] = useState([]);
    const [EditDailogOpen, setEditDailogOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])


    //getting and set edit feilds
    const OpenEditDailog = (data) => {

        setEditDailogOpen(!EditDailogOpen)
    }

    return (
        <>
            <div className="content_padding">

                <div className="mb-3 page_heading">Manage CreateInvestment</div>
                <Card className="pt-3 pb-4 Card_shadow">
                    <div className="card_admissiondetails_height">
                        <div className="textfiled_margin">

                            <Card className=" mb-2 Card_shadow">
                                <div className="card_admissiondetails_height">
                                    <div className="textfiled_margin">
                                        <div className="card_content_instition">
                                            <div
                                                className="text-right"
                                            >
                                                <span className="icon_color" onClick={() => setaddMangeopen(!addMangeopen)}>
                                                    <i class="fa fa-times hover_cursor"></i>
                                                </span>
                                            </div>

                                            <Grid className="Component_main_grid">
                                                <Grid item md={6}>
                                                    <div className="text_filed_heading">
                                                        Post Heading
                                                    </div>
                                                    <div className="mr-2 mt-1">
                                                        <input
                                                            type="text"
                                                            className="form-control "
                                                            placeholder="Enter Post Heading"
                                                            autoComplete="off"
                                                        />
                                                    </div>
                                                </Grid>

                                                <Grid item md={6}>
                                                    <div className="text_filed_heading">
                                                        Post Content
                                                    </div>
                                                    <div className="mr-2 mt-1">
                                                        <input
                                                            type="text"
                                                            className="form-control "
                                                            placeholder="Enter Post Content"
                                                            autoComplete="off"
                                                        />
                                                    </div>
                                                </Grid>
                                            </Grid>

                                            <Grid className="Component_main_grid">
                                                <Grid item md={6}>
                                                    <div className="text_filed_heading">
                                                        Over Rating
                                                    </div>
                                                    <div className="mr-2 mt-1">
                                                        <input
                                                            type="text"
                                                            className="form-control "
                                                            placeholder="Enter Over Rating"
                                                            autoComplete="off"
                                                        />
                                                    </div>
                                                </Grid>

                                                <Grid item md={6}>
                                                    <div className="text_filed_heading">
                                                        Prouct Overview
                                                    </div>
                                                    <div className="mr-2 mt-1">
                                                        <input
                                                            type="text"
                                                            className="form-control "
                                                            placeholder="Enter Prouct Overview"
                                                            autoComplete="off"
                                                        />
                                                    </div>
                                                </Grid>
                                            </Grid>

                                            <Grid className="Component_main_grid">
                                                <Grid item md={6}>
                                                    <div className="text_filed_heading">
                                                        Assests Overview
                                                    </div>
                                                    <div className="mr-2 mt-1">
                                                        <input
                                                            type="text"
                                                            className="form-control "
                                                            placeholder="Enter Assests Overview"
                                                            autoComplete="off"
                                                        />
                                                    </div>
                                                </Grid>

                                                <Grid item md={6}>
                                                    <div className="text_filed_heading">
                                                        Facility Overview
                                                    </div>
                                                    <div className="mr-2 mt-1">
                                                        <input
                                                            type="text"
                                                            className="form-control "
                                                            placeholder="Enter Facility Overview"
                                                            autoComplete="off"
                                                        />
                                                    </div>
                                                </Grid>
                                            </Grid>

                                        </div>
                                        <div className="mt-2 pb-2 ">
                                            <Button
                                                variant="contained"
                                                className="button_formatting"

                                            >
                                                Create
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                        </div>
                    </div>


                </Card>
            </div >

        </>
    )
}

export default HOC(CreateInvestment)
