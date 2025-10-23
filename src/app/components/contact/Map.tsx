"use client";
const Map = () => {
  return (
    <div className="w-full h-96">
      <div>
       <h2 className="text-xl font-semibold mb-4 pb-1 border-b-2 border-[#00695C] w-fit">Location</h2>
      </div>
      <iframe
        title="Google Map"
        className="w-full h-full border-0"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=60/D,%20Road:131,Gulshan-1,Dhaka%201212%20dhaka,%201212+(TestyRide)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;