import series_1 from "/src/assets/images/Untitled_design__1_-removebg-preview.png"
import series_2 from "/src/assets/images/Untitled_design-removebg-preview.png"

const Series = () => {
  return (
    <>
      <section className=" justify-center space-x-20 bg-white mt-24 py-5">
        <div className="mt-16">
            <h1 className="great-vibes-regular text-7xl flex justify-center">Explore All Series</h1>
        </div>
        <div className="flex justify-center">
            <img src={series_1} alt="" className="w-[500px] object-cover"/>
            <img src={series_2} alt="" />
        </div>
      </section>
    </>
  )
}

export default Series
