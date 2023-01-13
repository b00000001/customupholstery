export default function Navbar(props) {
  return (
    <div
      ref={props.myRef}
      className="h-1/5 text-white text-3xl flex items-center justify-between w-auto z-50"
    >
      <div className="pl-12 font-bold">Logo</div>
      <div className="w-2/5">
        <ul className="flex justify-evenly w-11/12 text-xl font-bold">
          <li className="transition-all ease-in-out duration-[200ms] hover:text-slate-400 cursor-pointer">
            Home
          </li>
          <li className="transition-all ease-in-out duration-[200ms] hover:text-slate-400 cursor-pointer">
            About Us
          </li>
          <li className="transition-all ease-in-out duration-[200ms] hover:text-slate-400 cursor-pointer">
            Service
          </li>
          <li className="transition-all ease-in-out duration-[200ms] hover:text-slate-400 cursor-pointer">
            Photo Gallery
          </li>
          <li className="transition-all ease-in-out duration-[200ms] hover:text-slate-400 cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}
