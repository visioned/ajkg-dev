import React from "react";
import Image from "next/image";

const Index = () => {
  return (
    <section
      id="about"
      className="min-h-[65vh] pt-1 transition-all ease duration-200"
    >
      <div className="flex flex-col justify-evenly items-center sm:flex-row ">
        <div className="mx-4 animate__animated animate__fadeIn">
          <Image
            className="rounded-3xl drop-shadow-xl"
            src="/images/profile.png"
            height={325}
            width={325}
            alt="profile"
          />
        </div>
        <div className="py-10">
          <h2 className="text-4xl font-bold">About</h2>

          <p className="flex font-karla text-base max-w-md pt-2 leading-relaxed">
            <span className="text-3xl absolute text-transparent bg-clip-text bg-gradient-to-r from-[#f6ea41] to-[#f048c6] -rotate-6">
              yo!
            </span>
            <br />
            <br />
            Welcome to my portfolio! I&apos;m just a guy who likes to code. 🤷‍♂️ 
            <br />
            <br />
            I enjoy creating things that live on the internet, whether that be
            websites, applications, or anything in between. My goal is to always
            build something meaningful that brings value.
            <br />
            <br />I started my career in the hospitality industry, but I have
            always had a passion for technology and design. I decided to make the
            switch into development and haven&apos;t looked back!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
