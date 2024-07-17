import animage_booklist from "../constants/booklist";
import "../css/styles.css"; // Make sure to import the CSS file

const AnimageSeries = () => {
  return (
    <>
      <section className="relative text-white mt-16 lg:mt-28 parallax bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0687daa4-87a2-44ff-bcb3-a87d32d90c17/deuv4xf-69f31271-3739-4466-9c0d-ff6423946986.jpg/v1/fill/w_1193,h_670,q_70,strp/terror_mansion_by_krannart_deuv4xf-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzE5IiwicGF0aCI6IlwvZlwvMDY4N2RhYTQtODdhMi00NGZmLWJjYjMtYTg3ZDMyZDkwYzE3XC9kZXV2NHhmLTY5ZjMxMjcxLTM3MzktNDQ2Ni05YzBkLWZmNjQyMzk0Njk4Ni5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.g_P5U6CT6oB951yIpnYp2PDTP8ZYb0EDlAyt21SlgPs')] py-16">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10">
          <div>
          <h1 className="lg:text-7xl text-4xl text-center flex justify-center cinzel-decorative-regular">
          Dark Academia Fantasy
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="grid lg:grid-cols-4 grid-cols-2 mt-10 lg:gap-8">
              {animage_booklist.map((books, index) => (
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
  );
};

export default AnimageSeries;
