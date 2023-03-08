import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import NavBar from "../../SiteBar/NavBar/NavBar";
import TopBar from "../../SiteBar/TopBar/TopBar";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Course.css";
import {
  FaChalkboardTeacher,
  FaClock,
  FaFileVideo,
  FaUserGraduate,
} from "react-icons/fa";

export default function Course() {
  let params = useParams();

  const [course, setCourse] = useState();

  useEffect(() => {
    fetch("https://react-b2956-default-rtdb.firebaseio.com/courses.json")
      .then((res) => res.json())
      .then((data) => {
        let findCourse = data.find((course) => {
          return course.id === params.courseID;
        });
        findCourse && setCourse(findCourse);
      });
  }, []);

  return (
    <>
      <TopBar></TopBar>
      <NavBar></NavBar>

      {course && (
        <div className="course-page">
          <div className="container-fluid container-lg">
            {/* Course Page title */}
            <div className="course-page__header">
              <span className="course-page__header-title">{course.title}</span>
              <div className="breadcrumb">
                <ul className="breadcrumb-ul d-flex p-0 text-white">
                  <li className="breadcrumb-li home">
                    <Link to="/">خانه</Link>
                  </li>
                  <span className="divider">/</span>
                  <li className="breadcrumb-li" aria-current="page">
                    {course.group}
                  </li>
                </ul>
              </div>
            </div>
            {/* Course Page Info Course */}
            <div className="course-page__info">
              <Row>
                <Col xs={12} md={6}>
                  <div className="course-page__info-right">
                    <video controls poster={course.img} width={"100%"}></video>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="course-page__info-left m-2 m-lg-4 px-4 px-md-0">
                    <div className="course-page__info-left-top">
                      <div className="course-page__info-animation"></div>
                      <span className="course-page__info-price m-auto">
                        {course.price} هزار تومان
                      </span>
                    </div>
                    <div className="course-page__info-left-group">
                      <p className="course-page__info-group-text">
                        دسته :
                        <span className="course-page__info-group">
                          {course.group}
                        </span>
                      </p>
                    </div>
                    <div className="course-page__info-Warning mt-4">
                      <span>
                        پس از خرید، بلافاصله به محتوای دوره دسترسی خواهید داشت و
                        میتوانید دوره را مشاهده و یا دانلود کنید.
                      </span>
                    </div>
                    <div className="course-Advantages my-4">
                      <ul className="course-Advantages__ul">
                        <li className="course-Advantages__li my-2">
                          پــروژه مــحور بودن دوره هــــا
                        </li>
                        <li className="course-Advantages__li my-2">
                          پشتیبـــانی دائــــمی محصولات
                        </li>
                        <li className="course-Advantages__li my-2">
                          تضمین کیــفیت کلیـه محصولات
                        </li>
                      </ul>
                    </div>
                    <div className="course-page__info-btns ">
                      <Row>
                        <Col lg={5} xl={4}>
                          <button className="course-page__info-btn  showCourse">
                            مشاهده دروس
                          </button>
                        </Col>
                        <Col lg={6}>
                          <button className="course-page__info-btn my-4 my-lg-0 buyCourse">
                            خرید دوره
                          </button>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="course-information">
              <Row>
                <Col xs={6} md={3} className="my-2 my-md-0">
                  <div className="course-information__box mt-2">
                    <div className="course-information__icon">
                      <FaChalkboardTeacher></FaChalkboardTeacher>
                    </div>
                    <span className="course-information__teacher">
                      مدرس : ......
                    </span>
                  </div>
                </Col>
                <Col xs={6} md={3} className="my-2 my-md-0">
                  <div className="course-information__box mt-2">
                    <div className="course-information__icon">
                      <FaClock></FaClock>
                    </div>
                    <span className="course-information__teacher">
                      وضعیت دوره : پیش فروش
                    </span>
                  </div>
                </Col>
                <Col xs={6} md={3} className="my-2 my-md-0">
                  <div className="course-information__box mt-2">
                    <div className="course-information__icon">
                      <FaFileVideo></FaFileVideo>
                    </div>
                    <span className="course-information__teacher">
                      تعداد درس : نامشخص
                    </span>
                  </div>
                </Col>
                <Col xs={6} md={3} className="my-2 my-md-0">
                  <div className="course-information__box mt-2">
                    <div className="course-information__icon">
                      <FaUserGraduate></FaUserGraduate>
                    </div>
                    <span className="course-information__teacher">
                      دانشجو : {course.student}
                    </span>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
