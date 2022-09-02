import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import studentContext from "../contextAPI/StudentContext";
import { MODIFY_STUDENT } from "../redux/action";

const mapStateToProps = (state) => {
  return { ...state.user };
};

const mapDispatchToProps = (dispatch) => ({
  edit: (payload) => {
    dispatch({ type: MODIFY_STUDENT, payload });
  },
});

function UpdateForm(props) {
  const [value, setValue] = useState({
    name: "",
    age: "",
    batch: "",
    course: "",
  });
  const navigate = useNavigate();
  // const { update, student } = useContext(studentContext);

  // console.count("Update form outside useEffect")

  let _id = useParams();
  
  useEffect(() => {
    // setTimeout(() => {
    const data = props.students?.find((item) => item.id === Number(_id.id));
    if (data) {
      setValue(data);
    }
    // }, 2000);
    // console.count("Update form inside useEffect")
  }, [_id.id]);

  const handleChange = (e) => {
    let inputValue = e.target.value;
    let name = e.target.name;
    setValue({ ...value, [name]: inputValue });
  };
  const submitted = (e) => {
    // setArr([...arr, { ...value }]);
    // setVisible(!visible);
    // update(_id.id, value);
    props.edit(value)
    navigate("/students");
    e.preventDefault();
  };

  const goBack = () => {
    navigate("/students");
  };

  return (
    <div>
      <Form onSubmit={submitted}>
        <div
          className="d-flex flex-column justify-content-around m-auto"
          style={{ height: "60vh", width: "80vw" }}
        >
          <div className="row">
            <div className="col ">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                value={value.name}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                name="age"
                placeholder="Age"
                value={value.age}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Course"
                name="course"
                value={value.course}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Batch"
                name="batch"
                value={value.batch}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <input
              type="button"
              value="Cancel"
              className="btn btn-secondary px-5 "
              onClick={goBack}
            />
            <input
              type="button"
              value="Update"
              className="btn btn-primary px-5 mx-5"
              onClick={submitted}
            />
          </div>
        </div>
      </Form>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);
