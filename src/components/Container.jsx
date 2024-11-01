const Container = ({ children }) => {
  return (
    <div
      className="
      
      max-w-[1300px]

      mx-auto xl:px-20 md:px-4 px-4
      "
    >
      {/* max-w-[1920px]*/}
      {children}
    </div>
  );
};

export default Container;
