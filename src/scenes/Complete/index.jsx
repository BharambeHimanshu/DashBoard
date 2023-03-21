import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Complete = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "shipment number", headerName: "SHIPMENT NUMBER", flex: 0.5 },
    { field: "gc number", headerName: "GC NUMBER" },
    {
      field: "stages",
      headerName: "STAGES",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "vehicle no.",
      headerName: "VEHICLE NO.",
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
      field: "material name",
      headerName: "MATERIAL NAME",
      flex: 1,
    },
    {
      field: "escalations",
      headerName: "ESCALATIONS",
      flex: 1,
    },
    {
      field: "tracking updte",
      headerName: "TRACKING UPDATE",
      flex: 1,
    },
    {
      field: "abnormalities",
      headerName: "ABNORMALITIES",
      flex: 1,
    },
    {
      field: "consignor",
      headerName: "CONSIGNOR",
      flex: 1,
    },
    {
      field: "consignee",
      headerName: "CONSIGNEE",
      flex: 1,
    },
    {
      field: "contract edd",
      headerName: "CONTRACT EDD",
      flex: 1,
    },
    {
      field: "order by edd",
      headerName: "ORDER BY EDD",
      flex: 1,
    },
    {
      field: "actual arrival",
      headerName: "ACTUAL ARRIVAL",
      flex: 1,
    },
    {
      field: "at vs gt",
      headerName: "AT VS GT",
      flex: 1,
    },
    {
      field: "gt vs dt",
      headerName: "GT VS DT",
      flex: 1,
    },
    {
      field: "gt vs ls",
      headerName: "GT VS LS",
      flex: 1,
    },
    {
      field: "ls vs le",
      headerName: "LS VS LE",
      flex: 1,
    },
    {
      field: "le vs dt",
      headerName: "LE VS DT",
      flex: 1,
    },
    {
      field: "at vs dt",
      headerName: "AT VS DT",
      flex: 1,
    },
    {
      field: "transit time",
      headerName: "TRANSIT TIME",
      flex: 1,
    },
    {
      field: "unloading at vs unls",
      headerName: "UNLOADING AT VS UNLS",
      flex: 1,
    },
    {
      field: "unloading unls vs unle",
      headerName: "UNLOADING UNLS VS UNLE",
      flex: 1,
    },
    {
      field: "unloading unle vs dt",
      headerName: "UNLOADING UNLE VS DT",
      flex: 1,
    },
    {
      field: "unloading at vs dt",
      headerName: "UNLOADING AT VS DT",
      flex: 1,
    },
    {
      field: "total unloading time",
      headerName: "TOTAL UNLOADING TIME",
      flex: 1,
    },
    {
      field: "pod",
      headerName: "POD",
      flex: 1,
    },
    {
      field: "pod since",
      headerName: "POD SINCE",
      flex: 1,
    },
    {
      field: "pod pic",
      headerName: "POD PIC",
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

export default Complete;
