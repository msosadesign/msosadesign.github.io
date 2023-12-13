import Chip from "../components/Chip/Chip";
import Navigation from "../components/Navigation/Navigation";
import ProjectList from "../components/ProjectList/ProjectList";

export default function Projects() {
  return (
    <main className="wrapper projects-page">
      <Navigation />
      <h1>Here are some of my projects</h1>
      <p>Filter by UI Design or Frontend!</p>
      <Chip label="UI Design" />
      <Chip label="Frontend Development" />
      <ProjectList />
      <h2>Prototype of a weather app</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. Vitae ultricies massa.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur. Quis pretium quam ut sem
        vulputate. Rhoncus nisi in morbi hac turpis montes purus tellus sed.
        Rhoncus amet ullamcorper fusce egestas eros amet enim euismod. Ac id
        mauris accumsan mi imperdiet est justo quis. Dignissim feugiat ipsum
        tempor et sed lectus pretium vel blandit. Curabitur accumsan neque a sed
        pretium mauris.
        <br />
        <br />
        Purus aliquet sed arcu fusce cras placerat nullam auctor quis. Nibh
        egestas leo potenti aliquet etiam id in egestas tincidunt. Euismod id
        quisque pretium diam feugiat tempor. Et imperdiet cras tortor platea
        iaculis vitae integer adipiscing. Gravida a nibh risus nunc senectus
        vitae sollicitudin mauris ac. Egestas amet interdum mauris scelerisque
        magna.
        <br />
        <br />
        Sollicitudin at metus blandit quis. Quam quis aliquet vestibulum aenean
        dictumst vestibulum. Ante sit diam mauris sagittis et quam lectus
        maecenas risus. Sed sed et sit odio urna turpis. Ut fringilla tortor
        neque hac molestie imperdiet ultrices nisl magna. Etiam odio velit
        dignissim tortor. Auctor ultrices auctor diam purus ullamcorper nec.
        Risus at morbi augue porta adipiscing convallis aliquet. Laoreet
        faucibus sit libero tincidunt et.
      </p>
    </main>
  );
}
