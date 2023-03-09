import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Course.css";
import {
  FaChalkboardTeacher,
  FaClock,
  FaFileVideo,
  FaUserGraduate,
} from "react-icons/fa";
import useFetch from "../../../hooks/useFetch";
import CoursePagePending from "./CoursePagePending/CoursePagePending";

export default function Course() {
  const [course, isPending, error] = useFetch();

  return (
    <>
      {isPending && <CoursePagePending />}
      {error && (
        <div className="course-page__error d-flex align-items-center justify-content-center py-5">
          <div class="spinner-grow text-danger" role="status">
            <span class="sr-only"></span>
          </div>
          <h1 className="text-center text-danger mx-md-5">
            اتصال با سرور انجام نشد
          </h1>
          <div class="spinner-grow text-danger" role="status">
            <span class="sr-only"></span>
          </div>
        </div>
      )}
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
                <Col xs={12} md={6} xl={5}>
                  <div className="course-page__info-left m-2 m-lg-4 px-2 px-md-0">
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
                        <Col lg={6} xl={5}>
                          <button className="course-page__info-btn  showCourse">
                            مشاهده دروس
                          </button>
                        </Col>
                        <Col lg={6} xl={7}>
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

            {/* course-information */}
            <div className="course-information">
              <Row>
                <Col xs={6} md={3} className="my-2 my-md-0">
                  <div className="course-information__box mt-2">
                    <div className="course-information__icon">
                      <FaChalkboardTeacher></FaChalkboardTeacher>
                    </div>
                    <span className="course-information__teacher">
                      مدرس : {course.teacher}
                    </span>
                  </div>
                </Col>
                <Col xs={6} md={3} className="my-2 my-md-0">
                  <div className="course-information__box mt-2">
                    <div className="course-information__icon">
                      <FaClock></FaClock>
                    </div>
                    <span className="course-information__teacher">
                      وضعیت دوره : {course.status}
                    </span>
                  </div>
                </Col>
                <Col xs={6} md={3} className="my-2 my-md-0">
                  <div className="course-information__box mt-2">
                    <div className="course-information__icon">
                      <FaFileVideo></FaFileVideo>
                    </div>
                    <span className="course-information__teacher">
                      تعداد درس : {course.lesson}
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

            {/* Course Description */}

            <div className="course-description my-5">
              <p className="course-description__text">
                کتابخانه‌ها باعث افزایش سرعت کدنویسی میشن. در حدی که تو بازار
                کار هم از کتابخانه های مختلفی برای توسعه پروژه‌ها استفاده میشه.
                تو این دوره 20 کتابخانه پرکاربرد و پراستفاده ری‌اکت که تو بازار
                کار برای توسعه پروژه های مختلفی استفاده میشه رو بصورت پروژه محور
                یاد میگیری. این موضوع هم سرعت کدنویسی شما رو افزایش میده، هم
                دستتون تو کدنویسی بازتره و هم شانس استخدامیتون رو بالا می‌بره.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
