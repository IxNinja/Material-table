import React, { useState, forwardRef } from "react";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const App = () => {
  const [tableData, setTableData] = useState([
    {
      srno: "01",
      nameofemployee: "Firstname Lastname",
      emailid: "Firstname.lastname.scrobits@gmail.com",
      contact: +910123456789,
      jobtype: "F"
    },
    {
      srno: "01",
      nameofemployee: "Firstname Lastname",
      emailid: "Firstname.lastname.scrobits@gmail.com",
      contact: +910123456789,
      jobtype: "F"
    },
    {
      srno: "01",
      nameofemployee: "Firstname Lastname",
      emailid: "Firstname.lastname.scrobits@gmail.com",
      contact: +910123456789,
      jobtype: "P"
    },
    {
      srno: "01",
      nameofemployee: "Firstname Lastname",
      emailid: "Firstname.lastname.scrobits@gmail.com",
      contact: +910123456789,
      jobtype: "F"
    }
  ]);

  const columns = [
    { title: "Sr. No.", field: "srno" },
    { title: "Name of Employee", field: "nameofemployee" },
    { title: "Email-Id", field: "emailid" },
    { title: "Contact", field: "contact" },
    {
      title: "Job Type",
      field: "jobtype",
      lookup: { F: "Full-Time", P: "Part-time" }
    }
  ];

  return (
    <div className="App">
      <h1 align="center">React App</h1>
      <h4 align="center">Material Table</h4>
      <MaterialTable
        icons={tableIcons}
        columns={columns}
        data={tableData}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setTableData([...tableData, newRow]);
              setTimeout(() => resolve(), 500);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData[oldRow.tableData.id] = newRow;
              setTableData(updatedData);
              setTimeout(() => resolve(), 500);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData.splice(selectedRow.tableData.id, 1);
              setTableData(updatedData);
              setTimeout(() => resolve(), 1000);
            })
        }}
        options={{
          searchFieldVariant: "outlined",
          paging: false,
          actionsColumnIndex: -1
        }}
        title="Employee Information"
      />
    </div>
  );
};

export default App;
