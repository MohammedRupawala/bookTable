const Home = () => {
    return (
      <div className="bg-cyan-700 min-h-screen flex flex-col items-center  justify-center">
        <section className="m-3 h-8">
          Some Thing
        </section>
        <section>
          <label htmlFor="nameInput" className="block text-white">Enter Your Name</label>
          <input id="nameInput" placeholder="Enter Your Name" className="p-2 mt-2 rounded" />
          <div className="mt-4">
            <img src="/assets/PSW-101.jpg" alt="Sample Image" className="rounded" />
          </div>
        </section>
      </div>
    );
  };
  
  export default Home;
  