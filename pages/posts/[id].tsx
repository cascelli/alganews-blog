// import { useRouter } from "next/router";

import { Post, PostService } from "danielbonifacio-sdk";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface PostProps {
  post: Post.Detailed;
}

export default function PostPage(props: PostProps) {
  /*
  // Obter parametros da query : método 1
  const router = useRouter();
  const { query } = router;

  console.log(query);
  */

  return <div>{props.post.title}</div>;
}

// Obter parametros da query : método 2

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps<
  PostProps,
  Params
> = async ({ params }) => {
  // console.log(params);
  if (!params) return { notFound: true };

  const { id } = params;
  const postId = Number(id);

  if (isNaN(postId)) return { notFound: true };

  const post = await PostService.getExistingPost(postId);

  return {
    props: {
      post,
    },
  };
};
