import Layout from "./Layout";

const RegistrationPage = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <marquee className="mb-4" behavior="" direction="left">
        Accepted papers will be published in "Journal of Autonomous
        Intelligence"
      </marquee>
      <h2 class="mb-3 text-3xl font-extrabold tracking-tight text-gray-900">
        Journal of Autonomous Intelligence
      </h2>
      <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
        Registration Fee Details
      </p>
      <div className="flex gap-10">
        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  ">
          <h5 class="mb-4 text-xl font-medium text-gray-500 ">For Indians</h5>
          <div class="flex items-baseline text-gray-900 ">
            <span class="text-3xl font-semibold">$</span>
            <span class="text-5xl font-extrabold tracking-tight">60</span>
            <span class="ml-1 text-xl font-normal text-gray-500 ">/person</span>
          </div>
        </div>
        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  ">
          <h5 class="mb-4 text-xl font-medium text-gray-500 ">
            For Foreigners
          </h5>
          <div class="flex items-baseline text-gray-900 ">
            <span class="text-3xl font-semibold">$</span>
            <span class="text-5xl font-extrabold tracking-tight">100</span>
            <span class="ml-1 text-xl font-normal text-gray-500 ">/person</span>
          </div>
        </div>
      </div>
    </div>
  );
};
const Registration = () => {
  return <Layout headerText={"REGISTRATION"} children={<RegistrationPage />} />;
};

export default Registration;
