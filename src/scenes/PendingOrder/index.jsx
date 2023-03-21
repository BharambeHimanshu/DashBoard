import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const PendingOrder = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "unqiue ID", headerName: "UNIQUE ID", flex: 1 },
    { field: "Consignor", headerName: "CONSIGNOR", flex:1 },
    {
      field: "Consignee",
      headerName: "CONSIGNEE",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "material",
      headerName: "MATERIAL",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "Vehicle Type",
      headerName: "VEHICLE TYPE",
      flex: 1,
    },
    {
      field: "expected Pickup Date",
      headerName: "EXPECTED PICKUP DATE",
      flex: 1,
    },
    {
      field: "Order By",
      headerName: "ORDER BY",
      flex: 1,
    },
    {
      field: "Order Days",
      headerName: "ORDER DAYS",
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
      field: "expected DELIVERY Date",
      headerName: "EXPECTED DELIVERY DATE",
      flex: 1,
    },
    {
      field: "Order Number",
      headerName: "ORDER NUMBER",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="PENDING ORDER"
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

export default PendingOrder;
