"use client";
import { login } from "@/app/actions/auth";
import { useAuth } from "@/app/hooks/auth";
import Footer from "@/components/common/footer";
import { loginUser } from "@/lib/functions";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const { step, setStep, phone, otp, setOtp, setPhone } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const error = params.get("error");
    const message = params.get("message");
    if (message) {
      setError(message);
      toast.error(message);
    }
    if (error) {
      toast.error(error);
      setError("");
    }
  }, []);

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await login(phone);
      setStep("otp");
    } catch (err) {
      console.error(err);
      setError("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      console.log("Verifying OTP:", otp);
      const res = await loginUser(phone, otp);
      console.log(res);
      if (res.type === "error") {
        setError(res.message);
        return;
      }
    } catch (err) {
      console.error(err);
      setError("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="py-12 bg-gray-950 sm:py-16 lg:py-20 xl:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 xl:gap-x-36">
            <div>
              <Image
                className="object-cover w-full h-full rounded-2xl"
                src="/maytri/maytri1.jpeg"
                alt="Login Illustration"
                width={500}
                height={500}
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Welcome back dear ❤️
              </h2>
              <p className="mt-4 text-base font-normal leading-7 text-gray-400 lg:text-lg lg:mt-6 lg:leading-8">
                Maytri has been waiting for you! Sign in to your account to
                start
              </p>
              <div className="mt-10">
                <a
                  href="#"
                  title="Sign in with Google"
                  className="inline-flex items-center justify-center w-full px-6 py-4 text-base font-medium text-white transition-all duration-200 bg-gray-800 border border-transparent rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:ring-offset-gray-900"
                  role="button"
                  onClick={(e) => e.preventDefault()} // Prevent default behavior
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG Paths */}
                    <path
                      d="M23.5194 9.91355L13.7299 9.91309C13.2977 9.91309 12.9473 10.2634 12.9473 10.6957V13.823C12.9473 14.2552 13.2977 14.6056 13.7299 14.6056H19.2427C18.639 16.1722 17.5124 17.4842 16.0749 18.3178L18.4255 22.387C22.1963 20.2062 24.4256 16.3799 24.4256 12.0965C24.4256 11.4866 24.3806 11.0506 24.2907 10.5597C24.2224 10.1867 23.8985 9.91355 23.5194 9.91355Z"
                      fill="#167EE6"
                    />
                    <path
                      d="M12.4241 19.3043C9.72629 19.3043 7.37109 17.8303 6.10616 15.649L2.03711 17.9944C4.10782 21.5832 7.98694 24 12.4241 24C14.6009 24 16.6548 23.4139 18.4242 22.3925V22.387L16.0735 18.3177C14.9983 18.9414 13.754 19.3043 12.4241 19.3043Z"
                      fill="#12B347"
                    />
                    <path
                      d="M18.4258 22.3925V22.387L16.0752 18.3177C14.9999 18.9413 13.7558 19.3043 12.4258 19.3043V24C14.6025 24 16.6566 23.4139 18.4258 22.3925Z"
                      fill="#0F993E"
                    />
                    <path
                      d="M5.12146 12C5.12146 10.6702 5.48437 9.42613 6.10786 8.35096L2.03881 6.00562C1.01182 7.76938 0.425781 9.81773 0.425781 12C0.425781 14.1824 1.01182 16.2307 2.03881 17.9945L6.10786 15.6491C5.48437 14.5739 5.12146 13.3298 5.12146 12Z"
                      fill="#FFD500"
                    />
                    <path
                      d="M12.4241 4.69566C14.1834 4.69566 15.7994 5.32078 17.0616 6.36061C17.373 6.61711 17.8256 6.59859 18.1108 6.31336L20.3266 4.09758C20.6502 3.77395 20.6272 3.24422 20.2815 2.94431C18.1667 1.10967 15.4151 0 12.4241 0C7.98694 0 4.10782 2.41673 2.03711 6.00558L6.10616 8.35092C7.37109 6.16969 9.72629 4.69566 12.4241 4.69566Z"
                      fill="#FF4B26"
                    />
                    <path
                      d="M17.0632 6.36061C17.3746 6.61711 17.8273 6.5986 18.1125 6.31336L20.3282 4.09758C20.6518 3.77395 20.6288 3.24422 20.2831 2.94431C18.1683 1.10963 15.4168 0 12.4258 0V4.69566C14.185 4.69566 15.801 5.32078 17.0632 6.36061Z"
                      fill="#D93F21"
                    />
                  </svg>
                  Sign in with Google
                </a>
              </div>
              <div className="mt-12">
                <AnimatePresence>
                  {step === "phone" && (
                    <motion.form
                      key="phoneForm"
                      onSubmit={handlePhoneSubmit}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6"
                    >
                      <div>
                        <label
                          htmlFor="phone"
                          className="text-sm font-normal text-gray-200"
                        >
                          Phone Number
                        </label>
                        <div className="mt-2">
                          <input
                            type="number"
                            name="phone"
                            id="phone"
                            placeholder="9181273287"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="block w-full px-6 py-4 text-base font-normal text-white placeholder-gray-400 bg-transparent border border-gray-700 rounded-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      {error && <p className="text-sm text-red-500">{error}</p>}
                      <button
                        type="submit"
                        disabled={loading}
                        className={`inline-flex items-center justify-center px-12 py-4 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:ring-offset-gray-900 w-full ${
                          loading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        {loading ? "Sending OTP..." : "Send OTP"}
                      </button>
                    </motion.form>
                  )}

                  {step === "otp" && (
                    <motion.form
                      key="otpForm"
                      onSubmit={handleOtpSubmit}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6"
                    >
                      <div>
                        <label
                          htmlFor="otp"
                          className="text-sm font-normal text-gray-200"
                        >
                          Enter OTP
                        </label>
                        <div className="mt-2">
                          <input
                            type="number"
                            name="otp"
                            id="otp"
                            placeholder="******"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                            className="block w-full px-6 py-4 text-base font-normal text-white placeholder-gray-400 bg-transparent border border-gray-700 rounded-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      {error && <p className="text-sm text-red-500">{error}</p>}
                      <button
                        type="submit"
                        disabled={loading}
                        className={`inline-flex items-center justify-center px-12 py-4 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:ring-offset-gray-900 w-full ${
                          loading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        {loading ? "Logging in..." : "Login"}
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep("phone")}
                        className="text-sm font-semibold text-blue-500 hover:underline w-full text-center"
                      >
                        Back to Phone Input
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
