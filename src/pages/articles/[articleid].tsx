import { useRouter } from "next/router";

function ArticlePage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.route);


  return (
    <div>
      <h1> Articles</h1>
    </div>
  );
}

export default ArticlePage;
