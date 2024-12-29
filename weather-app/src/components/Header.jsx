import { WiDayCloudy } from "react-icons/wi";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md flex justify-center items-center">
      <WiDayCloudy size={40} className="mr-2" />
      <h1 className="text-xl font-bold">Weather App</h1>
    </header>
  );
};

export default Header;
