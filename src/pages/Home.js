import React from "react";
import Certificate from "../components/Certificate/Certificate";
import Job from "../components/Job/Job";
import ProjectDisplay from "../components/ProjectDisplay/ProjectDisplay";
import Header from "../components/Header/Header";
import projects from "../projects.json";
import Footer from "../components/Footer/Footer";

class Home extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <section id="projects" className="dot-background wrapper">
          <h2 className="hidden section-title">Notable Projects</h2>
          <div id="project-grid" className="card-list card-grid">
            {projects.map((item) => (
              <ProjectDisplay to={`projects/${item.id}`} key={item.id} cover={item.cover} name={item.name} description={item.description} />
            ))}
          </div>
        </section>

        <section id="job-experience" className="job-experience wrapper">
          <h2 className="hidden section-title">Job Experience</h2>
          <div className="jobs">
            <div className="card-list job-list">
              <Job
                company="Nuvyta S.r.l."
                role="UX/UI Designer"
                schedule="Full Time"
                period="May 2020 - Present"
              />
              <Job
                company="Newronika S.p.A."
                role="UI Designer"
                schedule="Part Time"
                period="Aug 2022 - Sep 2022"
              />
            </div>
            <div className="year-counter delay hidden">
              <h1>3</h1>
              <p>
                Years of experience,
                <br />
                and counting!
              </p>
            </div>
          </div>
        </section>

        <section
          id="certificates"
          className="certificates dot-background wrapper"
        >
          <h2 className="hidden section-title">Certificates</h2>
          <div className="card-list card-grid">
            <Certificate
              title="Front End Web Development"
              school="Treehouse"
              date="Jul 2023"
              href="https://www.credential.net/77644835"
            />
            <Certificate
              title="Mobile User Experience Design"
              school="Interaction Design Foundation"
              date="Jan 2021"
              href="https://www.interaction-design.org/members/miguel-sosa/certificate/course/01cf7e87-9788-499a-bbc6-717c74d2cd99?certificateType=course"
            />
            <Certificate
              title="User Experience Design"
              school="Treehouse"
              date="Dec 2019"
              href="https://www.interaction-design.org/members/miguel-sosa/certificate/course/01cf7e87-9788-499a-bbc6-717c74d2cd99?certificateType=course"
            />
          </div>
        </section>
        <Footer />
      </main>
    );
  }
}

export default Home;
