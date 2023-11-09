import { LightMode, DarkMode } from "@mui/icons-material";

interface HeaderProps {
  currTheme: string | null;
  handleThemeChange: () => void;
}

function Header({ currTheme, handleThemeChange }: HeaderProps) {
  return (
    <header className='min-h-[10vh] p-4 flex items-center shadow-md dark:bg-blue-700 dark:text-white'>
      <div className='w-full max-w-[120rem] mx-auto flex justify-between items-center'>
        <h1 className='font-bold text-lg md:text-2xl xl:text-3xl'>
          Where in the world?
        </h1>

        <button
          className='flex gap-1 items-center capitalize md:text-xl'
          onClick={handleThemeChange}
        >
          {currTheme === "light" ? (
            <LightMode fontSize='large' sx={{ color: "#2b3945" }} />
          ) : (
            <DarkMode fontSize='large' />
          )}
          {`${currTheme} mode`}
        </button>
      </div>
    </header>
  );
}

export default Header;
