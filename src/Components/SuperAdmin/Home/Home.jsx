import React from 'react'
import { Grid, Card } from '@material-ui/core';

//common header
import HOC from "../../../Common/HOC";

import "./Home.css";

function Home(props) {
    return (
        <>
            <div className="content_padding">
                <div className="mt-2 mb-2">
                    <Grid className="Component_main_grid">
                        <Grid item md={3} className="p-3">
                            <Card className="p-5 text-center Card_shadow card_color" onClick={() => props.history.push("/add-news")}>
                                <div><strong> <i class="fa fa-plus mr-2" />Add News</strong></div>
                            </Card>
                        </Grid>

                        <Grid item md={3} className="p-3">
                            <Card className="p-5 text-center Card_shadow card_color" onClick={() => props.history.push("/add-testimony")}>
                                <div><strong> <i class="fa fa-plus mr-2" />Add Testimony</strong></div>
                            </Card>
                        </Grid>

                        <Grid item md={3} className="p-3">
                            <Card className="p-5 text-center Card_shadow card_color" onClick={() => props.history.push("/press-category")}>
                                <div><strong> <i class="fa fa-plus mr-2" />Add Press Category</strong></div>
                            </Card>
                        </Grid>

                        <Grid item md={3} className="p-3">
                            <Card className="p-5 text-center Card_shadow card_color" onClick={() => props.history.push("/add-press")}>
                                <div><strong> <i class="fa fa-plus mr-2" />Add Press </strong></div>
                            </Card>
                        </Grid>

                    </Grid>

                </div>

                <div className=" mb-2">
                    <Grid className="Component_main_grid">
                        <Grid item md={3} className="p-3">
                            <Card className="p-5 text-center Card_shadow card_color" onClick={() => props.history.push("/category")}>
                                <div><strong> <i class="fa fa-plus mr-2" />Add Category</strong></div>
                            </Card>
                        </Grid>

                        <Grid item md={3} className="p-3">
                            <Card className="p-5 text-center Card_shadow card_color" onClick={() => props.history.push("/faq")}>
                                <div><strong> <i class="fa fa-plus mr-2" />Add Faq</strong></div>
                            </Card>
                        </Grid>

                        <Grid item md={3} className="p-3">
                            <Card className="p-5 text-center Card_shadow card_color" onClick={() => props.history.push("/contact-info")}>
                                <div><strong> <i class="fa fa-plus mr-2" />Contact Info</strong></div>
                            </Card>
                        </Grid>

                        <Grid item md={3} className="p-3">
                            <Card className="p-5 text-center Card_shadow card_color" onClick={() => props.history.push("/user-information")}>
                                <div><strong> <i class="fa fa-plus mr-2" />User Information</strong></div>
                            </Card>
                        </Grid>


                    </Grid>

                </div>
            </div>
        </>
    )
}

export default HOC(Home)
