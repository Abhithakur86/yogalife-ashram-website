import { Calendar, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Phone, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";



export default function Home() {
  const [openLegacy, setOpenLegacy] = useState(false);
  const [openTeachers, setOpenTeachers] = useState(false);


  const [currentSlide, setCurrentSlide] = useState(0);
  const [openWhoWeAre, setOpenWhoWeAre] = useState(false);
  const [openAshram, setOpenAshram] = useState(false);



  const slides = [
    "/yoga.png",
    "/yoga1.png",
    "/yoga2.png",
    "/yoga3.png",
    "/yoga1.png",
  ];


  return (
    <>

      <section className="relative w-full h-screen overflow-hidden">
        <video
          src="/vide.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0" />

        <div
          className="absolute bottom-10 left-6 md:left-36 flex flex-col items-start text-[#feefe1]"
          style={{ fontFamily: "Philosopher, serif" }}
        >
          <h2 className="font-semibold text-xl md:text-[28px] mb-2">(Sao Paulo)</h2>

          <h1
            className="font-semibold text-4xl md:text-[48px]"
            style={{ WebkitTextStroke: "1.5px #b40800" }}
          >
            Yogalife Ashram
          </h1>

          <button
            className="mt-4 bg-[#b40800] rounded flex items-center gap-2 font-semibold px-5 py-2"
            style={{ fontFamily: "Martel Sans, sans-serif" }}
          >
            <Calendar size={18} color="white" />
            Retreat 2025
          </button>
        </div>
      </section>


      <section className="relative bg-white py-20 overflow-hidden">

        <img
          src="/bg.png"
          alt=""
          className="absolute left-0 top-32 w-[500px]  pointer-events-none"
        />

        <div className="relative max-w-6xl mx-auto px-6">


          <div className="relative mb-14 flex flex-col md:flex-row justify-center items-center md:items-start gap-6">
            <img
              src="/gls.png"
              alt=""
              className="hidden md:block absolute left-60 top-full mt-3 max-w-2xl"
            />

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
              <img src="/logo.png" alt="" className="w-24 h-24 md:w-32 md:h-32 rounded-full" />

              <div>
                <h3
                  className="text-lg md:text-[23.7px]"
                  style={{ fontFamily: "Martel Sans, sans-serif" }}
                >
                  Brasil Oldest
                </h3>

                <h2
                  className="text-3xl md:text-[46px] text-[#b40800] font-semibold"
                  style={{ fontFamily: "Philosopher, serif" }}
                >
                  Yoga Ashram
                </h2>
              </div>
            </div>
          </div>


          <p
            className="max-w-5xl mx-auto text-center text-black mt-16"
            style={{ fontFamily: "Martel Sans, sans-serif" }}
          >
            <span className="font-semibold">Yogalife Ashram</span>, world's first
            yoga center, was established in 1980 by the legendary yogi <br />
            <span className="font-semibold">Radhyshayam Mishr</span> also known as
            Guru Ji. Our life-changing courses have transformed millions of lives
            and created more than <span className="font-semibold">100000+</span>{" "}
            teachers worldwide.
          </p>


          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-20">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="text-center">
                <img
                  src={i === 0 ? "/mata.png" : "/nana.png"}
                  alt=""
                  className="w-[154px] h-[182px] mx-auto rounded-xl object-cover"
                />
                <p
                  className="mt-3 text-[9.5px] font-semibold"
                  style={{ fontFamily: "Philosopher, serif" }}
                >
                  Paramhamsa Madhavadas ji
                  <br />
                  1798 – 1921
                </p>
              </div>
            ))}
          </div>


          <div className="mt-16 flex flex-col items-center">
            <button
              onClick={() => setOpenLegacy(!openLegacy)}
              className="flex items-center gap-2"
            >
              <span
                className="text-[22px] font-semibold"
                style={{ fontFamily: "Philosopher, serif" }}
              >
                Know our Legacy
              </span>

              <ChevronUp
                size={22}
                strokeWidth={2}
                className={`transition-transform duration-300 ${openLegacy ? "rotate-180" : "rotate-45"
                  }`}
              />
            </button>

            <div className="w-56 h-[2px] bg-gradient-to-r from-[#b40800]/25 via-[#b40800] to-[#b40800]/25" />


            {openLegacy && (
              <div className="mt-20 md:mt-40 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-36 relative">
                <img
                  src="/ladki.png"
                  alt=""
                  className="hidden md:block absolute right-0 -top-20 w-[600px] "
                />


                <div>
                  <h3
                    className="text-[24px] font-semibold"
                    style={{ fontFamily: "Martel Sans, sans-serif" }}
                  >
                    Our Signature
                  </h3>

                  <h2
                    className="text-[#b40800] text-[40px] font-semibold"
                    style={{ fontFamily: "Philosopher, serif" }}
                  >
                    Immersions & Retreats
                  </h2>

                  <div className="w-96 h-[2px] bg-gradient-to-r from-[#b40800]/60 via-[#b40800]/30 to-transparent mt-1" />

                  <h4
                    className="mt-48 font-semibold  text-[#b40800]  text-[24px]"
                    style={{ fontFamily: "Martel Sans, sans-serif" }}
                  >
                    Formacao EM Hatha Yoga Classico
                  </h4>

                  <p
                    className="mt-4 font-semibold"
                    style={{ fontFamily: "Martel Sans, sans-serif" }}
                  >
                    YTT 200h – 01 de abril a 16 de abril de 2026
                    & <br></br> 500H – 01 de abril a 01 de maio de 2026 .....
                  </p>

                  <button
                    onClick={() => setOpenWhoWeAre(!openWhoWeAre)}
                    className="mt-20 px-6 py-2 bg-[#b40800] text-white rounded font-semibold"
                    style={{ fontFamily: "Philosopher, serif" }}
                  >
                    Know More
                  </button>

                </div>


                <div className="relative mt-10 md:mt-32 rounded-xl overflow-hidden w-full md:w-[125%] md:-ml-24">
                  <img
                    src={slides[currentSlide]}
                    alt=""
                    className="w-full h-[250px] md:h-[400px] object-cover transition-all duration-700"
                  />

                  <div className="absolute top-[200px] md:top-[350px] right-4 md:right-56 flex gap-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                            ? "bg-red-600 scale-110"
                            : "bg-white"
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}


            {openLegacy && (
              <>

                <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-36 relative">

                </div>


                {openWhoWeAre && (
                  <div className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">


                    <div>
                      <h3
                        className="text-[24px]"
                        style={{ fontFamily: "Martel Sans, sans-serif" }}
                      >
                        Who we Are
                      </h3>

                      <div className="mt-1">
                        <span
                          className="text-[38px] text-[#b40800] font-semibold"
                          style={{ fontFamily: "Philosopher, serif" }}
                        >
                          Yogalife Ashram
                        </span>
                        <span
                          className="ml-2  text-[20px]"
                          style={{ fontFamily: "Philosopher, serif" }}
                        >
                          (Sao Paulo)
                        </span>
                      </div>

                      <div className="mt-2 h-[1px] w-full bg-gradient-to-r from-[#b40800] via-[#b40800]/40 to-[#b40800]/10" />

                      <p
                        className="mt-10 leading-7 "
                        style={{ fontFamily: "Martel Sans, sans-serif" }}
                      >
                        Guruji e toda a família Yogalife vêm agora com este novo projeto dea,
                        expansão: Yogalife Ashram São Paulo — um espaço de paz, localizado em
                        meio à Serra da Cantareira, a apenas 1 hora da capital, e em plena
                        conexão com a natureza. Como parte do movimento Yogalife pelo mundo,
                        este novo espaço nasce para fortalecer a difusão do Yoga clássico
                        para todos e como mais um instrumento de transformação na vida das
                        pessoas.
                      </p>

                      <button
                        onClick={() => setOpenAshram(!openAshram)}
                        className="mt-8 px-6 py-2 bg-[#b40800] text-white rounded"
                        style={{ fontFamily: "Martel Sans, sans-serif" }}
                      >
                        Read More
                      </button>

                    </div>


                    <div className="flex justify-center md:justify-end">
                      <img
                        src="/baba.png"
                        alt=""
                        className="w-full max-w-[420px] rounded-xl object-cover"
                      />
                    </div>
                  </div>
                )}


                {openAshram && (
                  <div className="mt-28">
                    <div className="text-center">
                      <h4
                        className="text-[20px] -translate-x-16 "
                        style={{ fontFamily: "Martel Sans, sans-serif" }}
                      >
                        The Heaven
                      </h4>

                      <h2
                        className="text-[46px] text-[#b40800] font-semibold"
                        style={{ fontFamily: "Philosopher, serif" }}
                      >
                        The Ashram
                      </h2>

                      <img
                        src="/gls.png"
                        alt=""
                        className="mx-auto w-full max-w-[520px]"
                      />

                      <p
                        className="max-w-3xl mx-auto mt-10 text-center leading-7"
                        style={{ fontFamily: "Martel Sans, sans-serif" }}
                      >
                        O Yogalife Ashram São Paulo é um espaço de paz localizado em meio a
                        exuberância da Serra da Cantareira, voltado ao autodesenvolvimento
                        através do Yoga. Em conexão com a natureza e mergulhando no conhecimento
                        milenar do Yoga tradicional da Índia, as estadias e vivências no Ashram
                        nos proporcionam uma jornada profunda de autoconhecimento e contato com
                        nosso verdadeiro ser.
                      </p>
                    </div>


                    <div className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

                      <div>
                        <h3
                          className="text-[30px] text-[#b40800] font-semibold"
                          style={{ fontFamily: "Philosopher, serif" }}
                        >
                          Cabanas
                        </h3>

                        <div className="mt-1 h-[1px] w-32 bg-gradient-to-r from-[#b40800] to-[#b40800]/10" />

                        <p
                          className="mt-6 text-[16px] leading-6"
                          style={{ fontFamily: "Martel Sans, sans-serif" }}
                        >
                          Com capacidade para uma turma de 24 alunos,<br></br> possuímos no nosso Ashram
                          8 quartos com banheiro, <br></br> compartilhados com 3 camas cada, dispostas em <br></br>
                          beliches.
                        </p>
                      </div>


                      <div className="relative">
                        <img
                          src="/krish.png"
                          alt=""
                          className="rounded-xl w-full object-cover"
                        />

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          <span className="w-3 h-3 bg-red-600 rounded-full" />
                          <span className="w-3 h-3 bg-white rounded-full" />
                          <span className="w-3 h-3 bg-white rounded-full" />
                          <span className="w-3 h-3 bg-white rounded-full" />
                          <span className="w-3 h-3 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>


                    <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

                      {/* LEFT */}
                      <div>
                        <h3
                          className="text-[30px] text-[#b40800] font-semibold"
                          style={{ fontFamily: "Philosopher, serif" }}
                        >
                          Sattvik Bhojan
                        </h3>

                        <div className="mt-2 h-[1px] w-44 bg-gradient-to-r from-[#b40800] to-[#b40800]/10" />

                        <p
                          className="mt-6 text-[16px]"
                          style={{ fontFamily: "Martel Sans, sans-serif" }}
                        >
                          A Shala é a nossa sala de atividades em que <br></br> ministramos aulas,
                          meditações, palestras e todas as <br></br> práticas de ensino.
                        </p>
                      </div>


                      <div className="relative">
                        <img
                          src="/bhojn.png"
                          alt=""
                          className="rounded-xl w-full object-cover"
                        />

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          <span className="w-3 h-3 bg-red-600 rounded-full" />
                          <span className="w-3 h-3 bg-white rounded-full" />
                          <span className="w-3 h-3 bg-white rounded-full" />
                          <span className="w-3 h-3 bg-white rounded-full" />
                          <span className="w-3 h-3 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>




                    <div className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

                      <div>
                        <h3
                          className="text-[28px] text-[#b40800] font-semibold"
                          style={{ fontFamily: "Philosopher, serif" }}
                        >
                          Refeitório
                        </h3>

                        <div className="mt-2 h-[1px] w-44 bg-gradient-to-r from-[#b40800] to-[#b40800]/10" />

                        <p
                          className="mt-6 text-[15px]"
                          style={{ fontFamily: "Martel Sans, sans-serif" }}
                        >
                          A Shala é a nossa sala de atividades em que <br></br> ministramos aulas,
                          meditações, palestras e todas as <br></br> práticas de ensino.
                        </p>
                      </div>

                      <div className="relative">
                        <img
                          src="/krish.png"
                          alt=""
                          className="rounded-xl w-full object-cover"
                        />

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          <span className="w-3 h-3 bg-red-600 rounded-full" />
                          <span className="w-3 h-3 bg-white rounded-full" />
                          <span className="w-3 h-3 bg-white rounded-full" />
                          <span className="w-3 h-3 bg-white rounded-full" />
                          <span className="w-3 h-3 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>


                    <div className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

                      {/* LEFT */}
                      <div>
                        <h3
                          className="text-[28px] text-[#b40800] font-semibold"
                          style={{ fontFamily: "Philosopher, serif" }}
                        >
                          Ambiente
                        </h3>

                        <div className="mt-1 h-[1px] w-32 bg-gradient-to-r from-[#b40800] to-[#b40800]/10" />

                        <p
                          className="mt-6 text-[15px] leading-6"
                          style={{ fontFamily: "Martel Sans, sans-serif" }}
                        >
                          Com capacidade para uma turma de 24 alunos,<br></br> possuímos no nosso Ashram
                          8 quartos com banheiro, <br></br> compartilhados com 3 camas cada, dispostas em <br></br>
                          beliches.
                        </p>
                      </div>


                      <div className="relative">
                        <img
                          src="/suraj.png"
                          alt=""
                          className="rounded-xl w-full object-cover"
                        />

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          <span className="w-3 h-3 bg-red-600 rounded-full" />
                          <span className="w-3 h-3 bg-white rounded-full" />
                          <span className="w-3 h-3 bg-white rounded-full" />
                          <span className="w-3 h-3 bg-white rounded-full" />
                          <span className="w-3 h-3 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>

                    <div className="relative mt-40 flex justify-center items-center ">


                      <img
                        src="/bg.png"
                        alt=""
                        className="absolute left-6 md:left-36 mt-9 -translate-y-1/2 w-[300px] md:w-[450px] opacity-65 pointer-events-none z-0"
                      />

                      <div className="relative z-50">
                        <button
                          onClick={() => setOpenTeachers(!openTeachers)}
                          className="px-12 py-3 bg-[#b40800] text-white rounded text-[18px]"
                          style={{ fontFamily: "Philosopher, serif" }}
                        >
                          Know More
                        </button>

                      </div>
                    </div>

                    {openTeachers && (
                      <div className="mt-20 md:mt-32 max-w-6xl mx-auto px-6">

                        {/* ===== TOP CENTER ===== */}
                        <div className="text-center">
                          <h3
                            className="text-[23px] md:-translate-x-16 "
                            style={{ fontFamily: "Martel Sans, sans-serif" }}
                          >
                            The Guider
                          </h3>

                          <h2
                            className="text-[46px] text-[#b40800] font-semibold"
                            style={{ fontFamily: "Philosopher, serif" }}
                          >
                            The Teachers
                          </h2>

                          <img
                            src="/gls.png"
                            alt=""
                            className="mx-auto mt-1 w-[420px]"
                          />

                          <p
                            className="max-w-4xl mx-auto mt-10 text-center leading-7"
                            style={{ fontFamily: "Martel Sans, sans-serif" }}
                          >
                            A Yoga Teacher is more than an instructor—they are a guide who helps
                            students connect mind, body, and spirit through the practice of yoga.
                            With deep knowledge of postures (asanas), breathing techniques
                            (pranayama), meditation, and yogic philosophy, a yoga teacher creates a
                            safe and supportive environment for self-discovery and growth.
                          </p>
                        </div>

                        {/* ===== LOCATION ===== */}
                        <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="30"

                            fill=""
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
                          </svg>

                          <span
                            className="text-[32px] text-[#b40800] font-semibold"
                            style={{ fontFamily: "Philosopher, serif" }}
                          >
                            Sao Paulo, Brasil
                          </span>
                        </div>

                        <div className="mt-2 h-[2px] w-72 bg-gradient-to-r from-red-400 via-[#ff0000]/ to-[#ffffff]/10" />





                        <div className="mt-20 flex justify-center">
                          <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl w-full">
                            <div className="bg-[#b40800] w-full md:w-[450px] rounded-2xl flex justify-center items-end p-6 mx-auto">
                              <img
                                src="/admi.png"
                                alt=""
                                className="max-h-[500px]  object-contain"
                              />
                            </div>


                            <div className="bg-gradient-to-r from-red-200 to-[#ffffff] md:-translate-x-[85px] md:pl-14 mx-auto py-6 px-4 md:px-0 mt-4 md:mt-0 w-full rounded-2xl md:rounded-none">

                              <h3
                                className="text-[28px] text-[#b40800] font-semibold"
                                style={{ fontFamily: "Philosopher, serif" }}
                              >
                                Vachaspati Mishra
                              </h3>

                              <p
                                className="mt-6 leading-7 text-[16px]"
                                style={{ fontFamily: "Martel Sans, sans-serif" }}
                              >
                                <span className="whitespace-nowrap block">
                                  Yoga teacher and marketing professional based in São&nbsp;Paulo, Brazil.
                                </span> <span className="whitespace-nowrap block"> Trained at YogaLife Brasil under the Guruji, Dr. Radheshyam Mishra, she <br></br></span>
                                <span className="whitespace-nowrap block"> sought ways to manage her own mental and respiratory health issues and  </span>
                                <span className="whitespace-nowrap block">now blends her professional expertise with personal experience to create <br></br>   </span>
                                a unique teaching style. Her mission is to make yoga accessible to all,
                                helping others navigate life’s challenges.
                              </p>


                              <div className="mt-8 h-[1px] w-full bg-red-300" />

                              <div className="mt-6 flex items-end justify-between">
                                <div className="flex gap-5 items-center mt-14">
                                  <FaWhatsapp
                                    size={30}
                                    className="text-green-500 cursor-pointer hover:scale-110 transition"
                                  />

                                  <Instagram
                                    size={30}
                                    className="text-[#b40800] cursor-pointer hover:scale-110 transition"
                                  />
                                </div>


                                <div className="flex flex-col items-end  gap-2 text-[15px]">


                                  <div className="flex items-center gap-2 font-medium -translate-x-11">
                                    <Phone size={16} className="text-[#b40800]" />
                                    (11) 99920-9292
                                  </div>

                                  <div className="flex gap-6">
                                    <span className="flex items-center gap-1 font-semibold">
                                      📍 In Person
                                    </span>
                                    <span className="flex items-center gap-1 font-semibold">
                                      💻 Online
                                    </span>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>



                        <div className="mt-20 flex justify-center">
                          <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl w-full">
                        
                            <div className="bg-[#b40800] w-full md:w-[450px] rounded-2xl flex justify-center items-end p-6 mx-auto">
                              <img
                                src="orat.png"
                                alt=""
                                className="max-h-[300px] md:max-h-[500px] object-contain"
                              />
                            </div>

                            <div className="bg-gradient-to-r from-red-200 to-[#ffffff] md:-translate-x-[85px] md:pl-14 mx-auto py-6 px-4 md:px-0 mt-4 md:mt-0 w-full rounded-2xl md:rounded-none">

                              <h3
                                className="text-[28px] text-[#b40800] font-semibold"
                                style={{ fontFamily: "Philosopher, serif" }}
                              >
                                Carolina Horta Muniz
                              </h3>

                              <p
                                className="mt-6 leading-7 text-[16px]"
                                style={{ fontFamily: "Martel Sans, sans-serif" }}
                              >
                                <span className="whitespace-nowrap block">
                                  Yoga teacher and marketing professional based in São&nbsp;Paulo, Brazil.
                                </span> <span className="whitespace-nowrap block"> Trained at YogaLife Brasil under the Guruji, Dr. Radheshyam Mishra, she <br></br></span>
                                <span className="whitespace-nowrap block"> sought ways to manage her own mental and respiratory health issues and  </span>
                                <span className="whitespace-nowrap block">now blends her professional expertise with personal experience to create <br></br>   </span>
                                a unique teaching style. Her mission is to make yoga accessible to all,
                                helping others navigate life’s challenges.
                              </p>


                              <div className="mt-8 h-[1px] w-full bg-red-300" />



                              <div className="mt-6 flex items-end justify-between">

                                <div className="flex gap-5 items-center mt-14">
                                  <FaWhatsapp
                                    size={30}
                                    className="text-green-500 cursor-pointer hover:scale-110 transition"
                                  />

                                  <Instagram
                                    size={30}
                                    className="text-[#b40800] cursor-pointer hover:scale-110 transition"
                                  />
                                </div>


                                <div className="flex flex-col items-end  gap-2 text-[15px]">

                                  <div className="flex items-center gap-2 font-medium md:-translate-x-11">
                                    <Phone size={16} className="text-[#b40800]" />
                                    (11) 99920-9292
                                  </div>


                                  <div className="flex gap-6">
                                    <span className="flex items-center gap-1 font-semibold">
                                      📍 In Person
                                    </span>
                                    <span className="flex items-center gap-1 font-semibold">
                                      💻 Online
                                    </span>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>




                        <div className="mt-20 flex justify-center">
                          <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl w-full">


                            <div className="bg-[#b40800] w-full md:w-[450px] rounded-2xl flex justify-center items-end p-6 mx-auto">
                              <img
                                src="/admi.png"
                                alt=""
                                className="max-h-[500px]  object-contain"
                              />
                            </div>


                            <div className="bg-gradient-to-r from-red-200 to-[#ffffff] md:-translate-x-[85px] md:pl-14 mx-auto py-6 px-4 md:px-0 mt-4 md:mt-0 w-full rounded-2xl md:rounded-none">

                              <h3
                                className="text-[28px] text-[#b40800] font-semibold"
                                style={{ fontFamily: "Philosopher, serif" }}
                              >
                                Dua Santos
                              </h3>

                              <p
                                className="mt-6 leading-7 text-[16px]"
                                style={{ fontFamily: "Martel Sans, sans-serif" }}
                              >
                                <span className="whitespace-nowrap block">
                                  Yoga teacher and marketing professional based in São&nbsp;Paulo, Brazil.
                                </span> <span className="whitespace-nowrap block"> Trained at YogaLife Brasil under the Guruji, Dr. Radheshyam Mishra, she <br></br></span>
                                <span className="whitespace-nowrap block"> sought ways to manage her own mental and respiratory health issues and  </span>
                                <span className="whitespace-nowrap block">now blends her professional expertise with personal experience to create <br></br>   </span>
                                a unique teaching style. Her mission is to make yoga accessible to all,
                                helping others navigate life’s challenges.
                              </p>


                              <div className="mt-8 h-[1px] w-full bg-red-300" />


                              <div className="mt-6 flex items-end justify-between">

                                <div className="flex gap-5 items-center mt-14">
                                  <FaWhatsapp
                                    size={30}
                                    className="text-green-500 cursor-pointer hover:scale-110 transition"
                                  />

                                  <Instagram
                                    size={30}
                                    className="text-[#b40800] cursor-pointer hover:scale-110 transition"
                                  />
                                </div>


                                <div className="flex flex-col items-end  gap-2 text-[15px]">


                                  <div className="flex items-center gap-2 font-medium -translate-x-11">
                                    <Phone size={16} className="text-[#b40800]" />
                                    (11) 99920-9292
                                  </div>


                                  <div className="flex gap-6">
                                    <span className="flex items-center gap-1 font-semibold">
                                      📍 In Person
                                    </span>
                                    <span className="flex items-center gap-1 font-semibold">
                                      💻 Online
                                    </span>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div className="mt-24 flex justify-center">
                          <button
                            className="px-10 py-3 bg-[#b40800] text-white rounded text-[20px] font-semibold hover:bg-[#9e0600] transition"
                            style={{ fontFamily: "Philosopher, serif" }}
                          >
                            All Teachers
                          </button>
                        </div>














                      </div>
                    )}










                  </div>
                )}

              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
