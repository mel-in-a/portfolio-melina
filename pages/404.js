import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="alert alert-error">
        <Link href="/">
          <div className="text-6xl font-black">404 Retour à l'accueil</div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
