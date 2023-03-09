import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function useFetch() {
  let params = useParams();
  console.log("params: ", params);

  const [course, setCourse] = useState();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
      fetch("https://react-b2956-default-rtdb.firebaseio.com/courses.json")
        .then((res) => res.json())
        .then((data) => {
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
  }, [params.courseID]);

  return [course, isPending, error];
}
