const Posts = ({ article }) => {
  const posts = fetch("https://jsonplaceholder.typicode.com/posts");

  return <div className="">{article.title} </div>;
};


export const getStaticPath = async () => {
  const result = await fetch(`http://localhost:1337/articles`);
  const data = await result.json();
  const path = data.map((article) => {
    return {
      params: {
        id: article.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const result = await fetch(`http://localhost:1337/articles/${id}`);
    const data = await result.json();
    return {
        props: {article: data}
}
}


export default Posts;
