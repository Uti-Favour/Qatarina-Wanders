import { all_shifter } from '../constants/booklist'

const AllShifter = () => {
  return (
    <>
      <section className="relative text-white parallax bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84d935bc-6f35-47c7-88ca-108d3e8a3c8f/dgosm5d-b1dc0961-750a-4c89-97ea-cc6cc8b00495.jpg/v1/fill/w_1154,h_692,q_70,strp/gothic_castle_2_by_hentaiuser33_dgosm5d-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzAwIiwicGF0aCI6IlwvZlwvODRkOTM1YmMtNmYzNS00N2M3LTg4Y2EtMTA4ZDNlOGEzYzhmXC9kZ29zbTVkLWIxZGMwOTYxLTc1MGEtNGM4OS05N2VhLWNjNmNjOGIwMDQ5NS5qcGciLCJ3aWR0aCI6Ijw9MTE2NyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.0kQHhoHS13ayZ288OrYbh8geqK6LvY0XHFm5yvfXrdI')] py-16 bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10">
          <div>
            <h1 className="lg:text-7xl text-5xl text-center flex justify-center cinzel-decorative-regular">
              The Owl Shifter Chronicle
            </h1>
          </div>
         <div className="flex justify-center">
         <div className="grid lg:grid-cols-4 grid-cols-2 mt-10 lg:gap-8">
            {all_shifter.map((books , index) => (
              <div key={index}>
                <img
                  src={books.imagelink}
                  alt="animage series"
                  className="w-72"
                />
              </div>
            ))}
          </div>
         </div>
        </div>
      </section>
    </>
  )
}

export default AllShifter
