import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
const styles = {
  tag: {
    backgroundColor: "#f0f0f0",
    color: "#333",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "5px 10px",
    margin: "5px",
  },
};
function ProjectCards(props) {
  var tech = props.technologies.split(",");
  console.log(tech);
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{ height: "300px" }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {tech.map((t, index) => (
            <span key={index} style={styles.tag}>
              {t.trim()}
            </span>
          ))}
        </div>

        {props.ghLink && props.ghLink.trim() !== "" && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{ marginTop: "10px" }}
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {"\n"}
        {"\n"}
        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px", marginTop: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
