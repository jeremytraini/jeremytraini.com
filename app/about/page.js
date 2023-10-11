
export default function About() {
  return (
    <section className="flex flex-col justify-start gap-4 py-8 md:py-10">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About</h1>
          <p className="text-xl mb-6">About me</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Contact me
          </button>
        </div>
      </div>
    </section>
  )
}
