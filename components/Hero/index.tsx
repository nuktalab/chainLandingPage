import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Your Healthcare Passport!
                </h1>
                <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                  SafeChain is a blockchain-powered solution, providing a
                  decentralized and secure platform for managing healthcare
                  records globally. Ensure privacy, integrity, and accessibility
                  with our advanced features and cutting-edge technology.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  
                  <Link
                    href="#https://safechain.me"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Get Started   🚀
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-20">
          <Image
                  src="/images/logo/knot.svg"
                  alt="logo"
                  width={100}
                  height={10}
                  className="hidden w-full dark:block"
                />
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-50">
          {/* Replace the SVG content with the Safe Chain visuals */}
          {/* ... (Safe Chain SVG content) */}
          <Image
                  src="/images/logo/logo.svg"
                  alt="logo"
                  width={100}
                  height={10}
                  className="hidden w-full dark:block"
                />
        </div>
      </section>
    </>
  );
};

export default Hero;
