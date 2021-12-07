import React, { useState, useEffect } from 'react'
import { Card } from '@material-ui/core';

//common header
import HOC from "../../../Common/HOC";

//------------------------table-------------------------
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import { withStyles, makeStyles } from "@material-ui/core/styles";

function UserInformation(props) {

    //local state
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [UserDataArr] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <>
            <div className="content_padding">
                <div className="mb-3 page_heading">User Details</div>
                <Card className="p-3 Card_shadow">

                    {/* --------------------list of users-------------- */}
                    <div className="table_foramtitng mt-2">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="left" className="table_header">
                                            User Id
                                        </StyledTableCell>

                                        <StyledTableCell align="left" className="table_header">
                                            User Name
                                        </StyledTableCell>

                                        <StyledTableCell align="left" className="table_header">
                                            Email
                                        </StyledTableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {(rowsPerPage > 0
                                        ? UserDataArr.slice(
                                            page * rowsPerPage,
                                            page * rowsPerPage + rowsPerPage
                                        )
                                        : UserDataArr
                                    ).map((row) => (
                                        <StyledTableRow>

                                            <StyledTableCell align="left">

                                            </StyledTableCell>
                                            <StyledTableCell align="left">

                                            </StyledTableCell>
                                            <StyledTableCell align="left">

                                            </StyledTableCell>


                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <TablePagination
                                true
                                rowsPerPageOptions={false}
                                component="div"
                                count={UserDataArr.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                            />
                        </TableContainer>
                    </div>
                    {/* -------------------------list of users---------------------- */}
                </Card>
            </div>

        </>
    )
}

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default HOC(UserInformation)
