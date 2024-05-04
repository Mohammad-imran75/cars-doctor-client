import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
import {
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y, EffectFade]}
      spaceBetween={50}
      effect="flip"
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <img style={{ width: "100%", height: "90vh" }} src={img1} alt="" />
        <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500] left-0 top-0 ">
          <div className="w-1/2 rounded-xl text-white pl-28 pt-28 space-y-7">
            <div>
              <h2 className="text-6xl font-bold">
                Affordable Price For Car <br /> Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
            </div>
            <div className="flex gap-5">
              <button className="btn btn-secondary bg-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-secondary btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img style={{ width: "100%", height: "90vh" }} src={img2} alt="" />
        <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500] left-0 top-0 ">
          <div className="w-1/2 rounded-xl text-white pl-28 pt-28 space-y-7">
            <div>
              <h2 className="text-6xl font-bold">
                Affordable Price For Car <br /> Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
            </div>
            <div className="flex gap-5">
              <button className="btn btn-secondary bg-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-secondary btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img style={{ width: "100%", height: "90vh" }} src={img3} alt="" />
        <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500] left-0 top-0 ">
          <div className="w-1/2 rounded-xl text-white pl-28 pt-28 space-y-7">
            <div>
              <h2 className="text-6xl font-bold">
                Affordable Price For Car <br /> Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
            </div>
            <div className="flex gap-5">
              <button className="btn btn-secondary bg-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-secondary btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img style={{ width: "100%", height: "90vh" }} src={img4} alt="" />
        <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500] left-0 top-0 ">
          <div className="w-1/2 rounded-xl text-white pl-28 pt-28 space-y-7">
            <div>
              <h2 className="text-6xl font-bold">
                Affordable Price For Car <br /> Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
            </div>
            <div className="flex gap-5">
              <button className="btn btn-secondary bg-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-secondary btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img style={{ width: "100%", height: "90vh" }} src={img5} alt="" />
        <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500] left-0 top-0 ">
          <div className="w-1/2 rounded-xl text-white pl-28 pt-28 space-y-7">
            <div>
              <h2 className="text-6xl font-bold">
                Affordable Price For Car <br /> Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
            </div>
            <div className="flex gap-5">
              <button className="btn btn-secondary bg-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-secondary btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img style={{ width: "100%", height: "90vh" }} src={img6} alt="" />
        <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500] left-0 top-0 ">
          <div className="w-1/2 rounded-xl text-white pl-28 pt-28 space-y-7">
            <div>
              <h2 className="text-6xl font-bold">
                Affordable Price For Car <br /> Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
            </div>
            <div className="flex gap-5">
              <button className="btn btn-secondary bg-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-secondary btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
