import { useRouter } from "next/router";

function ArticlePage() {
  const router = useRouter();

  console.log("router.pathname", router.pathname);
  console.log("route", router.route);
  console.log("query", router.query);


  return (
    <div>
      <h1> Articles</h1>
    </div>
  );
}

export default ArticlePage;
