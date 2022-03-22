// import { useRouter } from "next/router";

import { Post, PostService } from "danielbonifacio-sdk";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface PostProps extends NextPageProps {
  post?: Post.Detailed;
  // Movido para o arquivo custom.d.ts e declarado como uma interface NextPageProps para simplificar
  //   error?: {
  //     message: string;
  //   };
}

export default function PostPage(props: PostProps) {
  /*
  // Obter parametros da query : método 1
  const router = useRouter();
  const { query } = router;

  console.log(query);
  */

  // Logica de tratamento de erro movida para _app.tsx
  // if (props.error)
  //   return <div style={{ color: "red" }}>{props.error.message}</div>;

  return <div>{props.post?.title}</div>;
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
  try {
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
  } catch (error) {
    console.log(error);
    return {
      props: {
        error: {
          message: error.message,
          statusCode: error.data?.status || 500,
        },
      },
    };
  }
};
