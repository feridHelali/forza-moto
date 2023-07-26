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
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../../Alert/AlertContext";
import { AlertActions } from "../../Alert/alert.actions";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import getPhotoUrl from "../../../utilities/getPhotoUrl";
import { TableFooter } from "@mui/material";

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
  const {
    motorbikes,
    page,
    setPage,
    limit,
    setLimit,
    query,
    setQuery,
    pagination,
    removeMotorbike,
  } = useMotorbikeData();
  const navigate = useNavigate();
  const [_, dispatch] = useAlert();

  console.log(limit,page,query,)

  async function handleRemoveMotorbike(id) {
    const result = await removeMotorbike(id);
    if (result.status) {
      dispatch(AlertActions.showInfoAlert(result.message));
    } else {
      dispatch(AlertActions.showErrorAlert(result.message));
    }
  }

  return (
    <div className="motorbikelist">
      <div className="motorbikelist__head">
        <h1>Motorbike List</h1>
        <input 
        placeholder="Search" 
        value={query}
        onChange={e=>setQuery(e.target.value)}
        />
        <AddToPhotosIcon onClick={() => navigate("/product/add")} />
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
                <StyledTableCell align="right">
                  {motorbike.brand}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {motorbike.description}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <img
                    src={getPhotoUrl(motorbike.cover_url)}
                    alt="motorbike"
                    style={{ width: "100px" }}
                  />
                </StyledTableCell>
                <StyledTableCell align="right">
                  {motorbike.price}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <AssignmentIcon
                    onClick={() => navigate(`/product/update/${motorbike._id}`)}
                  />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <DisabledByDefaultIcon
                    onClick={() => handleRemoveMotorbike(motorbike._id)}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          <TableFooter></TableFooter>
        </Table>
        <Stack spacing={2}>
          <Pagination 
          count={Math.floor(motorbikes.length/limit)+1} page={page} 
          variant="outlined" shape="rounded" 
          showLastButton={!pagination?.next}
          onChange={(e,page)=>{
           setPage(page)
          }}
          />
        </Stack>
      </TableContainer>
    </div>
  );
}

export default MotorbikeList;

//TODO: to implement MotorbikeList (urgent)
// load All motorbikes from api - done
// render motorbikes in table - done
// implement Add New Motorbike --> navigate to AddMotorbike Form -- done
// Once successfully, redirect --> MotorbikeList -- done
// implement update motorbike --> navigate to update form done
// once updated --> redirect to MotorbikeList -- done
// bis : implement upload photo, cover in updateForm -- done
// implement remove motorbike -- done
