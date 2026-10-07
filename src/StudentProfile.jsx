function StudentProfile(props) {
  return (
    <div className="student-profile">
      <h2>{props.name}</h2>
      <p>Department: {props.department}</p>
      <p>Year: {props.year}</p>
    </div>
  );
}

export default StudentProfile;