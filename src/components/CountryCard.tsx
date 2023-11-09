type countryInfo = {
  countryObject: {
    area: number;
    name: { common: string };
    flags: { svg: string; alt: string };
  };
};

function CountryCard({ countryObject }: countryInfo) {
  return (
    <div className='min-h-[30rem] dark:bg-blue-700 self-center shadow-xl rounded-xl overflow-hidden'>
      <img
        src={countryObject.flags.svg}
        alt={countryObject.flags.alt}
        className='w-full min-h-[16rem] aspect-video object-cover'
      />

      <div className='p-4 pb-10 flex flex-col gap-1'>
        <h3 className='py-2 font-extrabold text-lg'>
          {countryObject.name.common}
        </h3>

        <p className='text-base'>
          <span className='font-semibold'>Population:</span> 81,770,900
        </p>
        <p className='text-base'>
          <span className='font-semibold'>Region:</span> Europe
        </p>
        <p className='text-base'>
          <span className='font-semibold'>Capital:</span> Berlin
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
