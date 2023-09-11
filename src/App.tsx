import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './App.css';
const ExcelJS = require("exceljs");

function App() {
  const headerCellBorderStyle = {
    top: { style: "thin", color: { argb: "black" } },
    left: { style: "thin", color: { argb: "black" } },
    bottom: { style: "thin", color: { argb: "black" } },
    right: { style: "thin", color: { argb: "black" } },
  };

  type TrainingProgressReportItemType = {
    EmployeeId: number;
    LearnerName: string;
    Location: string;
    Organization: string;
    EnrolledCourseCount: number;
    AttendanceRate: number;
    CompletedCourseCount: number;
    InProgressCourseCount: number;
    AbandonedCourseCount: number;
  }

  const trainingProgressDataList: TrainingProgressReportItemType[] = [
    {
      EmployeeId: 1,
      LearnerName: "John Doe",
      Location: "New York",
      Organization: "ABC Corp",
      EnrolledCourseCount: 5,
      AttendanceRate: 85,
      CompletedCourseCount: 3,
      InProgressCourseCount: 1,
      AbandonedCourseCount: 1,
    },
    {
      EmployeeId: 2,
      LearnerName: "Jane Smith",
      Location: "Los Angeles",
      Organization: "XYZ Inc",
      EnrolledCourseCount: 8,
      AttendanceRate: 92,
      CompletedCourseCount: 6,
      InProgressCourseCount: 1,
      AbandonedCourseCount: 1,
    },
    {
      EmployeeId: 3,
      LearnerName: "Michael Johnson",
      Location: "Chicago",
      Organization: "LMN Ltd",
      EnrolledCourseCount: 6,
      AttendanceRate: 78,
      CompletedCourseCount: 4,
      InProgressCourseCount: 1,
      AbandonedCourseCount: 1,
    },
    {
      EmployeeId: 4,
      LearnerName: "Emily Davis",
      Location: "San Francisco",
      Organization: "PQR Co",
      EnrolledCourseCount: 7,
      AttendanceRate: 89,
      CompletedCourseCount: 5,
      InProgressCourseCount: 1,
      AbandonedCourseCount: 1,
    },
    {
      EmployeeId: 5,
      LearnerName: "David Wilson",
      Location: "Houston",
      Organization: "JKL Enterprises",
      EnrolledCourseCount: 4,
      AttendanceRate: 75,
      CompletedCourseCount: 2,
      InProgressCourseCount: 1,
      AbandonedCourseCount: 1,
    },
    {
      EmployeeId: 6,
      LearnerName: "Sarah Brown",
      Location: "Miami",
      Organization: "UVW Corp",
      EnrolledCourseCount: 9,
      AttendanceRate: 94,
      CompletedCourseCount: 7,
      InProgressCourseCount: 1,
      AbandonedCourseCount: 1,
    },
    {
      EmployeeId: 7,
      LearnerName: "James Lee",
      Location: "Seattle",
      Organization: "RST Ltd",
      EnrolledCourseCount: 6,
      AttendanceRate: 80,
      CompletedCourseCount: 4,
      InProgressCourseCount: 1,
      AbandonedCourseCount: 1,
    },
    {
      EmployeeId: 8,
      LearnerName: "Olivia Martinez",
      Location: "Dallas",
      Organization: "EFG Inc",
      EnrolledCourseCount: 10,
      AttendanceRate: 91,
      CompletedCourseCount: 8,
      InProgressCourseCount: 1,
      AbandonedCourseCount: 1,
    },
    {
      EmployeeId: 9,
      LearnerName: "Ethan Turner",
      Location: "Boston",
      Organization: "HIJ Co",
      EnrolledCourseCount: 7,
      AttendanceRate: 87,
      CompletedCourseCount: 5,
      InProgressCourseCount: 1,
      AbandonedCourseCount: 1,
    },
    {
      EmployeeId: 10,
      LearnerName: "Ava Clark",
      Location: "Atlanta",
      Organization: "NOP Enterprises",
      EnrolledCourseCount: 5,
      AttendanceRate: 84,
      CompletedCourseCount: 3,
      InProgressCourseCount: 1,
      AbandonedCourseCount: 1,
    },
    {
      EmployeeId: 11,
      LearnerName: "Daniel Garcia",
      Location: "Phoenix",
      Organization: "MNO Corp",
      EnrolledCourseCount: 6,
      AttendanceRate: 88,
      CompletedCourseCount: 4,
      InProgressCourseCount: 1,
      AbandonedCourseCount: 1,
    },
    {
      EmployeeId: 12,
      LearnerName: "Sophia Hernandez",
      Location: "Denver",
      Organization: "QWE Ltd",
      EnrolledCourseCount: 7,
      AttendanceRate: 93,
      CompletedCourseCount: 5,
      InProgressCourseCount: 1,
      AbandonedCourseCount: 1,
    },
    {
      EmployeeId: 13,
      LearnerName: "William White",
      Location: "Philadelphia",
      Organization: "GHI Inc",
      EnrolledCourseCount: 9,
      AttendanceRate: 79,
      CompletedCourseCount: 7,
      InProgressCourseCount: 1,
      AbandonedCourseCount: 1,
    },
    {
      EmployeeId: 14,
      LearnerName: "Mia Taylor",
      Location: "Detroit",
      Organization: "JKL Co",
      EnrolledCourseCount: 8,
      AttendanceRate: 82,
      CompletedCourseCount: 6,
      InProgressCourseCount: 1,
      AbandonedCourseCount: 1,
    },
    {
      EmployeeId: 15,
      LearnerName: "Alexander Martinez",
      Location: "San Diego",
      Organization: "PQR Enterprises",
      EnrolledCourseCount: 7,
      AttendanceRate: 90,
      CompletedCourseCount: 5,
      InProgressCourseCount: 1,
      AbandonedCourseCount: 1,
    },
  ];

  const downloadHandler = async () => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Training Progress");
    sheet.properties.defaultRowHeight = 20;
    sheet.properties.columnCount = 4
    sheet.properties.actualColumnCount = 4

    // APPLY BORDER
    sheet.getRow(5).border = {
      top: { style: "thin", color: { argb: "black" } },
      left: { style: "thin", color: { argb: "black" } },
      bottom: { style: "thin", color: { argb: "black" } },
      right: { style: "thin", color: { argb: "black" } },
    };

    sheet.getRow(5).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'F0F5FF' },
    };

    /*TITLE*/
    sheet.mergeCells('A1', 'D1');
    sheet.getCell('A1').value = 'Training Progress Report'
    sheet.mergeCells('A2', 'D2');
    sheet.getCell('A2').value = `Downloaded : ${String(new Date().toLocaleString("en-US").replace(",", ""))}`
    sheet.getCell('A1').alignment = {
      vertical: "middle", horizontal: "center"
    }
    sheet.getCell('A2').alignment = {
      vertical: "middle", horizontal: "center"
    }
    sheet.getRow(1).font = {
      family: 4,
      size: 18,
      bold: true,
      underline: 'double'
    };
    sheet.getRow(2).font = {
      family: 4,
      size: 16,
      bold: true,
    };
    sheet.getRow(1).height = 30
    sheet.getRow(2).height = 30
    //  ==============================


    sheet.getRow(5).font = {
      family: 4,
      size: 12,
      bold: true,
    };

    sheet.getRow(5).values = [
      "Employee ID", "Learner Name", "Location", "Organization"
    ]

    sheet.columns = [
      {
        key: "EmployeeId",
        width: 20
      },
      {
        key: "LearnerName",
        width: 40
      },
      {
        key: "Location",
        width: 30
      },
      {
        key: "Organization",
        width: 30
      },
    ]

    // sheet.columns = [
    //   {
    //     header: "ID",
    //     key: "EmployeeId",
    //     width: 20
    //   },
    //   {
    //     header: "Learner Name",
    //     key: "LearnerName",
    //     width: 40
    //   },
    //   {
    //     header: "Location",
    //     key: "Location",
    //     width: 30
    //   },
    //   {
    //     header: "Organization",
    //     key: "Organization",
    //     width: 30
    //   },
    // ]

    await trainingProgressDataList.map(async (item, index) => {
      sheet.addRow({
        EmployeeId: item?.EmployeeId,
        LearnerName: item?.LearnerName,
        Location: item?.Location,
        Organization: item?.Organization
      });
    })

    await workbook.xlsx.writeBuffer().then(function (data: any) {
      const blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      const timenow = String(String(new Date().toLocaleString("en-US").replace(/,|:/g, ".")))
      anchor.download = `${timenow}.xlsx`;
      anchor.click();
      window.URL.revokeObjectURL(url);
    });
  }

  return (
    <div className="container">
      <Button onClick={downloadHandler} className='my-4'>Download Report</Button>
      <Table striped bordered hover>
        <caption>Training Progress Report</caption>
        <thead>
          <tr className="table-header">
            <th scope="col" className="table-heading-title">Emp. ID</th>
            <th scope="col" className="table-heading-title">Learner Name</th>
            <th scope="col" className="table-heading-title">Location</th>
            <th scope="col" className="table-heading-title">Organization</th>
            {/* <th scope="col" className="table-heading-title">No. Of Courses Enrolled</th>
            <th scope="col" className="table-heading-title">Attendance Rate</th>
            <th scope="col" className="table-heading-title">Completed</th>
            <th scope="col" className="table-heading-title">In Progress</th>
            <th scope="col" className="table-heading-title">Abandoned</th> */}

          </tr>
        </thead>

        <tbody className="table-body">
          {
            trainingProgressDataList.map(item => (
              <tr id="table-row" key={item.EmployeeId}>
                <td id="table-data">{item.EmployeeId}</td>
                <td id="table-data1">
                  <span>{item.LearnerName}</span>
                </td>
                <td id="table-data" className="">
                  <i id="side-icon1" className="fa fa-map-marker fa-fw me-3 mr-2" aria-hidden="true"></i>
                  <span>{item.Location}</span>
                </td>
                <td id="table-data">{item.Organization}</td>
                {/* <td id="table-data">{item.EnrolledCourseCount}</td>
                <td id="table-data">{item.AttendanceRate}%</td>
                <td id="table-data">{item.CompletedCourseCount}</td>
                <td id="table-data">{item.InProgressCourseCount}</td>
                <td id="table-data">{item.AbandonedCourseCount}</td> */}
              </tr>
            ))
          }

        </tbody>
      </Table>
    </div>
  );
}

export default App;
