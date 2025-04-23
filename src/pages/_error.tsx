import type { NextPage } from "next";

interface ErrorProps {
  statusCode?: number;
}

const ErrorPage: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <div>
      <h1>
        {statusCode === 404
          ? `${statusCode} page not found`
          : `Unexpected error: ${statusCode}`}
      </h1>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      statusCode: 404,
    },
  };
};

export default ErrorPage;
