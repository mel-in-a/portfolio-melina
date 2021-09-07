const Card = ({ title, children }) => {
  return (
    <div className="card bordered rounded-xl shadow-2xl m-5 p-5 ">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{children}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
