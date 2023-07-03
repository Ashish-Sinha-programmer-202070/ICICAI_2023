import Layout from "./Layout";

const ImportantDatesPage = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <marquee className="mb-10" behavior="" direction="left">
          Accepted papers will be published in "Journal of Autonomous
          Intelligence"
        </marquee>
        <div className="mt-0 mb-10 font-sanchez">
          <h2 className="text-xl text-slate-900">Important Dates</h2>
          <div class="flex flex-col">
            <div class="-m-1.5 overflow-x-auto">
              <div class="p-1.5 min-w-full inline-block align-middle">
                <div class="overflow-hidden">
                  <table class="divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        >
                          Event
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        >
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                          Submission Deadline
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                          15<sup>th</sup> September 2023
                        </td>
                      </tr>

                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                          Notification of Acceptance
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                          15<sup>th</sup> October 2023
                        </td>
                      </tr>

                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                          Camera Ready <br />
                          Submission for Revised Paper
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                          15<sup>th</sup> November 2023
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                          Registration Deadline
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                          1<sup>st</sup> December 2023
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const ImportantDates = () => {
  return (
    <Layout headerText={"IMPORTANT DATES"} children={<ImportantDatesPage />} />
  );
};

export default ImportantDates;
