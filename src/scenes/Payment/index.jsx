import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Payment = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "shipment number", headerName: "SHIPMENT NUMBER", flex: 0.5 },
    { field: "vehicle no.", headerName: "VEHICLE NO." },
    {
      field: "veichle type",
      headerName: "VEICHLE TYPE",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "shipment created",
      headerName: "SHIPMENT CREATED",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "from",
      headerName: "FROM",
      flex: 1,
    },
    {
      field: "to",
      headerName: "TO",
      flex: 1,
    },
    {
      field: "expected time",
      headerName: "EXPECTED TIME",
      flex: 1,
    },
    {
      field: "gateintime vs arrivaltime",
      headerName: "GATEINTIME VS ARRIVALTIME",
      flex: 1,
    },
    {
      field: "departuretime vs gateintime",
      headerName: "DEPARTURETIME VS GATEINTIME",
      flex: 1,
    },
    {
      field: "podc",
      headerName: "PODC",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="PAYMENT"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.yellowAccent[200],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.yellowAccent[200],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          sx={{ overflowX: "scroll" }}
        />
      </Box>
    </Box>
  );
};

export default Payment;
