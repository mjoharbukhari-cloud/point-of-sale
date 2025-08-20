
import { Container } from "../container.component";
import { useNavigate } from "react-router-dom";


export const HeroSection = () => {
     const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/signup");
  };
  return (
    <div>
      <Container className="bg-primary ">
        <section id="home">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center py-6 gap-8">
            {/* Left Text Section */}
            <div className="w-full py-7 lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight">
                Cash Register and Warehouse Management Software
              </h2>
              <p className="pt-4 sm:pt-6 text-base sm:text-lg">
                Transform your smartphone or tablet into powerful cloud-based
                POS software. Easily manage sales, inventory, and employees;
                engage customers and increase revenue. Whether you have one
                store or multiple locations, our tools help you run your
                business at its best.
              </p>
              <div className="pt-6 flex gap-4 flex-wrap">
                <button
                  onClick={handleStartClick}
                  className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-md text-white text-base font-semibold"
                >
                  Start
                </button>
                <button className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-md text-white text-base font-semibold">
                  Chat with us
                </button>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                src="/assets/POS.png"
                alt="POS Software"
              />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};
