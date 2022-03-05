import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="not-found">
      <h2>
        <span>Ooops...</span>That page cannot be found :(
      </h2>

      <Link href="/">
        <a> Go back to the Homepage</a>
      </Link>
    </div>
  );
};

export default NotFound;
