import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            perferendis autem, nesciunt cumque voluptatibus blanditiis odio
            quod, placeat obcaecati iste voluptates nemo alias, illo modi quas
            ea nam error doloremque.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="mt-5">Sapiente sint culpa</p>
          <p className="mt-5">Voluptates numquam et </p>
          <p className="mt-5">Ullama vivammoois</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="mt-5">
            Accusamus quos nam sapiente odit animi commodi.
          </p>
          <p>(333)222-5555</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
