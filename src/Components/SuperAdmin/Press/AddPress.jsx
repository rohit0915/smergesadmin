import React, { useState, useEffect } from 'react'
import { Grid, Card, Button, Dialog, DialogActions, DialogTitle, DialogContent } from '@material-ui/core';
import Expand from "react-expand-animated";

//common header
import HOC from "../../../Common/HOC";

import "./Press.css";

function AddPress() {

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

                <div className="mb-3 page_heading">Manage Press </div>
                <Card className="pt-3 pb-4 Card_shadow">
                    <div className="card_admissiondetails_height">
                        <div className="textfiled_margin">
                            {!addMangeopen ? (
                                <div>
                                    <span className="mt-1 ml-2 addmanageuserfont hover_cursor" onClick={() => setaddMangeopen(!addMangeopen)}>
                                        <i className="fa fa-plus-circle mr-1"></i> <strong> Add New Press Data </strong>
                                    </span>
                                </div>
                            ) : (
                                <Expand open={addMangeopen}>
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
                                                                Press Category
                                                            </div>
                                                            <div className="mr-2 mt-1">
                                                                <input
                                                                    type="text"
                                                                    className="form-control "
                                                                    placeholder="Enter Name"
                                                                    autoComplete="off"
                                                                />
                                                            </div>
                                                        </Grid>

                                                        <Grid item md={6}>
                                                            <div className="text_filed_heading">
                                                                Press Title
                                                            </div>
                                                            <div className="mr-2 mt-1">
                                                                <input
                                                                    type="text"
                                                                    className="form-control "
                                                                    placeholder="Enter Title"
                                                                    autoComplete="off"
                                                                />
                                                            </div>
                                                        </Grid>
                                                    </Grid>

                                                    <div className="text_filed_heading">
                                                        Press Content
                                                    </div>
                                                    <div className="mr-2 mt-1">
                                                        <textarea
                                                            rows="3"
                                                            className="form-control "
                                                            placeholder="Enter Press Content"
                                                            autoComplete="off"
                                                        />
                                                    </div>

                                                    <Grid className="Component_main_grid">
                                                        <Grid item md={6}>
                                                            <div className="text_filed_heading">
                                                                Image
                                                            </div>
                                                            <div className="mr-2 mt-1">
                                                                <input
                                                                    type="file"
                                                                    className="form-control "
                                                                    autoComplete="off"
                                                                />
                                                            </div>
                                                        </Grid>
                                                        <Grid item md={6}></Grid>
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
                                </Expand>
                            )}
                        </div>
                    </div>

                    <div className="card_admissiondetails_height mt-4">
                        <div className="textfiled_margin cardheight_overflow">

                            <hr />
                            {SubscriptionDataArr.length > 0 ?
                                (SubscriptionDataArr.map((item, index) => (
                                    <Card className="Card_shadow mb-2 mt-2">
                                        <div className="card_admissiondetails_height">
                                            <div className="textfiled_margin">
                                                <Grid className="Component_main_grid mt-2">
                                                    <Grid item md={4}>
                                                        <div className=" p-2">

                                                        </div>
                                                    </Grid>
                                                    <Grid item md={4}>
                                                        <div className=" p-2">

                                                        </div>
                                                    </Grid>
                                                    <Grid item md={4}>
                                                        <div className="d-flex p-2">

                                                            <span className="icon_color mr-2 ml-1">
                                                                <i
                                                                    className="fa fa-edit hover_cursor"
                                                                    onClick={() => OpenEditDailog(item)}
                                                                ></i>
                                                            </span>
                                                            <span className="icon_color ml-2">
                                                                <i
                                                                    className="fa fa-trash hover_cursor"

                                                                ></i>
                                                            </span>

                                                        </div>
                                                    </Grid>
                                                </Grid>

                                            </div>
                                        </div>
                                    </Card>
                                )))
                                : (
                                    <span>No Data</span>
                                )}
                        </div>
                    </div>
                </Card>
            </div >

            <Dialog
                open={EditDailogOpen}
                aria-labelledby="form-dialog-title"
                maxWidth="sm"
                fullWidth="fullWidth"
            >
                <DialogTitle>
                    Edit Press Data
                    <span
                        className="float-right icon_color"
                        onClick={() => setEditDailogOpen(!EditDailogOpen)}
                    >
                        <i class="fa fa-times hover_cursor" aria-hidden="true"></i>{" "}
                    </span>
                </DialogTitle>
                <DialogContent>
                    <Grid className="Component_main_grid">
                        <Grid item md={6}>
                            <div className="text_filed_heading">
                                Press Category
                            </div>
                            <div className="mr-2 mt-1">
                                <input
                                    type="text"
                                    className="form-control "
                                    placeholder="Enter Name"
                                    autoComplete="off"
                                />
                            </div>
                        </Grid>

                        <Grid item md={6}>
                            <div className="text_filed_heading">
                                Press Title
                            </div>
                            <div className="mr-2 mt-1">
                                <input
                                    type="text"
                                    className="form-control "
                                    placeholder="Enter Title"
                                    autoComplete="off"
                                />
                            </div>
                        </Grid>
                    </Grid>

                    <div className="text_filed_heading">
                        Press Content
                    </div>
                    <div className="mr-2 mt-1">
                        <textarea
                            rows="3"
                            className="form-control "
                            placeholder="Enter Press Content"
                            autoComplete="off"
                        />
                    </div>

                    <Grid className="Component_main_grid">
                        <Grid item md={6}>
                            <div className="text_filed_heading">
                                Image
                            </div>
                            <div className="mr-2 mt-1">
                                <input
                                    type="file"
                                    className="form-control "
                                    autoComplete="off"
                                />
                            </div>
                        </Grid>
                        <Grid item md={6}></Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button
                        className="button_formatting"
                        onClick={() => setEditDailogOpen(!EditDailogOpen)}
                    >
                        Cancel
                    </Button>
                    <Button
                        className="button_formatting"

                    >
                        Save{" "}
                    </Button>
                </DialogActions>
            </Dialog>


        </>
    )
}

export default HOC(AddPress)
