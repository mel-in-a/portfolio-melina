const pageHeading = () => {
  return (
    <div className="page-heading  shadow">
      <div className="container mx-auto flex items-center h-52 text-primary">
        <div className="flex flex-col gap-3 p-5">
          <div className="category font-black text-4xl">
            Développement : Site internet
          </div>
          <div className="breadcrumb">Breadcrumb</div>
        </div>
      </div>
    </div>
  );
};

export default pageHeading;
