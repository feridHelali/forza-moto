import { useMotorbikeData } from "../../../hooks/useMotorbikedata";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./MotorbikeList.css";
import { Button } from "@mui/base";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));



function MotorbikeList() {
  const [motorbikes, getAllMotorbikes, addNewMotorbike] = useMotorbikeData();
  


  return (
    <div className="motorbikelist">
      <div className="motorbikelist__head">
        <h1>Motorbike List</h1>
        <input placeholder="Search" />
        <Button variant="contained" color="primary">
          Add New Motorbike
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Label</StyledTableCell>
              <StyledTableCell align="right">Brand</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">Cover</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Update</StyledTableCell>
              <StyledTableCell align="right">Remove</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {motorbikes.map((motorbike) => (
              <StyledTableRow key={motorbike._id}>
                <StyledTableCell component="th" scope="row">
                  {motorbike.label}
                </StyledTableCell>
                <StyledTableCell align="right">{motorbike.brand}</StyledTableCell>
                <StyledTableCell align="right">{motorbike.description}</StyledTableCell>
                <StyledTableCell align="right">{motorbike.cover_url}</StyledTableCell>
                <StyledTableCell align="right">{motorbike.price}</StyledTableCell>
                <StyledTableCell align="right"><Button>U</Button></StyledTableCell>
                <StyledTableCell align="right"><Button>X</Button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MotorbikeList;

//TODO: to implement MotorbikeList (urgent)
// load All motorbikes from api - done
// render motorbikes in table
// implement Add New Motorbike --> navigate to AddMotorbike Form
// Once successfully, redirect --> MotorbikeList
// implement update motorbike --> navigate to update form (not yet implemented)
// once updated --> redirect to MotorbikeList
// bis : implement upload photo, cover in updateForm
// implement remove motorbike
