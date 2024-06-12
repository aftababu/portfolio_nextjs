"use client";

interface Props {
  error: Error;
  reset: () => void;
}

const error = ({ error, reset }: Props):JSX.Element => {
  return (
    <div>
      <h1>error occurred {error?.message}</h1>
      <button className="btn btn-error" onClick={() => reset()}>
        retry
      </button>
    </div>
  );
};

export default error;