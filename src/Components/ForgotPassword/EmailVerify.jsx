import React, { useEffect } from "react";


//login,register,resetpassword uses material ui text-feild
import { Button, Card, TextField } from "@material-ui/core";

const EmailVerify = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className="Login_Main_div content_padding">
                <Card className="pt-2 pb-2 Card_shadow form_width mt-2">
                    <p className="page_heading mt-3">Verify Email</p>
                    <div className="main_padding_top_bottom">
                        <div>
                            <TextField
                                placeholder="Email Address"
                                id="outlined-basic"
                                variant="outlined"
                                autoComplete="off"

                            />

                        </div>


                        <div className="inputfiledformatting mt-5">
                            <Button
                                variant="contained"
                                className="Login_page_button"
                                onClick={() => props.history.push("/forgot-password")}
                            >
                                Verify
                            </Button>
                        </div>

                    </div>
                </Card>
            </div>


        </>
    );
};

export default EmailVerify;
