import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function useFetch() {
  let params = useParams();

  const [course, setCourse] = useState(); // course page
  const [isPending, setIsPending] = useState(true); // course page
  const [error, setError] = useState(false); // course page

  const [allCourse, setAllCourse] = useState([]); // all courses page

  useEffect(() => {
    fetch("https://react-b2956-default-rtdb.firebaseio.com/courses.json")
      .then((res) => res.json())
      .then((data) => {
        setAllCourse(data);
        let findCourse = data.find((course) => {
          return course.id === +params.courseID;
        });
        findCourse && setCourse(findCourse);
        setIsPending(false);
        setError(false);
      })
      .catch((err) => {
        setError(true);
        setIsPending(false);
      });
  }, []);
  // }, [params.courseID]);

  return [course, isPending, error, allCourse];
}
