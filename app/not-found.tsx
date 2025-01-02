import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Image from "next/image";

export default function CommingSoon() {
  return (
    <>
      <Header />
      <section className="py-10 bg-gray-950 sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
            <div className="pr-12 sm:pr-0">
              <div className="relative max-w-xs mb-12">
                <Image
                  className="object-bottom rounded-md"
                  src="/maytri/maytriAsianTrans.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Coming Soon!
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-400">
                Maytri is a work in progress. We are working hard to bring you
                the best experience possible. Stay tuned for updates!
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
