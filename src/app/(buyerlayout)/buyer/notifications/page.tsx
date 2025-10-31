import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function NotificationsPage() {
  return (
    <div>
      <div className="w-full  mx-auto p-4 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Profile & Settings
          </h1>
          <p className="text-sm text-gray-500 mt-1">Profile › Notification</p>
        </div>

        <hr className="border-gray-200" />

        {/* Main Settings Title */}
        <h2 className="text-lg font-medium text-gray-900">
          Profile & Settings
        </h2>

        {/* Push & Email Toggles */}
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-white rounded-md p-4">
            <Label
              htmlFor="push"
              className="text-base  text-gray-700 font-medium"
            >
              Push
            </Label>
            <Switch id="push" defaultChecked />
          </div>

          <div className="flex items-center justify-between bg-white rounded-md p-4">
            <Label
              htmlFor="email"
              className="text-base font-normal text-gray-700"
            >
              Email
            </Label>
            <Switch id="email" defaultChecked  />
          </div>
        </div>

        {/* Notification Types Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900">
            Notification Types
          </h3>

          <div className="space-y-5">
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between bg-white rounded-md p-4">
                <div>
                  <Label
                    htmlFor="listings"
                    className="text-base font-medium text-gray-900"
                  >
                    Listings
                  </Label>
                  <p className="text-sm text-gray-500">
                    Approvals, expirations, price drops.
                  </p>
                </div>
                <Switch id="listings" defaultChecked />
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between bg-white rounded-md p-4">
                <div>
                  <Label
                    htmlFor="messages"
                    className="text-base font-medium text-gray-900"
                  >
                    Messages & Leads
                  </Label>
                  <p className="text-sm text-gray-500">
                    New buyer messages, lead inquiries.
                  </p>
                </div>
                <Switch id="messages" defaultChecked />
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between bg-white rounded-md p-4">
                <div>
                  <Label
                    htmlFor="orders"
                    className="text-base font-medium text-gray-900"
                  >
                    Order Updates
                  </Label>
                  <p className="text-sm text-gray-500">
                    Shipping and delivery updates
                  </p>
                </div>
                <Switch id="orders" defaultChecked />
              </div>
            </div>

            <div className="flex flex-col space-y-1"> 
              <div className="flex items-center justify-between bg-white rounded-md p-4">
                <div>
                  <Label
                    htmlFor="test-drive"
                    className="text-base font-medium text-gray-900"
                  >
                    Test Drive Reminders
                  </Label>
                  <p className="text-sm text-gray-500">
                    Upcoming test drive notifications
                  </p>
                </div>
                <Switch id="test-drive" defaultChecked />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
