import { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import PDF from "./PDF";

function Form() {
  const subjectsList = [
    "English Language",
    "Literature in English",
    "Physics",
    "Chemistry",
    "Mathematics",
    "Biology",
    "Computer Science",
    "Accounts",
    "Commerce",
    "Economics",
    "Political Science",
  ];

  const [student, setStudent] = useState("");
  const [grade, setGrade] = useState("XII");
  const [project, setProject] = useState("");
  const [subject, setSubject] = useState(subjectsList[0]);
  const [teacher, setTeacher] = useState("");
  const [year, setYear] = useState("2025");

  const [teachersList, setTeachersList] = useState(["Steve Smith"]);
  useEffect(() => {
    if (import.meta.env.VITE_TEACHERS) {
      setTeachersList(import.meta.env.VITE_TEACHERS.split(","));
    } else {
      console.log("No environment variable VITE_TEACHERS found");
    }
  }, []);

  const [formFilled, setFormFilled] = useState(false);
  const updateFormFilled = () => {
    const inputFields = document.querySelectorAll(".input");
    let isFormFilled = true;
    inputFields.forEach((inputField) => {
      if (inputField.value === "") {
        isFormFilled = false;
      }
    });
    setFormFilled(isFormFilled);
  };

  return (
    <form>
      <h2>Project Details</h2>
      <div className="fields">
        <div className="field">
          <label>Student</label>
          <input
            className="input"
            type="text"
            value={student}
            placeholder="Your name"
            onChange={(event) => {
              setStudent(event.target.value);
              updateFormFilled();
            }}
            required
          />
        </div>
        <div className="field">
          <label>Project</label>
          <input
            className="input"
            type="text"
            value={project}
            placeholder="Your project's name"
            onChange={(event) => {
              setProject(event.target.value);
              updateFormFilled();
            }}
            required
          />
        </div>
        <div className="field">
          <label>Class</label>
          <select
            value={grade}
            onChange={(event) => setGrade(event.target.value)}
            required
          >
            <option value="XII" selected={true}>
              XII
            </option>
            <option value="XI">XI</option>
          </select>
        </div>
        <div className="field">
          <label>Subject</label>
          <select
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            required
          >
            {subjectsList.map((subjectName) => (
              <option value={subjectName} key={subjectName}>
                {subjectName}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Teacher</label>
          <input
            className="input"
            type="text"
            value={teacher}
            placeholder="Subject teacher's name"
            list="teacher-names"
            onChange={(event) => {
              setTeacher(event.target.value);
              updateFormFilled();
            }}
            required
          />
          <datalist id="teacher-names">
            {teachersList.map((teacherName) => (
              <option value={teacherName} key={teacherName}>
                {teacherName}
              </option>
            ))}
          </datalist>
        </div>
        <div className="field">
          <label>Year</label>
          <input
            className="input"
            type="number"
            value={year}
            onChange={(event) => {
              setYear(event.target.value);
              updateFormFilled();
            }}
            required
          />
        </div>
      </div>
      {formFilled ? (
        <>
          <PDFDownloadLink
            document={
              <PDF
                studentName={student}
                grade={grade}
                projectName={project}
                subject={subject}
                teacher={teacher}
                year={year}
              />
            }
            fileName={`${subject} Project Front Pages`}
            style={{ textDecoration: "none" }}
          >
            {({ blob, url, loading, error }) =>
              loading ? (
                <button className="download" type="button">
                  <p>Loading...</p>
                </button>
              ) : (
                <button className="download" type="button">
                  <img src="/pdf.svg" alt="Download PDF" />
                  <p>Download PDF</p>
                </button>
              )
            }
          </PDFDownloadLink>
          <p className="verify">
            ⓘ Please verify the details in the PDF carefully
          </p>
        </>
      ) : null}
    </form>
  );
}

export default Form;