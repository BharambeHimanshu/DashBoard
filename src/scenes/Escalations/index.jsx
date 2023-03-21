import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Escalations = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "gc number", headerName: "GC NUMBER", flex: 0.5 },
    { field: "consigner", headerName: "CONSIGNER" },
    {
      field: "consignee",
      headerName: "CONSIGNEE",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "shipment number",
      headerName: "SHIPMENT NUMBER",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "issue name",
      headerName: "ISSUE NAME",
      flex: 1,
    },
    {
      field: "created at",
      headerName: "CREATED AT",
      flex: 1,
    },
    {
      field: "remarks",
      headerName: "REMARKS",
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

export default Escalations;
