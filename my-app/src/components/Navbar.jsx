export function Navbar() {
  return (
    <>
      <div className="text-blue-400 m-6 p-2 text-2xl flex justify-between list-none">
        <li>
          <a href="" style={{ color: "red" }}>
            Home
          </a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">contact</a>
        </li>
        <li>
          <a href="">services</a>
        </li>
      </div>
    </>
  );
}
export function Hero() {
  return (
    <>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugit
          quam eius adipisci repudiandae consequuntur, repellendus voluptatibus
          magnam modi recusandae!
        </p>
      </div>
    </>
  );
}

function Footer() {
  return (
    <>
      <p className="text-center">All right reserved by kausar programmer</p>
    </>
  );
}

export default Footer;
// only for one
