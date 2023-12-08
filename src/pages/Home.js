import React from "react";
import Certificate from "../components/Certificate";
import Job from "../components/Job";

class Home extends React.Component {
    render() {
        return (
            <main>
                <section id="projects" class="dot-background wrapper">
                    <h2 class="hidden">Notable Projects</h2>
                    <div id="project-grid" class="card-list card-grid"></div>
                </section>

                <div id="myModal" class="modal">
                    {/* Modal content */}
                    <div class="modal-content">
                        <header id="article-header">
                            <img id="close-modal" src="img/x.svg" alt="close icon" />
                            <h2 id="article-title" class="hidden">Prototype of a weather app</h2>
                        </header>
                        <div class="popup-article"></div>
                    </div>
                </div>

                <section id="job-experience" class="job-experience wrapper">
                    <h2 class="hidden">Job Experience</h2>
                    <div class="jobs">
                        <div class="card-list job-list">
                            <Job company="Nuvyta S.r.l." role="UX/UI Designer" schedule="Full Time" period="May 2020 - Present"/>
                            <Job company="Newronika S.p.A." role="UI Designer" schedule="Part Time" period="Aug 2022 - Sep 2022"/>
                        </div>
                        <div class="year-counter delay hidden">
                            <h1>3</h1>
                            <p>
                                Years of experience,<br />
                                and counting!
                            </p>
                        </div>
                    </div>
                </section>

                <section id="certificates" class="certificates dot-background wrapper">
                    <h2 class="hidden">Certificates</h2>
                    <div class="card-list card-grid">
                        <Certificate title="Front End Web Development" school="Treehouse" date="Jul 2023" href="https://www.credential.net/77644835" />
                        <Certificate title="Mobile User Experience Design" school="Interaction Design Foundation" date="Jan 2021" href="https://www.interaction-design.org/members/miguel-sosa/certificate/course/01cf7e87-9788-499a-bbc6-717c74d2cd99?certificateType=course" />
                        <Certificate title="User Experience Design" school="Treehouse" date="Dec 2019" href="https://www.interaction-design.org/members/miguel-sosa/certificate/course/01cf7e87-9788-499a-bbc6-717c74d2cd99?certificateType=course" />
                    </div>
                </section>
            </main>
        )
    }
}

export default Home;