import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";

function SellerProfile() {
  const overviewData = [
    { label: "Seller Type", value: "Dealer" },
    { label: "Total Listings", value: "12" },
    { label: "Joined", value: "2021" },
    { label: "Response Rate", value: "95%" },
    { label: "Response Time", value: "Within 2 hours" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6 md:py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
          Seller Profile
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Seller Information:
              </h2>

              <div className="flex items-start gap-4 mb-6">
                <div className="h-14 w-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <img
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt="Auto World"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900">
                    Auto World
                  </h3>
                  <p className="text-sm text-gray-500">Dealer</p>
                </div>
                <div className="h-10 w-10 rounded bg-teal-600 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <span>+94 112 345 678 (Call)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <span>+94 112 345 678 (Call)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <span className="truncate">sales@autoworld.lk</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Overview</h2>

              <div className="space-y-4">
                {overviewData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-gray-600">{item.label}</span>
                    <span className="text-sm font-semibold text-gray-900">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              About Seller
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              I'm a passionate car enthusiast with a keen eye for detail. I
              specialize in classic and vintage vehicles, ensuring each car is
              in top condition before it finds a new home. Let's connect and
              find your dream car!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default SellerProfile;
