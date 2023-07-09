import React from 'react'

function DashboardSettings() {
  return (
    <div className="flex justify-center items-center mt-10">
      <div class="mt-10 sm:mt-0 my-10 mx-10 sm:w-11/12 lg:w-3/5" >
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
              <p class="mt-1 text-sm leading-5 text-gray-600">
                Decide which communications you'd like to receive and how.
              </p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <fieldset>
                    <legend class="text-base leading-6 font-medium text-gray-900">By Email</legend>
                    <div class="mt-4">
                      <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input id="comments" type="checkbox" class="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out" />
                        </div>
                        <div class="ml-3 text-sm leading-5">
                          <label for="comments" class="font-medium text-gray-700">Comments</label>
                          <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                        </div>
                      </div>
                      <div class="mt-4">
                        <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="candidates" type="checkbox" class="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out" />
                          </div>
                          <div class="ml-3 text-sm leading-5">
                            <label for="candidates" class="font-medium text-gray-700">Candidates</label>
                            <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                          </div>
                        </div>
                      </div>
                      <div class="mt-4">
                        <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="offers" type="checkbox" class="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out" />
                          </div>
                          <div class="ml-3 text-sm leading-5">
                            <label for="offers" class="font-medium text-gray-700">Offers</label>
                            <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset class="mt-6">
                    <legend class="text-base leading-6 font-medium text-gray-900">Push Notifications</legend>
                    <p class="text-sm leading-5 text-gray-500">These are delivered via SMS to your mobile phone.</p>
                    <div class="mt-4">
                      <div class="flex items-center">
                        <input id="push_everything" name="push_notifications" type="radio" class="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out" />
                        <label for="push_everything" class="ml-3">
                          <span class="block text-sm leading-5 font-medium text-gray-700">Everything</span>
                        </label>
                      </div>
                      <div class="mt-4 flex items-center">
                        <input id="push_email" name="push_notifications" type="radio" class="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out" />
                        <label for="push_email" class="ml-3">
                          <span class="block text-sm leading-5 font-medium text-gray-700">Same as email</span>
                        </label>
                      </div>
                      <div class="mt-4 flex items-center">
                        <input id="push_nothing" name="push_notifications" type="radio" class="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out" />
                        <label for="push_nothing" class="ml-3">
                          <span class="block text-sm leading-5 font-medium text-gray-700">No push notifications</span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button class="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 shadow-sm hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue focus:bg-blue-500 active:bg-blue-600 transition duration-150 ease-in-out">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardSettings
