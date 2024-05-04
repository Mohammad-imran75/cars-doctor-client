import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div>
      <h1 className="text-center text-[#FF3811] font-bold mt-10">service</h1>
      <div className="text-center mt-10 space-y-6">
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, <br /> or randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={parts}
              className="w-2/4 rounded-lg shadow-2xl absolute right-16 top-40 border-8 border-white"
            />
          </div>
          <div className="lg:w-1/2">
            <p className="font-bold text-[#FF3811]">About Us</p>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable.
            </p>
            <p className="py-6">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which do not look even slightly
              believable.
            </p>
            <button className="btn btn-primary bg-[#FF3811]">
              Get more info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
