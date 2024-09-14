import React from "react";
import about_image from "/fashion_accessories.jpeg";
import Title from "../Components/Title";

export default function TheBrand() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-2xl font-medium mb-4 text-center">
        <Title text1={"about"} text2={"us"} />
      </div>

      {/* about */}
      <div className="my-10 flex flex-col items-start lg:flex-row gap-16">
        <img
          src={about_image}
          alt=""
          className="w-full md:max-w-[450px]  rounded-lg"
        />
        <div className="flex flex-col justify-center gap-4 md:w-2/4 text-gray-600 text-md">
          <p>
            <span className="font-bold">Ewatomi Unique Beauty Place</span> has
            been involved with the fashion industry for several years. She has
            been actively marketing fashion products online since 2018 in Ado
            Ekiti, Ekiti State, Nigeria. Although praised for the quality of
            many of beauty products she sales, she has attained a special
            notoriety for her hair and hair care products.
          </p>
          <p>
            Ewatomi Unique Beauty Place is registered with the Corporate Affairs
            Commission in August 2020 with registration number BN3171142 and
            business address as ABUAD Multisystem Hospital, Ado Ekiti, Ekiti
            State, Nigeria. The company was started to make available quality
            and affordable hair and beauty products.
          </p>
          <p>
            The company Chief Executive Officer (CEO), Idowu Oluboba Ewatomi, is
            a fashionpreneur (fashion entrepreneur)
          </p>

          <div className="flex flex-col md:flex-row gap-2 w-full">
            {/* mission */}
            <div className="flex flex-col gap-1 md:w-2/3 p-2 bg-gray-200 rounded-md">
              <b className="text-gray-800">Our Mission</b>
              <p>
                To change the way fashion is thought of by delivering premium
                designs at radically fair prices; it is our belief that no one
                needs break the bank to step out in style.
              </p>
            </div>

            {/* vision */}
            <div className="flex flex-col gap-1 flex-1 p-2 bg-gray-300 rounded-md">
              <b className="text-gray-800">Our Vision</b>
              <p>
                To bring fashion to our esteemed customers in an affordable way.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* why chose us */}
      <div className="text-2xl py-4">
        <Title text1={"why"} text2={"choose us"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assured:</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience Assured:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering
            processing, your shopping shall never be easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Service Assured:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals are here to assist you all the
            way; ensuring your satisfaction is our priority.
          </p>
        </div>
      </div>

      {/* about the ceo */}
      <hr className="border-none h-[2px] bg-slate-300 mb-4" />
      <div className="text-2xl py-4">
        <Title text1={"meet"} text2={"the ceo"} />
      </div>
      <div className=" flex flex-col-reverse lg:flex-row gap-16 justify-center items-center bg-gray-300 p-4 rounded-xl">
        <div className="flex flex-col justify-center gap-4 md:w-2/4 text-gray-600 text-md">
          <p>
            <span className="font-bold">Oluboba Idowu Ewatomi</span> has been
            involved with the fashion industry for several years. She has been
            actively marketing fashion products online since 2018 in Ado Ekiti,
            Ekiti State, Nigeria. Although praised for the quality of many of
            the beauty products she sales, she has attained a special notoriety
            for her hair and hair care products.
          </p>
          <p>
            Beauty products marketed by Oluboba Idowu Ewatomi through Ewatomi
            Unique Beauty Place include hair bonnet, curl reviver (a formulation
            specially formulated by her for curly hairs), Argan Serum (for
            straight and wavy hairs), clothes, shoes, bags, and her quality
            human hair, wigs, and hair accessories.
          </p>
        </div>
        <img
          src="/ceo-image.jpg"
          alt=""
          className="w-full md:max-w-[350px] rounded-full"
        />
      </div>
    </div>
  );
}
