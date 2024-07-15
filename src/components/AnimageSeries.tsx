import animage_booklist from "../constants/booklist";

const AnimageSeries = () => {
  return (
    <>
      <section className=" text-white">
        <div>
          <h1 className="lg:text-8xl text-6xl text-center flex justify-center great-vibes-regular">
            Animage Academy Series
          </h1>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 mt-10">
          {animage_booklist.map((books) => (
            <div>
              <img
                src={books.imagelink}
                alt="animage series"
                className="w-72"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AnimageSeries;
