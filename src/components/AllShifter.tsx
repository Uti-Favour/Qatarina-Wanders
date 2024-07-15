import { all_shifter } from '../constants/booklist'

const AllShifter = () => {
  return (
    <>
      <section className="mt-28 text-white">
        <div className="mt-28">
          <h1 className="lg:text-8xl text-6xl text-center flex justify-center great-vibes-regular">
            Owl Shifter Chronicles 
          </h1>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 mt-10">
          {all_shifter.map((books) => (
            <a href="https://www.leighbardugo.com/book/shadow-and-bone/">
                <div>
              <img
                src={books.imagelink}
                alt="animage series"
                className="w-72"
              />
            </div>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}

export default AllShifter
