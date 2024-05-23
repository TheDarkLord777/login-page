import { useEffect, useState } from "react";
import axios from "axios";
import { ChangeValues, Heading, StyledImage } from "./AdminTomorqa.styled.ts";
import Change from "../Change/Change.tsx";

interface Course {
  id: string;
  name: string;
  duration: number;
  passedCount: number;
  cover: string;
  status: string;
}

const AdminFermer = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [change, setChange] = useState<boolean>(false);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `https://edu.fermermaktab.uz/api/v1/activities?limit=8&page=1`,

          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          },
        );
        setCourses(response.data.data);
        console.log(courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);
  useEffect(() => {
    console.log(courses); // This will log the updated state of 'courses'
  }, [courses]);
  return (
    <div>
      <h1 style={{ height: "100px", textAlign: "center" }}>Mening tomorqam</h1>
      {change && (
        <ChangeValues>
          <Change />
        </ChangeValues>
      )}

      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {courses.map((course) => (
          <li
            onClick={() => {
              setChange((prevState) => !prevState);
            }}
            key={course.id}
            style={{
              cursor: "pointer",
              width: "23%",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
              gap: "4px",
              marginBottom: "40px",
            }}
          >
            <StyledImage src={course.cover} alt="Course Cover"></StyledImage>
            <Heading>{course.name}</Heading>
            <p>
              <strong>ID:</strong> {course.id}
            </p>
            <p>
              <strong>Duration:</strong> {course.duration} minutes
            </p>
            <p>
              <strong>Passed Count:</strong> {course.passedCount}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminFermer;
