import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const QBR = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "shipment number", headerName: "SHIPMENT NUMBER", flex: 0.5 },
    { field: "gc number", headerName: "GC NUMBER" },
    {
      field: "so number",
      headerName: "S.O NUMBER",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "order by",
      headerName: "ORDER BY",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "po name",
      headerName: "PO NAME",
      flex: 1,
    },
    {
      field: "po date",
      headerName: "PO DATE",
      flex: 1,
    },
    {
      field: "form",
      headerName: "Form",
      flex: 1,
    },
    {
      field: "to",
      headerName: "To",
      flex: 1,
    },
    {
      field: "pincode",
      headerName: "PINCODE",
      flex: 1,
    },
    {
      field: "material",
      headerName: "MATERIAL",
      flex: 1,
    },
    {
      field: "bill number",
      headerName: "BILL NUMBER",
      flex: 1,
    },
    {
      field: "bill date",
      headerName: "BILL DATE",
      flex: 1,
    },
    {
      field: "bill submited or genr.",
      headerName: "BILL SUBMITED OR GENR.",
      flex: 1,
    },
    {
      field: "grm number",
      headerName: "GRM NUMBER",
      flex: 1,
    },
    {
      field: "bill status",
      headerName: "BILL STATUS",
      flex: 1,
    },
    {
      field: "total distance",
      headerName: "TOTAL DISTANCE",
      flex: 1,
    },
    {
      field: "additional distance",
      headerName: "ADDITIONAL DISTANCE",
      flex: 1,
    },
    {
      field: "zone",
      headerName: "ZONE",
      flex: 1,
    },
    {
      field: "rate",
      headerName: "RATE",
      flex: 1,
    },
    {
      field: "loading",
      headerName: "LOADING",
      flex: 1,
    },
    {
      field: "unloading",
      headerName: "UNLOADING",
      flex: 1,
    },
    {
      field: "halting charger",
      headerName: "HALTING CHARGER",
      flex: 1,
    },
    {
      field: "two point loading/unloading",
      headerName: "TWO POINT LOADING/UNLOADING",
      flex: 1,
    },
    {
      field: "additional cost",
      headerName: "ADDITIONAL COST",
      flex: 1,
    },
    {
      field: "taxable value",
      headerName: "TAXABLE VALUE",
      flex: 1,
    },
    {
      field: "gst",
      headerName: "GST",
      flex: 1,
    },
    {
      field: "grand total",
      headerName: "GRAND TOTAL",
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
        title="QBR"
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

export default QBR;
