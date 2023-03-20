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
    { field: "unqiue ID", headerName: "UNIQUE ID", flex: 0.5 },
    { field: "eway exp", headerName: "EWAY EXP" },
    {
      field: "gc number",
      headerName: "GC NUMBER",
      flex: 1,
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
      flex: 1,
    },
    {
      field: "vehicle type",
      headerName: "VEHICLE TYPE",
      flex: 1,
    },
    {
      field: "remaining kms",
      headerName: "REMAINING KMS",
      flex: 1,
    },
    {
      field: "current loc.",
      headerName: "CURRENT LOC.",
      flex: 1,
    },
    {
      field: "Consignor",
      headerName: "CONSIGNOR",
      flex: 1,
    },
    {
      field: "Consignee",
      headerName: "CONSIGNEE",
      flex: 1,
    },
    {
      field: "Consignee add.",
      headerName: "CONSIGNEE ADD.",
      flex: 1,
    },
    {
      field: "fit",
      headerName: "FIT",
      flex: 1,
    },
    {
      field: "inc",
      headerName: "INC",
      flex: 1,
    },
    {
      field: "puc",
      headerName: "PUC",
      flex: 1,
    },
    {
      field: "np",
      headerName: "NP",
      flex: 1,
    },
    {
      field: "permit",
      headerName: "PERMIT",
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
      field: "departureTime vs gateInTime",
      headerName: "DEPARTURETIME VS GATEINTIME",
      flex: 1,
    },
    {
      field: "Shipment Created",
      headerName: "SHIPMENT CREATED",
      flex: 1,
    },
    {
      field: "Shipment Number",
      headerName: "SHIPMENT NUMBER",
      flex: 1,
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
        />
      </Box>
    </Box>
  );
};

export default Intransit;
