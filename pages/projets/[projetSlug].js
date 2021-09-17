import axios from "axios";

const projetSlug = ({ project }) => {
  return (
    <>
      <h2>Projet</h2>
      <div>
        <h3>{project.title}</h3>
        <p>{project.content}</p>
      </div>
    </>
  );
};

export default projetSlug;

export async function getServerSideProps(context) {
  console.log(context);
  try {
    const res = await axios.get(
      `${process.env.API_URL}/items/project?filter[slug][_eq]=${context.params.projetSlug}`
    );
    if (!res) {
      return {
        notFound: true,
      };
    }
    // console.log(res.data.data);
    return { props: { project: res.data.data } };
  } catch (e) {
    console.error(e);
  }
}
