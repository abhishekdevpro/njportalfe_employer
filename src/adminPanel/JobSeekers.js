import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import {FaStore}  from 'react-icons/fa';

const JobSeekers = () => {
  return (
    <Container fluid className="">
      <p> <FaStore className='mx-1' /> / Jobs</p>
    </Container>
  );
};

export default JobSeekers;