const Footer = () => {
  return (
    <footer className="h-36 bg-gradient-to-r from-blue to-green-500 pt-10">
      <div className="w-10/12 mx-auto flex justify-between">
        <div className="flex flex-col justify-start">
          <p className="font-playfair font-semibold text-3xl text-deep-blue">
            Mustafah Hasan
          </p>
          <p className="font-playfair text-md text-deep-blue">
            ©2023 Hasan. All Rights Reserved.{" "}
          </p>
        </div>

        <div className="flex justify-end text-xl text-deep-blue">
          <div className="text-right">
            <p className="font-playfair font-semibold">Email:</p>
            <p>mostafahasan761@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
