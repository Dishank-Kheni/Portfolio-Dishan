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
import mypocket from "../../Assets/Projects/mypocket.jpg";
import fts from "../../Assets/Projects/fts.png";
import spotify from "../../Assets/Projects/spotify.png";
import cuckoo from "../../Assets/Projects/cuckoo.jpg";
import drop from "../../Assets/Projects/drop.jpg";
import cosmic_candy from "../../Assets/Projects/cosmic_candy.jpg";
import khadi from "../../Assets/Projects/khadi.jpg";
import quickhome from "../../Assets/Projects/quickhome.jpg";
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
              imgPath={tutoring}
              isBlog={false}
              title="United Tutoring"
              description="Built a student-tutor platform with ReactJs and NodeJs, deployed on AWS using Docker and Elastic Beanstalk.
              Integrated AWS services like Cognito, S3, and DynamoDB for user authentication, storage, and data.
              Transitioned the application to a serverless architecture using AWS Lambda and API Gateway."
              ghLink="https://github.com/Dishank-Kheni/file-tracking-system"
              technologies="Project, AWS, Docker, Cloud Formation, ReactJS, NodeJS, ExpressJS, JWT, Cognito, S3, DynamoDB, AWS Lamda, API Gateway"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quickhome}
              isBlog={false}
              title="QuickHome"
              description="We developed a web application using Java Spring Boot and ReactJS, enabling property owners to list their properties for sale or rent while allowing customers to search for their desired houses. Employing Hibernate/JPA, we linked the back-end with MySQL for seamless data management. Test cases were created using JUnit and Mockito, ensuring robust functionality. Following Agile practices and principles like SOLID and Test-Driven Development, we conducted thorough unit and integration testing. Our CI/CD pipeline facilitated continuous deployment on Heroku, with version control managed through GitLab and project management coordinated via Jira."
              ghLink="https://github.com/Dishank-Kheni/QuickHome"
              technologies="Project, Java, SpringBoot, ReactJS, MySQL, GIT, CI/CD, Junit, Jira, Hibernet/JPA, Mockito"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fts}
              isBlog={false}
              title="file-tracking-system"
              description="Developed a real-time offline official case document tracking system leveraging QR codes, merging Flutter, Firebase, and Tableau. The project earned top honors, securing the first rank in the SSIP Hackathon, sponsored by the state Government."
              ghLink="https://github.com/Dishank-Kheni/file-tracking-system"
              // demoLink="https://chatify-49.web.app/"
              technologies="Product, Flutter, Flutter-Web, Firebase, Android, Git, StateLevel Hackathon-Winner"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mypocket}
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
              technologies="Product, Dart, Flutter, Firebase Auth, Firestore, Local Storage, Local Auth"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={khadi}
              isBlog={false}
              title="Bharat Khadi Online Shopping"
              description="Built an efficient e-commerce app with Flutter, integrating key mobile app concepts like responsive design, clean code practices, effective state management, and appealing UI design."
              // ghLink="https://github.com/Dishank-Kheni/supplier_management.git"
              demoLink="https://play.google.com/store/apps/details?id=com.bytecode.khadi"
              technologies="Client, Flutter, Android, Git, Agile"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cuckoo}
              isBlog={false}
              title="Cuckoo"
              description="With the help of the app Cuckoo, you can enhance your
              attention and productivity at work or while studying. You
              will develop a productivity habit that will help you get
              things done, keep you focused."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://play.google.com/store/apps/details?id=com.zognest.cuckoos_clock"
              technologies="Product, Dart, Flutter, BLoc, Geo-Location, Weather API, Customised Calender, Animation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify Redesign"
              description="Introducing Spotify Redesign, a beautifully designed music app temlpate built using FlutterFlow and based on @soroush norozy's Spotify Redesign UI. Completed in just 3 days, responsive design and rich animation"
              ghLink="https://github.com/Alvish0407/spotify-redesign"
              demoLink="https://marketplace.flutterflow.io/item/DcDjkrey7HsELU5lrZcO"
              technologies="Flutter, Flutterflow, Rich animation, Best MarketplaceSeller"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drop}
              isBlog={false}
              title="Drop"
              description="A smart and comprehensive solution for the water supply
              chain, where vendors can add customers, their society/
              area, receive payments, keep track of the number of
              bottles supplied, the number of customers whose
              payments are still owed, and much more."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://play.google.com/store/apps/details?id=com.zognest.drop"
              technologies="Product, Dart, Flutter, GetX, Google, Cloud-Auth"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cosmic_candy}
              isBlog={false}
              title="Cosmic Candy"
              description="Cosmic Candy is app for wholesalers to track the record
              of the customers, their all orders & their payments and
              also to manage the employees."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
              technologies="Client, Dart, Flutter, Responsive Framework, BLoC, Geo-Location, PDF Scanner"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={supplier}
              isBlog={false}
              title="Supplier Management System"
              description="• Developed a Supplier Management System using Java, J2EE, JPA, Jersey, and JAX-WS.
              • Ensured secure system access via authentication, authorization mechanisms, and Utilized JPA for streamlined
              object-relational mapping and efficient database operations.
              • Streamlined CI/CD on Heroku, applied agile methodologies, SOLID principles, and Jira during development."
              ghLink="https://github.com/Dishank-Kheni/supplier_management.git"
              technologies="Project, Java, J2EE, JPA, Jersey, JAX-WS, JPA, Heroku, Agile, Jira"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="Virtual Restaurant management system"
              description="Crafted an academic project utilizing Flutter to create a restaurant website and mobile application. The platform allows customers to reserve tables, request orders, and seamlessly process payments through an integrated gateway. Additionally, administrative functionalities empower efficient order management for the admin team."
              ghLink="https://github.com/Dishank-Kheni/Restaurant-User.git"
              // demoLink="https://chatify-49.web.app/"
              technologies="Project, Dart, Flutter, Provider, Firebase, Firestore"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
