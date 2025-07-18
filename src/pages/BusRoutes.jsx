import { useState } from "react";
import {
  FiChevronDown,
  FiDownload,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const busRoutes = {
  "Route 1 – East Tambaram": [
    { stop: "Bharath College", time: "6:50" },
    { stop: "Camp Road", time: "6:55" },
    { stop: "Tambaram", time: "7:00" },
    { stop: "Valluvar Gurukulam", time: "7:01" },
    { stop: "Sanitorium", time: "7:02" },
    { stop: "Chrompet", time: "7:05" },
    { stop: "Pallavaram", time: "7:10" },
    { stop: "Meenambakkam", time: "7:12" },
    { stop: "Nanganallur Jn", time: "7:15" },
    { stop: "Kathipara Junction", time: "7:20" },
    { stop: "Ekkadu Thangal", time: "7:23" },
    { stop: "Kasi Theatre", time: "7:25" },
    { stop: "Ashok Pillar", time: "7:30" },
    { stop: "Kumaran Hospital", time: "7:32" },
    { stop: "Lakshman Sruthi", time: "7:34" },
    { stop: "Vadapalani", time: "7:36" },
    { stop: "Ambika Empire", time: "7:37" },
    { stop: "Thirunagar", time: "7:38" },
    { stop: "MMDA", time: "7:40" },
    { stop: "SAF", time: "7:42" },
    { stop: "VEC", time: "7:45" },
  ],
  "Route 2 – Medavakkam": [
    { stop: "Kovilambakkam Sathya Agency", time: "6:35" },
    { stop: "Eachangadu", time: "6:45" },
    { stop: "Kamatchi Hospital", time: "6:50" },
    { stop: "Kaively Signal", time: "6:55" },
    { stop: "Velachery Venkadeswara Super Market", time: "7:00" },
    { stop: "Kajana Jewellery", time: "7:02" },
    { stop: "Murugan Kalayana Mahal", time: "7:03" },
    { stop: "Erikkarai", time: "7:05" },
    { stop: "Check post", time: "7:10" },
    { stop: "Little Mount", time: "7:13" },
    { stop: "Saidapet (Hotel Metro)", time: "7:15" },
    { stop: "T.Nagar terminus", time: "7:23" },
    { stop: "North Usman Road", time: "7:28" },
    { stop: "Mahalingapuram", time: "7:30" },
    { stop: "Soolaimedu", time: "7:32" },
    { stop: "Mehtha Nagar", time: "7:33" },
    { stop: "Skywalk", time: "7:37" },
    { stop: "Aminjikkarai Police station", time: "7:40" },
    { stop: "VEC", time: "7:45" },
  ],
  "Route 3 – Palavakkam": [
    { stop: "Palavakkam", time: "6:25" },
    { stop: "RTO Office", time: "6:30" },
    { stop: "Thruvanmiyur", time: "6:35" },
    { stop: "Jeyanthi Theatre", time: "6:37" },
    { stop: "Adayar Depot", time: "6:39" },
    { stop: "Malar Hospital", time: "6:45" },
    { stop: "Sathya Studio", time: "6:47" },
    { stop: "Mandaiveli Depot", time: "6:50" },
    { stop: "Mylapore Theppakkulam", time: "6:55" },
    { stop: "Royapettai Police Station", time: "7:03" },
    { stop: "Mesapet Market", time: "7:04" },
    { stop: "Ice House", time: "7:06" },
    { stop: "Rathna Café", time: "7:20" },
    { stop: "Commissioner Office", time: "7:30" },
    { stop: "Purasaiwalkam BSNL", time: "7:35" },
    { stop: "Kilpauk Mental Hospital", time: "7:37" },
    { stop: "Ayanavaram ESI", time: "7:38" },
    { stop: "Sayani", time: "7:42" },
    { stop: "Joint Office", time: "7:44" },
    { stop: "ICF", time: "7:47" },
    { stop: "Kallukkadai", time: "7:48" },
    { stop: "Villivakkam", time: "7:50" },
    { stop: "VEC", time: "7:55" },
  ],
  "Route 3-A – Chinthamani": [
    { stop: "Chinthamani", time: "7:25" },
    { stop: "Lotus Colony", time: "7:28" },
    { stop: "New Avadi Road", time: "7:30" },
    { stop: "New Avadi Road ICF Signal", time: "7:33" },
    { stop: "Nathamuni", time: "7:35" },
    { stop: "Sidco", time: "7:36" },
    { stop: "Rajamangalam Police station", time: "7:51" },
    { stop: "Srinivasan Nagar", time: "7:53" },
    { stop: "Poombhukar nagar", time: "7:55" },
    { stop: "Matha temple", time: "7:57" },
    { stop: "State Bank", time: "7:59" },
    { stop: "Kulathur", time: "8:01" },
    { stop: "VEC", time: "8:05" },
  ],
  "Route 4 – Kumanan Chavadi": [
    { stop: "Kumanan Chavadi", time: "6:45" },
    { stop: "Kattupakkam", time: "6:48" },
    { stop: "Durgai Amman Koil", time: "6:52" },
    { stop: "Iyyappanthangal", time: "6:53" },
    { stop: "Ramachandra Hospital", time: "6:54" },
    { stop: "Porur Signal", time: "7:00" },
    { stop: "Karambakkam Vasanth & Co", time: "7:01" },
    { stop: "Valasaravakkam", time: "7:05" },
    { stop: "Kesavarthini", time: "7:08" },
    { stop: "Alwar thirunagar", time: "7:10" },
    { stop: "Vembuli Amman Koil", time: "7:12" },
    { stop: "Virugambakkam", time: "7:15" },
    { stop: "Avichi School", time: "7:16" },
    { stop: "Thai Sathya School", time: "7:18" },
    { stop: "KK Nagar RTO office", time: "7:20" },
    { stop: "Pondicheri guest house", time: "7:21" },
    { stop: "Nesapakkam", time: "7:23" },
    { stop: "Ajanta Bus stop", time: "7:24" },
    { stop: "Udipi hotel bus stop", time: "7:25" },
    { stop: "Virugambakkam Market", time: "7:31" },
    { stop: "Elango Nagar", time: "7:33" },
    { stop: "Natesan Nagar", time: "7:34" },
    { stop: "Sai Nagar", time: "7:35" },
    { stop: "Chinmaya Nagar", time: "7:36" },
    { stop: "Vijayakanth Thirumana Mandapam", time: "7:39" },
    { stop: "Senthil Nagar", time: "7:50" },
    { stop: "Rettai Eri RTO office", time: "7:55" },
    { stop: "VEC", time: "8:00" },
  ],
  "Route 5 – Thiruvallur": [
    { stop: "Manavala Nagar Signal", time: "6:40" },
    { stop: "Periyakuppam", time: "6:45" },
    { stop: "Oil mill (GRT)", time: "6:50" },
    { stop: "Post Office", time: "6:50" },
    { stop: "State Bank", time: "6:55" },
    { stop: "Fire Service", time: "6:55" },
    { stop: "Theradi", time: "7:00" },
    { stop: "Kakkalur", time: "7:05" },
    { stop: "Veppampet", time: "7:15" },
    { stop: "Thiruninravur Police station", time: "7:25" },
    { stop: "Thiruninravur Abiramy", time: "7:25" },
    { stop: "Thiruninravur Temple", time: "7:30" },
    { stop: "Pattabiram", time: "7:35" },
    { stop: "Avadi Check post", time: "7:40" },
    { stop: "VEC", time: "7:45" },
  ],
  "Route 5-A – Senneerkuppam": [
    { stop: "Senneerkuppam", time: "7:10" },
    { stop: "Kaduvetti", time: "7:12" },
    { stop: "Paruthipattu Velammal School", time: "7:20" },
    { stop: "Ayyankulam", time: "7:22" },
    { stop: "Kovarthana Giri", time: "7:24" },
    { stop: "JP estate", time: "7:28" },
    { stop: "Avadi Market", time: "7:30" },
    { stop: "Ramarathna Theatre", time: "7:32" },
    { stop: "Check post", time: "7:34" },
    { stop: "Avadi Bus stand", time: "7:36" },
    { stop: "Murugappa polytechnic", time: "7:40" },
    { stop: "Vaishnavi Nagar", time: "7:45" },
    { stop: "Thirumullaivayil", time: "7:47" },
    { stop: "Manikandapuram", time: "7:49" },
    { stop: "Stedford Hospital", time: "7:51" },
    { stop: "VEC", time: "7:55" },
  ],
  "Route 6 – Thachur Koot Road": [
    { stop: "Thatchurkoot road", time: "6:30" },
    { stop: "Andarkuppam", time: "6:35" },
    { stop: "Krishnapuram", time: "6:40" },
    { stop: "Ponneri", time: "6:45" },
    { stop: "Elavam Pedu", time: "7:05" },
    { stop: "Vembakkam", time: "7:10" },
    { stop: "Minjur", time: "7:15" },
    { stop: "Nandhiambakkam", time: "7:20" },
    { stop: "Vallur camp", time: "7:25" },
    { stop: "Manali New town", time: "7:30" },
    { stop: "Andar Kuppam", time: "7:35" },
    { stop: "Manali Market", time: "7:45" },
    { stop: "Milk depot", time: "7:50" },
    { stop: "Madhavaram Thapal petti", time: "8:00" },
    { stop: "VEC", time: "8:05" },
  ],
  "Route 7 – Ennore": [
    { stop: "Ennore", time: "6:40" },
    { stop: "Thalankuppam", time: "6:45" },
    { stop: "Burma Nagar", time: "6:50" },
    { stop: "Wimco Nagar", time: "6:55" },
    { stop: "Ajax", time: "7:00" },
    { stop: "Periyar Nagar", time: "7:02" },
    { stop: "Theradi", time: "7:10" },
    { stop: "Rajakadai", time: "7:15" },
    { stop: "Thangal", time: "7:17" },
    { stop: "Toll gate (Tondayarpet)", time: "7:20" },
    { stop: "Pudhu Vannarapettai cross road", time: "7:25" },
    { stop: "Lakshmi Koil", time: "7:27" },
    { stop: "Appolo", time: "7:30" },
    { stop: "VEC", time: "7:35" },
  ],
  "Route 7-A – Tondiarpet": [
    { stop: "Tondiarpet Metro", time: "7:20" },
    { stop: "Manikoondu", time: "7:22" },
    { stop: "Maharani", time: "7:25" },
    { stop: "Singapore Complex", time: "7:27" },
    { stop: "Cement Road", time: "7:30" },
    { stop: "Mint", time: "7:35" },
    { stop: "MKB Nagar", time: "7:40" },
    { stop: "EB Office", time: "7:42" },
    { stop: "Mullai Nagar", time: "7:45" },
    { stop: "MR Nagar", time: "7:47" },
    { stop: "Petrol Bunk", time: "7:50" },
    { stop: "Sidco Nagar", time: "7:52" },
    { stop: "Pavithra Hospital", time: "7:55" },
    { stop: "Erukkancherry Signal", time: "7:59" },
    { stop: "Moolakkadai", time: "8:00" },
    { stop: "VEC", time: "8:05" },
  ],
  "Route 8 – Doveton": [
    { stop: "Doveton", time: "7:10" },
    { stop: "Bhuvaneshwari Theatre", time: "7:15" },
    { stop: "Pattalam Manikoondu", time: "7:18" },
    { stop: "Pattalam Market", time: "7:20" },
    { stop: "Jeeva Station", time: "7:25" },
    { stop: "PB Road Bakery", time: "7:30" },
    { stop: "Perambur bus stand", time: "7:35" },
    { stop: "Railway station", time: "7:37" },
    { stop: "Gandhi Silai", time: "7:40" },
    { stop: "Veenus", time: "7:42" },
    { stop: "Periyar Nagar", time: "7:44" },
    { stop: "70 Feet Road", time: "7:46" },
    { stop: "Don Bosco Periyar statue", time: "7:50" },
    { stop: "Welding Shop", time: "7:51" },
    { stop: "Moogambikai", time: "7:55" },
    { stop: "VEC", time: "8:00" },
  ],
  "Route 9 – Ambattur Estate": [
    { stop: "Ambattur Estate", time: "7:15" },
    { stop: "Mugappair MGR Statue", time: "7:20" },
    { stop: "Mugappair Shoba Showroom", time: "7:21" },
    { stop: "Velammal West School", time: "7:24" },
    { stop: "Ambedkar Ground", time: "7:25" },
    { stop: "7H Bus Stand", time: "7:27" },
    { stop: "Panneer Nagar", time: "7:27" },
    { stop: "Golden Flat", time: "7:29" },
    { stop: "Main School", time: "7:32" },
    { stop: "Cheriyan Hospital", time: "7:33" },
    { stop: "Collector Nagar", time: "7:34" },
    { stop: "HP Petrol Bunk", time: "7:35" },
    { stop: "Thirumangalam Signal", time: "7:37" },
    { stop: "Anna Nagar Depot", time: "7:38" },
    { stop: "Lucas Bus Stop", time: "7:40" },
    { stop: "VEC", time: "7:45" },
  ],
  "Route 10 – Velappan Chavadi": [
    { stop: "Velappanchavadi", time: "7:05" },
    { stop: "Vanagaram Signal", time: "7:10" },
    { stop: "Maduravayal Erikkarai Bus Stop", time: "7:12" },
    { stop: "Maduravoyal Market", time: "7:13" },
    { stop: "Maduravoyal Post Office", time: "7:14" },
    { stop: "Ration Shop", time: "7:15" },
    { stop: "Venkaya Mandi", time: "7:18" },
    { stop: "SBIO School", time: "7:21" },
    { stop: "AP Abinava", time: "7:23" },
    { stop: "7M Bus Stop", time: "7:25" },
    { stop: "DR Super Market", time: "7:26" },
    { stop: "State Bank", time: "7:27" },
    { stop: "ICF Colony Church", time: "7:35" },
    { stop: "Ayapakkam Water Tank", time: "7:37" },
    { stop: "Dunlop", time: "7:45" },
    { stop: "TI Cycle", time: "7:47" },
    { stop: "Orakadam", time: "7:51" },
    { stop: "Kallikuppam", time: "7:57" },
    { stop: "VEC", time: "8:00" },
  ],
};

const styleMap = {
  indigo: {
    bg: "bg-indigo-400/15",
    border: "border-indigo-500",
    icon: "text-indigo-500",
  },
};

const getSuggestions = (query, busRoutes) => {
  if (!query.trim()) return [];
  const lowerQuery = query.toLowerCase();
  const suggestions = new Set();
  Object.entries(busRoutes).forEach(([routeName, stops]) => {
    if (routeName.toLowerCase().includes(lowerQuery)) {
      suggestions.add(routeName);
    }
    stops.forEach(({ stop }) => {
      if (stop.toLowerCase().includes(lowerQuery)) {
        suggestions.add(stop);
      }
    });
  });
  return Array.from(suggestions).slice(0, 5);
};

const ROUTES_PER_PAGE = 1;

function BusRoute() {
  const [inputQuery, setInputQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRoute, setSelectedRoute] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const routeOptions = ["All", ...Object.keys(busRoutes)];
  const isFiltering = selectedRoute !== "None" || searchQuery.trim() !== "";

  const handleSearch = () => {
    setSearchQuery(inputQuery.trim());
    setCurrentPage(1);
    setShowSuggestions(false); // Hide suggestions on search
  };

  const handleSuggestionClick = (suggestion) => {
    setInputQuery(suggestion);
    setSearchQuery(suggestion);
    setCurrentPage(1);
    setShowSuggestions(false); // Hide suggestions on click
  };

  const filteredRoutes = Object.entries(busRoutes).filter(
    ([routeName, stops]) => {
      const isRouteMatch =
        selectedRoute === "All" || selectedRoute === routeName;
      const isStopMatch =
        searchQuery === "" ||
        routeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stops.some(({ stop }) =>
          stop.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return isFiltering && isRouteMatch && isStopMatch;
    }
  );

  const totalPages = Math.ceil(filteredRoutes.length / ROUTES_PER_PAGE);
  const paginatedRoutes =
    selectedRoute === "All"
      ? filteredRoutes.slice(
          (currentPage - 1) * ROUTES_PER_PAGE,
          currentPage * ROUTES_PER_PAGE
        )
      : filteredRoutes;

  const getSuggestions = (query, busRoutes) => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    const suggestions = new Set();
    Object.entries(busRoutes).forEach(([routeName, stops]) => {
      if (routeName.toLowerCase().includes(lowerQuery)) {
        suggestions.add(routeName);
      }
      stops.forEach(({ stop }) => {
        if (stop.toLowerCase().includes(lowerQuery)) {
          suggestions.add(stop);
        }
      });
    });
    return Array.from(suggestions).slice(0, 5);
  };

  return (
    <section className="px-10 md:px-20 lg:px-32 font-funnel text-white w-full min-h-screen">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center pt-20 pb-10">
          <h1 className="text-md mb-2">BUS ROUTES</h1>
        </div>

        <hr className="border-0.5 border-white/20 w-full mb-6" />

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 relative z-10">
          {/* Search Input */}
          <div className="relative w-full md:flex-1">
            <input
              type="text"
              placeholder="Search Stop or Route"
              value={inputQuery}
              onChange={(e) => {
                setInputQuery(e.target.value);
                setShowSuggestions(true); // Show suggestions while typing
              }}
              onFocus={() => setShowSuggestions(true)} // Show on focus
              onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/20 placeholder-white/50 focus:outline-none text-sm"
            />
            {showSuggestions && inputQuery.trim() && (
              <ul className="absolute z-20 w-full mt-1 bg-neutral-900 border border-white/20 rounded-lg max-h-48 overflow-y-auto">
                {getSuggestions(inputQuery, busRoutes).map(
                  (suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        handleSuggestionClick(suggestion);
                        setShowSuggestions(false); // Hide when clicking a suggestion
                      }}
                      className="px-4 py-3 cursor-pointer hover:bg-white/10 text-white/80"
                    >
                      {suggestion}
                    </li>
                  )
                )}
              </ul>
            )}
          </div>

          {/* Route Dropdown with Custom Arrow */}
          <div className="relative w-full md:w-60">
            <select
              value={selectedRoute}
              onChange={(e) => {
                setSelectedRoute(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full appearance-none px-4 py-3 pr-10 rounded-lg bg-white/5 text-white border border-white/20 focus:outline-none text-sm"
            >
              <option value="None" className="bg-neutral-900 text-white">
                Select Route
              </option>
              {routeOptions.map((route) => (
                <option
                  key={route}
                  value={route}
                  className="bg-neutral-900 text-white"
                >
                  {route}
                </option>
              ))}
            </select>
            <FiChevronDown
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none"
            />
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-white hover:bg-white/70 text-black px-4 py-1 rounded-lg transition text-md"
          >
            Search
          </button>
        </div>

        {/* Download PDF */}
        <a
          href="/busroutes.pdf"
          download
          className="mb-6 mx-auto justify-center w-full lg:w-fit flex items-center gap-2 px-5 py-2 bg-white/5 hover:bg-white/20 border border-white/20 text-white/70 rounded-lg text-md font-medium transition-all duration-300"
        >
          <FiDownload size={18} className="text-emerald-400" />
          Download PDF
        </a>

        {/* Results */}
        {!isFiltering ? (
          <p className="text-center text-white/50">
            Use the search or select a route to begin.
          </p>
        ) : filteredRoutes.length === 0 ? (
          <p className="text-center text-white/50">
            No matching routes or stops.
          </p>
        ) : (
          <div className="space-y-8">
            {paginatedRoutes.map(([routeName, stops]) => (
              <div
                key={routeName}
                className="rounded-lg border border-white/20 bg-white/5 p-5 px-12 backdrop-blur-sm"
              >
                <h2 className="text-lg mb-6 text-emerald-400">{routeName}</h2>
                <ul className="space-y-3 text-white/80">
                  {stops
                    .filter(({ stop }) =>
                      stop.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map(({ stop, time }, index) => (
                      <li
                        key={index}
                        className="flex justify-between border-b border-white/10 pb-2"
                      >
                        <span className="text-md">{stop}</span>
                        {time && (
                          <span className="text-base text-white/50">
                            {time}
                          </span>
                        )}
                      </li>
                    ))}
                </ul>
              </div>
            ))}

            {/* Pagination */}
            {selectedRoute === "All" && totalPages > 1 && (
              <div className="flex justify-center gap-3 mt-10 flex-wrap">
                {/* Left Arrow */}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30"
                >
                  <FiChevronLeft size={18} />
                </button>

                {/* Page Numbers - Show max 3 dynamically */}
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter((page) => {
                    if (totalPages <= 3) return true;
                    if (currentPage <= 2) return page <= 3;
                    if (currentPage >= totalPages - 1)
                      return page >= totalPages - 2;
                    return Math.abs(page - currentPage) <= 1;
                  })
                  .map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 flex items-center justify-center rounded-full transition ${
                        currentPage === page
                          ? "bg-white text-black font-semibold"
                          : "bg-white/10 text-white/70 hover:bg-white/20"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                {/* Right Arrow */}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30"
                >
                  <FiChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default BusRoute;
