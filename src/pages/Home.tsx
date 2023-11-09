import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";
import axios from "axios";

function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [countries, setCountries] = useState([]);
  // const [region, setRegion] = useState<string>("all");

  useEffect(() => {
    // const url: string =
    //   region === "all"
    //     ? "https://restcountries.com/v3.1/all"
    //     : `https://restcountries.com/v3.1/region/${region}`;
    const url: string = "https://restcountries.com/v3.1/all";

    try {
      setIsLoading(true);

      axios.get(url).then((response) => {
        setCountries(response.data);
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(!isLoading);
    }
  }, []);

  console.log(countries);

  return (
    <main className='min-h-[90vh] p-4 dark:bg-blue-900 dark:text-white'>
      <div className='max-w-[124rem] mx-auto'>
        <section className='w-full'>Section 1</section>
        <section className='w-full grid grid-cols-[repeat(auto-fit,_minmax(25rem,1fr))] justify-center gap-10'>
          {countries.map((country, index) => (
            <CountryCard key={index} countryObject={country} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default Home;
