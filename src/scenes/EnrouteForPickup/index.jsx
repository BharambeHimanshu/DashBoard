import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const EnrouteForPickup = () => {
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
      field: "material",
      headerName: "MATERIAL",
      flex: 1,
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
      field: "Expected Pickup Date",
      headerName: "EXPECTED PICKUP DATE",
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
      field: "expected Delivery Date",
      headerName: "EXPECTED DELIVERY DATE",
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
        title="ENROUTE FOR PICKUP"
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

export default EnrouteForPickup;
