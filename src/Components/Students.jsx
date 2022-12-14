import React, { useContext, useState } from "react";
import studentContext from "../contextAPI/StudentContext";
import SubmitForm from "../Pages/SubmitForm";
// import { StudentDetails } from "./StudentDetails";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ADD_STUDENT } from "../redux/action";
import { useEffect } from "react";

const mapStateToProps = (state) => ({
  ...state.user,
});

// const mapDispatchToProps = dispatch => ({
//   onLoad: (payload, token) =>
//     dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
//   onRedirect: () =>
//     dispatch({ type: REDIRECT })
// });



function Students(props) {
  const [hide, setHide] = useState(false);
  const { student } = useContext(studentContext);
 

  const handlechange = () => {
    setHide(!hide);
  };
  // const storeData = (data) =>{
  //   setStudents([...students,data])
  // }
  const toggle = () => {
    //It is a name used to handle on/off
    setHide((hide) => !hide);
    // setValue((value)=> value+1)
  };

  console.log(props.students)
  return (
    <>
      {hide ? (
        <SubmitForm toggle={toggle} />
      ) : (
        <div
          className="bg-light m-auto"
          style={{ height: "15vh", width: "86vw" }}
        >
          <div className="d-flex justify-content-around p-4 fs-2">
            <div>Student Details</div>
            <div>
              <button
                type="button"
                className="btn btn-primary p-2 fs-3"
                onClick={handlechange}
              >
                Add Student
              </button>
            </div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Course</th>
                <th scope="col">Batch</th>
                <th scope="col">Change</th>
              </tr>
            </thead>
            <tbody>
              {props.students?.map((student, index) => (
                <tr key={index}>
                  <td scope="col">{student.name}</td>
                  <td scope="col">{student.age}</td>
                  <td scope="col">{student.course}</td>
                  <td scope="col">{student.batch}</td>
                  <td scope="col">
                    <Link to={`/students/${student.id}`}>Edit</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default connect(mapStateToProps)(Students);
