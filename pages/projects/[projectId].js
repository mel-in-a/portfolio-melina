import axios from "axios";

const projectId = ({ project }) => {
  return <div>{project.name}</div>;
};
export default projectId;

export async function getServerSideProps(context) {
  const project = await axios.get(
    `https://strapi-core.clientissimo.com/projects/${context.params.projectId}`
  );
  return { props: { project: project.data } };
}
