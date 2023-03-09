import React from "react";
import { Row, Col, Placeholder } from "react-bootstrap";

export default function CoursePagePending() {
  return (
    <div className="course-page__pending">
      <div className="container-fluid container-lg">
        <Row>
          <div className="d-flex justify-content-between my-5">
            <Placeholder bg="light" xs={4} className="float-start" />
            <Placeholder bg="light" xs={4} className="float-end" />
          </div>
          <Col xs={12} md={6}>
            <Placeholder animation="glow">
              <Placeholder bg="light" xs={12} className="pending-video my-5" />
            </Placeholder>
          </Col>
          <Col xs={12} md={6}>
            <Placeholder animation="glow">
              <Placeholder bg="light" xs={8} className="mt-4 py-3" />
              <Placeholder bg="light" xs={12} className="mt-4 py-4" />
              <Placeholder bg="light" xs={4} className="mt-4 offset-8" />
              <Placeholder bg="light" xs={4} className="mt-4 offset-8" />
              <Placeholder bg="light" xs={4} className="mt-4 offset-8" />
              <Placeholder.Button
                variant="info"
                className="m-0 my-2 m-md-2"
                xs={10}
                md={4}
              />
              <Placeholder.Button
                variant="success"
                className="m-0 my-2 m-md-2"
                xs={10}
                md={5}
              />
            </Placeholder>
          </Col>
          <div className="course-box__pending d-md-flex justify-content-md-between mb-5">
            <Placeholder bg="light" xs={5} md={2} className="mt-4 py-5" />
            <Placeholder
              bg="light"
              xs={5}
              md={2}
              className="mt-4 py-5 float-start float-md-none"
            />
            <Placeholder bg="light" xs={5} md={2} className="mt-4 py-5" />
            <Placeholder
              bg="light"
              xs={5}
              md={2}
              className="mt-4 py-5 float-start float-md-none"
            />
          </div>
          <div className="course-desc__pending mb-5">
            <Placeholder bg="light" xs={12} />
            <Placeholder bg="light" xs={10} />
            <Placeholder bg="light" xs={5} />
          </div>
        </Row>
      </div>
    </div>
  );
}
