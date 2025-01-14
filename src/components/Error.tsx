const Error = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-center my-4 bg-red-600 text-white font-semibold p-2 uppercase text-sm">
      {children}
    </p>
  );
};

export default Error;
