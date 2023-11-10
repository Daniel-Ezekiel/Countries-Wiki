import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";
import axios from "axios";
import { SearchRounded } from "@mui/icons-material";

interface CountryInfo {
  area: number;
  name: { common: string };
  population: number;
  region: string;
  capital: string[];
  flags: { svg: string; alt: string };
}

function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [countries, setCountries] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [region, setRegion] = useState<string>("all");

  useEffect(() => {
    let url: string;

    if (searchVal) {
      url = `https://restcountries.com/v3.1/name/${searchVal}`;
    } else if (region !== "all") {
      url = `https://restcountries.com/v3.1/region/${region}`;
    } else {
      url = "https://restcountries.com/v3.1/all";
    }
    // const url: string = "https://restcountries.com/v3.1/all";

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
  }, [searchVal, region]);

  // console.log(countries);

  return (
    <main className='min-h-[90vh] p-4 dark:bg-blue-900 dark:text-white'>
      <div className='max-w-[124rem] mx-auto pt-8 grid gap-8'>
        <section className='w-full flex flex-wrap justify-between gap-2'>
          <div className='relative w-full md:w-[45%]'>
            <input
              type='text'
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder='Search for a country...'
              className='dark:bg-blue-700 w-full p-3 pl-10 rounded-lg shadow-lg'
            />
            <SearchRounded
              fontSize='large'
              className='absolute left-3 top-1/2 -translate-y-1/2'
            />
          </div>

          <select
            name='region'
            id='region'
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className='dark:bg-blue-700 p-3 rounded-lg shadow-lg'
          >
            <option value='all'>Filter by Region</option>
            <option value='africa'>Africa</option>
            <option value='america'>America</option>
            <option value='asia'>Asia</option>
            <option value='europe'>Europe</option>
            <option value='oceania'>Oceania</option>
          </select>
        </section>

        <section className='w-full grid justify-start gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {searchVal
            ? countries.map((countryInfo, index) => (
                <CountryCard key={index} country={countryInfo} />
              ))
            : countries
                .filter((countryInfo: CountryInfo) =>
                  countryInfo.name.common
                    .toLowerCase()
                    .includes(searchVal.toLowerCase())
                )
                .map((countryInfo, index) => (
                  <CountryCard key={index} country={countryInfo} />
                ))}
        </section>
      </div>
    </main>
  );
}

export default Home;
