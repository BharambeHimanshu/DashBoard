import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Intransit = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "unqiue ID", headerName: "UNIQUE ID", width: 150 },
    { field: "eway exp", headerName: "EWAY EXP", width: 150 },
    {
      field: "gc number",
      headerName: "GC NUMBER",
      cellClassName: "name-column--cell",
      width: 150,
    },
    {
      field: "vehicleve no.",
      headerName: "VEHICLEVE NO.",
      width: 150,
    },
    {
      field: "driver no.",
      headerName: "DRIVER NO.",
      width: 150,

    },
    {
      field: "vehicle type",
      headerName: "VEHICLE TYPE",
      width: 150,

    },
    {
      field: "remaining kms",
      headerName: "REMAINING KMS",
      width: 150,

    },
    {
      field: "current loc.",
      headerName: "CURRENT LOC.",
      width: 150,

    },
    {
      field: "Consignor",
      headerName: "CONSIGNOR",
      width: 150,

    },
    {
      field: "Consignee",
      headerName: "CONSIGNEE",
      width: 150,

    },
    {
      field: "Consignee add.",
      headerName: "CONSIGNEE ADD.",
      width: 150,

    },
    {
      field: "fit",
      headerName: "FIT",
      width: 150,

    },
    {
      field: "inc",
      headerName: "INC",
      width: 150,

    },
    {
      field: "puc",
      headerName: "PUC",
      width: 150,

    },
    {
      field: "np",
      headerName: "NP",
      width: 150,

    },
    {
      field: "permit",
      headerName: "PERMIT",
      width: 150,

    },
    {
      field: "expected time",
      headerName: "EXPECTED TIME",
      width: 150,
 
    },
    {
      field: "",
      headerName: "GATEINTIME VS ARRIVALTIME",
      width: 200,
 
    },
    {
      field: "departureTime vs gateInTime",
      headerName: "DEPARTURETIME VS GATEINTIME",
      width: 200,
 
    },
    {
      field: "Shipment Created",
      headerName: "SHIPMENT CREATED",
      width: 150,

    },
    {
      field: "Shipment Number",
      headerName: "SHIPMENT NUMBER",
      width: 150,

    },
  ];

  return (
    <Box m="20px">
      <Header
        title="INTRANSIT"
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

export default Intransit;
