import { FC } from "react";

const PenName: FC = () => {
  return (
    <>
      <section className="text-black  py-14  bg-white ">
        <div>
          <div>
            <h1 className="lg:text-7xl text-5xl cinzel-decorative-regular flex justify-center mx-5 text-center lg:text-left">
              Qatarina's Pen Names
            </h1>
            <p className="flex justify-center mt-3 mx-8 lg:mx-0 text-center">
              Writing under multiple pen names, Qatarina explores diverse genres
              and storytelling styles.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-16 lg:mx-16 mx-5">
          <div className=" border-2 border-gray-800 rounded-3xl lg:px-8 px-5 py-3 ">
            <img
              src={
                "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/Eps0kT4f6PZll5KfCNDG/media/66882ef4a3b05e6677a1ea59.png"
              }
              alt="venus rose"
              className="w-28"
            />
            <p className="mt-5 text-lg">
              As Venus Rose, she immerses readers in first-person narratives
              that blend adult content with the same dark and fantastical
              elements, creating an intimate and visceral reading experience.
            </p>
            <a href="https://www.amazon.com/stores/author/B0C7MHRP8T">
              <button className= 'mt-5 underline text-lg'>Venus Rose</button>
            </a>
          </div>
          <div className=" border-2 border-gray-800 rounded-3xl lg:px-8 px-5 py-3 bg-transparent group-hover:bg-gray-800 transition-colors duration-300">
            <img
              src={
                "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/Eps0kT4f6PZll5KfCNDG/media/66882ef4e38553188873af93.png"
              }
              alt="venus rose"
              className="w-28"
            />
            <p className="mt-5 text-lg">
              Under QB Wanders, she ventures into the futuristic realms of
              sci-fi, space ozpera, and cyberpunk noir within the 'Streamiverse
              world,' where themes of consciousness and connectivity are
              intricately explored.
            </p>
            <a href="https://www.amazon.com/dp/B0CBSZBZBJ?binding=kindle_edition&ref_=dbs_s_ks_series_rwt_tkin&qid=1720199900&sr=1-1-fkmr0">
              <button className="mt-5 underline text-lg">QB Wanders</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PenName;
