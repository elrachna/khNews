import Container from "@/components/Container";
import React from "react";

const loading = () => {
  return (
    <Container>
      <div className="flex items-center h-[40vh]">
        <h2 className="text-6xl SFPro font-bold">Loading...</h2>
      </div>
    </Container>
  );
};

export default loading;
