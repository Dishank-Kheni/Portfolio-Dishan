import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bitsOfCode from "../../Assets/Projects/blog.png";
import chatify from "../../Assets/Projects/chatify.png";
import editor from "../../Assets/Projects/codeEditor.png";
import emotion from "../../Assets/Projects/emotion.png";
import leaf from "../../Assets/Projects/leaf.png";
import padipay from "../../Assets/Projects/padipay.png";
import repo1 from "../../Assets/Projects/repo1.png";
import repo2 from "../../Assets/Projects/repo2.png";
import suicide from "../../Assets/Projects/suicide.png";
import supplier from "../../Assets/Projects/supplier.png";
import tutoring from "../../Assets/Projects/tutoring.png";
import restaurant from "../../Assets/Projects/restaurant.jpeg";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={supplier}
              isBlog={false}
              title="Supplier Management System"
              description="The Supplier Management System is a comprehensive Java-based solution created during the 6th semester. Leveraging Java, J2EE, JPA, Jersey, and JAX-WS, it enables efficient CRUD operations for streamlined supplier data management. Featuring robust security measures, it ensures protected access through authentication and authorization protocols while optimizing database operations via JPA for seamless object-relational mapping."
            // ghLink="https://github.com/Dishank-Kheni/file-tracking-system"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tutoring}
              isBlog={false}
              title="United Tutoring"
              description="United Tutoring is an innovative student-tutor platform crafted using ReactJS and NodeJS, hosted on AWS via Docker and Elastic Beanstalk. Seamless integration of AWS services such as Cognito, S3, and DynamoDB ensures robust user authentication, data storage, and management. The transition to a serverless architecture utilizing AWS Lambda and API Gateway not only optimized operations but also led to a successful sale to a local coaching organization for 4000€ during the COVID-19 pandemic."
              ghLink="https://github.com/Dishank-Kheni/file-tracking-system"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={padipay}
              isBlog={false}
              title="cryptobridge"
              description="Implemented a transactional FlutterFlow frontend combined with a robust backend utilizing NodeJS, TypeScript, ExpressJS, MongoDB, and Firebase for handling crypto-fiat operations. Deployed RESTful APIs on Heroku to ensure smooth functionality. Leveraged this project's key features to significantly contribute to Padipay's system development during the tenure."
              ghLink="https://github.com/Dishank-Kheni/file-tracking-system"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={repo2}
              isBlog={false}
              title="node-typescript-boilerplate-mongoose"
              description="node-typescript-boilerplate-mongoose provides a concise and structured demonstration of an end-to-end setup for Mongoose Node.js Express applications using TypeScript. It showcases middleware, models, routes, and types, offering a complete REST API for managing User Authentication and CRUD operations on Profiles. This serves as a streamlined template for similar projects."
              ghLink="https://github.com/Dishank-Kheni/file-tracking-system"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={repo1}
              isBlog={false}
              title="mongoose-express-ts"
              description="This repository serves as a comprehensive guide, demonstrating an organized setup and workflow for developing Mongoose Node.js Express applications in TypeScript. It encompasses middleware, models, routes, and types, showcasing a complete REST API for managing User Authentication and CRUD operations for Profiles. Detailed API documentation is available on the Wiki for reference."
              ghLink="https://github.com/Dishank-Kheni/file-tracking-system"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="Virtual Restaurant management system"
              description="Crafted an academic project utilizing Flutter to create a restaurant website and mobile application. The platform allows customers to reserve tables, request orders, and seamlessly process payments through an integrated gateway. Additionally, administrative functionalities empower efficient order management for the admin team."
            // ghLink="https://github.com/Dishank-Kheni/file-tracking-system"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="file-tracking-system"
              description="Developed a real-time offline official case document tracking system leveraging QR codes, merging Flutter, Firebase, and Tableau. The project earned top honors, securing the first rank in the SSIP Hackathon, sponsored by the state Government."
              ghLink="https://github.com/Dishank-Kheni/file-tracking-system"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Cuckoo"
              description="With the help of the app Cuckoo, you can enhance your
              ttention and productivity at work or while studying. You
              will develop a productivity habit that will help you get
              things done, keep you focused."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://play.google.com/store/apps/details?id=com.zognest.cuckoos_clock"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Drop"
              description="A smart and comprehensive solution for the water supply
              chain, where vendors can add customers, their society/
              area, receive payments, keep track of the number of
              bottles supplied, the number of customers whose
              payments are still owed, and much more."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://play.google.com/store/apps/details?id=com.zognest.drop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Cosmic Candy"
              description="Cosmic Candy is app for wholesalers to track the record
              of the customers, their all orders & their payments and
              also to manage the employees."
            // ghLink="https://github.com/soumyajit4419/Plant_AI"
            // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="My Pocket"
              description="We help you store anything from credit cards to
              important government documents. This application
              provides industry-leading security to your data and also
              allows you to make boring documents and cards colourful
              by adding skins."
              demoLink="https://play.google.com/store/apps/details?id=com.zognest.myPocket"
            // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
