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
    { field: "unqiue ID", headerName: "UNIQUE ID" },
    { field: "eway exp", headerName: "EWAY EXP" },
    {
      field: "gc number",
      headerName: "GC NUMBER",
      cellClassName: "name-column--cell",
    },
    {
      field: "vehicleve no.",
      headerName: "VEHICLEVE NO.",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "driver no.",
      headerName: "DRIVER NO.",

    },
    {
      field: "vehicle type",
      headerName: "VEHICLE TYPE",

    },
    {
      field: "remaining kms",
      headerName: "REMAINING KMS",

    },
    {
      field: "current loc.",
      headerName: "CURRENT LOC.",

    },
    {
      field: "Consignor",
      headerName: "CONSIGNOR",

    },
    {
      field: "Consignee",
      headerName: "CONSIGNEE",

    },
    {
      field: "Consignee add.",
      headerName: "CONSIGNEE ADD.",

    },
    {
      field: "fit",
      headerName: "FIT",

    },
    {
      field: "inc",
      headerName: "INC",

    },
    {
      field: "puc",
      headerName: "PUC",

    },
    {
      field: "np",
      headerName: "NP",

    },
    {
      field: "permit",
      headerName: "PERMIT",

    },
    {
      field: "expected time",
      headerName: "EXPECTED TIME",
 
    },
    {
      field: "",
      headerName: "GATEINTIME VS ARRIVALTIME",
 
    },
    {
      field: "departureTime vs gateInTime",
      headerName: "DEPARTURETIME VS GATEINTIME",
 
    },
    {
      field: "Shipment Created",
      headerName: "SHIPMENT CREATED",

    },
    {
      field: "Shipment Number",
      headerName: "SHIPMENT NUMBER",

    },
  ];

  return (
    <Box m="20px">
      <Header
        title="AT PICKUP"
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
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
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
