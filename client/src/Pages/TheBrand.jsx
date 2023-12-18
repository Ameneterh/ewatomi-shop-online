import React from "react";
import bgceo1 from "/ceo-cover.png";

export default function TheBrand() {
  return (
    <div className="py-20 px-4 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-4 text-slate-800 text-center">
        About Ewatomi Unique Beauty Place
      </h1>

      {/* about */}
      <div>
        <h2 className="text-2xl font-semibold mb-3 text-slate-800"></h2>
        <p className="mb-4 text-slate-700">
          Ewatomi Unique Beauty Place has been involved with the fashion
          industry for several years. She has been actively marketing fashion
          products online since 2018 in Ado Ekiti, Ekiti State, Nigeria.
          Although praised for the quality of many of beauty products she sales,
          she has attained a special notoriety for her hair and hair care
          products.
        </p>
        <p className="mb-4 text-slate-700">
          Ewatomi Unique Beauty Place is registered with the Corporate Affairs
          Commission in August 2020 with registration number BN3171142 and
          business address as ABUAD Multisystem Hospital, Ado Ekiti, Ekiti
          State, Nigeria. The company was started to make available quality and
          affordable hair and beauty products.
        </p>
        <p className="mb-4 text-slate-700">
          The company Chief Executive Officer (CEO), Idowu Oluboba Ewatomi, is a
          fashionpreneur (fashion entrepreneur)
        </p>
      </div>

      {/* mission */}
      <div>
        <h2 className="text-2xl font-semibold mb-3 text-slate-800">
          Mission Statement
        </h2>
        <p className="mb-4 text-slate-700">
          To change the way fashion is thought of by delivering premium designs
          at radically fair prices; it is our belief that no one needs break the
          bank to step out in style.
        </p>
      </div>

      {/* vision */}
      <div>
        <h2 className="text-2xl font-semibold mb-3 text-slate-800">
          Vision Statement
        </h2>
        <p className="mb-4 text-slate-700">
          To bring fashion to our esteemed customers in an affordable way.
        </p>
      </div>

      {/* about the ceo */}
      <div
        className="mt-10 bg-cover rounded-lg py-5"
        style={{ backgroundImage: `url(${bgceo1})` }}
      >
        <h1 className="text-2xl text-blue-700 font-bold p-3 w-full text-center">
          Meet the CEO
        </h1>
        <div className="px-3 py-5 flex flex-col md:flex-row items-center md:items-start gap-4">
          <img
            src="/ceo-image.jpg"
            alt="ceo image"
            className="h-80 w-80 md:h-60 md:w-60 rounded-full"
          />

          <div className="flex flex-col gap-6 text-lg">
            <p className="text-justify">
              <b>Oluboba Idowu Ewatomi</b> has been involved with the fashion
              industry for several years. She has been actively marketing
              fashion products online since 2018 in Ado Ekiti, Ekiti State,
              Nigeria. Although praised for the quality of many of the beauty
              products she sales, she has attained a special notoriety for her
              hair and hair care products.
            </p>
            <p className="text-justify">
              Beauty products marketed by Oluboba Idowu Ewatomi through Ewatomi
              Unique Beauty Place include hair bonnet, curl reviver (a
              formulation specially formulated by her for curly hairs), Argan
              Serum (for straight and wavy hairs), clothes, shoes, bags, and her
              quality human hair, wigs, and hair accessories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
