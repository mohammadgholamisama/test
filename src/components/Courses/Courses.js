import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Courses.css'

export default function Courses() {


    const [course , setCourse] = useState([])
    
    useEffect(() => {
        fetch('https://react-b2956-default-rtdb.firebaseio.com/courses.json')
        .then(res => res.json())
        .then(data => {
            setCourse(data)
        })
    }, [])


    return (
        <section className='courses my-5'>
            <div className='container-fluid container-md'>
                <div className="all-courses">
                    <Row>
                        {course.map(item => (
                            <Col xs={6} sm={6} lg={4} xl={3}>
                            <Link to='/' className="courses-box mt-4" key={item.id}>
                                <div className="course-img">
                                    <img src={item.img} alt="course" />
                                </div>
                                <div className="course-infos px-1 py-3 ">
                                    <div className='course-group d-flex justify-content-center'>
                                        <span>{item.group}</span>
                                    </div>
                                    <p className='course-title px-1 mt-3 text-center'>{item.title}</p>
                                    <div className="course-status d-flex justify-content-between">
                                        <span className='course-price'>{item.price}</span>
                                        <span className='course-users text-center'>{item.student} <br /> <span></span></span>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </section>
    )
}
