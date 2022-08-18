import React from "react";

export default function Comment() {
  return (
    <div className="font-bold xl:text-6xl lg:text-4xl md:text-2xl sm:text-1xl xl:w-[55rem] lg:w-[40rem] md:w-[30rem] sm:w-[20rem]">
      <div className="flex m-auto justify-center align-items">
        <p>만화 속의 당신은</p>
      </div>
      <div className="flex m-auto justify-center align-items mt-5">
        <p>어떤 모습인지 궁금한가요?</p>
      </div>
    </div>
  );
}
