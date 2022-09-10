import React, { useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import { MdShoppingCart } from "react-icons/md";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./StatCart.css";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Link as MaterialLink } from "@mui/material";
import Stack from "@mui/material/Stack";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { AiOutlineTag } from "react-icons/ai";
import Context from "../../Context";
import { color } from "@mui/system";

function createData(Products, Qty, Price, Subtotal) {
    return { Products, Qty, Price, Subtotal };
}

function StatCart() {
    const [selected, setSelected] = React.useState("Shopping Cart");
    const { checkoutList } = useContext(Context);
    const [rows, setRows] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    console.log("hello", checkoutList);
    function handleClick(event, option) {
        event.preventDefault();
        console.info("You clicked a breadcrumb.");
        setSelected(option);
    }
    function createRows() {
        let total = 0;

        let temp = checkoutList.map((e) => {
            total = total + e.subtotal;
            return createData(e.name, e.qty, e.price, e.subtotal);
        });
        setTotal(total);
        setRows(temp);
    }
    useEffect(() => {
        createRows();
    }, [checkoutList]);

    const breadcrumbs = [
        <Link
            underline="hover"
            key="1"
            color="inherit"
            to="/statcart"
            style={{
                fontSize: "40px",
                textDecoration: "none",
                fontFamily: "Nunito, sans-serif",
            }}
            onClick={(event) => handleClick(event, "Shopping Cart")}
        >
            Shopping Cart
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            style={{
                fontSize: "40px",
                textDecoration: "none",
                fontFamily: "Nunito, sans-serif",
            }}
            onClick={(event) => handleClick(event, "Checkout")}
        >
            Checkout
        </Link>,
        <Link
            key="3"
            color="inherit"
            style={{ textDecoration: "none" }}
            onClick={(event) => handleClick(event, "Complete")}
        >
            <Typography
                style={{ fontSize: "40px", fontFamily: "Nunito, sans-serif" }}
            >
                Complete
            </Typography>
        </Link>,
    ];

    function render() {
        if (selected === "Shopping Cart") {
            return (
                <div className="statcart__tablecontainer">
                    <div className="statcart__table">
                        <TableContainer>
                            <Table sx={{ minWidth: 100 }} aria-label="simple table">
                                <TableHead
                                    style={{ borderbottom: "1rem", borderColor: "white" }}
                                >
                                    <TableRow>
                                        <TableCell>
                                            <h3>Products</h3>
                                        </TableCell>
                                        <TableCell align="right">
                                            <h3>Qty</h3>
                                        </TableCell>
                                        <TableCell align="right">
                                            <h3>Price&nbsp;(Rs)</h3>
                                        </TableCell>
                                        <TableCell align="right">
                                            <h3>Subtotal&nbsp;(Rs)</h3>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.Products}>
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                sx={{
                                                    border: "none",
                                                }}
                                            >
                                                {row.Products}
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                sx={{
                                                    border: "none",
                                                }}
                                            >
                                                {row.Qty}
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                sx={{
                                                    border: "none",

                                                    margin: "4rem",
                                                }}
                                            >
                                                {row.Price}
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                sx={{
                                                    border: "none",
                                                }}
                                            >
                                                {row.Subtotal}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <Link to="/stathome">
                                <div className="statcart__continueshoppingconatiner">
                                    <Button
                                        style={{
                                            color: "#3fbdb3",
                                            borderColor: "#3fbdb3",
                                            marginTop: "1rem",
                                            textDecoration: "none",
                                        }}
                                        variant="outlined"
                                    >
                                        ⬅Continue Shopping
                                    </Button>
                                </div>
                            </Link>
                        </TableContainer>
                    </div>
                    <div className="statcart__form">
                        <div className="statcart__details">
                            <h3>Card Total</h3>
                        </div>
                        <div className="statcart__details1">
                            <small>Subtotal: {total} </small>
                        </div>
                        <div className="statcart__details2">
                            <form>
                                <small>
                                    <AiOutlineTag />
                                    Coupon
                                </small>
                                <div>
                                    <input
                                        className="statcart__details3"
                                        type="text"
                                        placeholder="Coupon code"
                                    ></input>
                                </div>
                                <Button
                                    style={{
                                        backgroundColor: "#3fbdb3",
                                        width: "25rem",
                                        marginLeft: "2rem",
                                        marginRight: "2rem",
                                    }}
                                    variant="contained"
                                >
                                    Apply Cupon
                                </Button>
                            </form>
                        </div>

                        <div className="statcart__details4">
                            <small>total: {total} </small>
                        </div>

                        <Button
                            onClick={(event) => handleClick(event, "Checkout")}
                            style={{
                                backgroundColor: "#3fbdb3",
                                width: "100%",
                            }}
                            variant="contained"
                        >
                            Proceed to Checkout
                        </Button>
                    </div>
                </div>
            );
        } else if (selected === "Checkout") {
            return (
                <>
                    <div className="statcart__table">
                        <TableContainer>
                            <Table sx={{ minWidth: 100 }} aria-label="simple table">
                                <TableHead
                                    style={{ borderbottom: "1rem", borderColor: "white" }}
                                >
                                    <TableRow>
                                        <TableCell>
                                            <h3>Products</h3>
                                        </TableCell>

                                        <TableCell align="right">
                                            <h3>Subtotal&nbsp;(Rs)</h3>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.Products}>
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                sx={{
                                                    border: "none",
                                                }}
                                            >
                                                {row.Products}
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                sx={{
                                                    border: "none",
                                                }}
                                            >
                                                {row.Subtotal}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <TableRow>
                                <TableCell rowSpan={9} />
                                <TableCell colSpan={1}>Total</TableCell>
                                <TableCell align="right">{total}</TableCell>
                            </TableRow>
                        </TableContainer>
                    </div>
                </>
            );
        } else if (selected === "Complete") {
            return (
                <div className="div__complete">
                    <h3>Thank you for puchasing from us!!!</h3>
                    <h3>Have A nice day!!</h3>
                </div>
            );
        }
    }
    return (
        <div className="statcart__Container">
            <div className="Container">
                <div className="statcart__navbar text-center">
                    <Link to="/">
                        <div className="statcart__navLogo">
                            <Link to="/stathome" className="link">
                                <img
                                    src={require("./BaskEat.png")}
                                    alt="baskEat"
                                    className="Logo"
                                />
                            </Link>
                        </div>
                    </Link>
                    <div className="statcart__navbtns">
                        <li>
                            <Link to="/College" className="link">
                                <Button>Home</Button>
                            </Link>
                            {/* <Link to="/College" className="link">
                                <Button>College</Button>
                            </Link> */}
                            <Link to="/Cant" className="link">
                                <Button>Canteen</Button>
                            </Link>
                            <Link to="/StatHome" className="link">
                                <Button>Stationary</Button>
                            </Link>

                            <MdShoppingCart className="stathome_carticon" />

                            {/* <span className=" header__basketCount"></span> */}
                        </li>
                    </div>
                </div>
                <div className="statcart__stepper">
                    <Stack spacing={1}>
                        <Breadcrumbs
                            separator=">"
                            style={{ fontSize: "40px" }}
                            aria-label="breadcrumb"
                        >
                            {breadcrumbs}
                        </Breadcrumbs>
                    </Stack>
                </div>
                {render()}
            </div>
        </div>
    );
}

export default StatCart;
