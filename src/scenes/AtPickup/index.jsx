import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const AtPickup = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "unqiue ID", headerName: "UNIQUE ID", flex: 0.5 },
    { field: "Vehicle No.", headerName: "VEHICLE NO." },
    {
      field: "Consignor",
      headerName: "CONSIGNOR",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "Consignee",
      headerName: "CONSIGNEE",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "Vehicle Type",
      headerName: "VEHICLE TYPE",
      flex: 1,
    },
    {
      field: "Shipment Created",
      headerName: "SHIPMENT CREATED",
      flex: 1,
    },
    {
      field: "Target Time",
      headerName: "TARGET TIME",
      flex: 1,
    },
    {
      field: "SHPL instructions",
      headerName: "SHPL INSTRUCTION",
      flex: 1,
    },
    {
      field: "Apml Remarks",
      headerName: "APML REMARKS",
      flex: 1,
    },
    {
      field: "At",
      headerName: "At",
      flex: 1,
    },
    {
      field: "Gi",
      headerName: "Gi",
      flex: 1,
    },
    {
      field: "Ls",
      headerName: "Ls",
      flex: 1,
    },
    {
      field: "Le",
      headerName: "Le",
      flex: 1,
    },
    {
      field: "Now Vs ArrivalTime",
      headerName: "NOW VS ARRIVALTIME",
      flex: 1,
    },
    {
      field: "GateInTime Vs ArrivalTime",
      headerName: "GATEINTIME VS ARRIVALTIME",
      flex: 1,
    },
    {
      field: "Load.Start Vs GateInTime",
      headerName: "LOAD.START VS GATEINTIME",
      flex: 1,
    },
    {
      field: "Load.End Vs Load.Start",
      headerName: "LOAD.END VS LOAD.START",
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

export default AtPickup;
