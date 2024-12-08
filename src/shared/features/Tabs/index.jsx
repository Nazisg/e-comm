import React, { useState } from "react";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("productInfo");

    return (
        <div className="py-10">
            <div className="bg-[#FAFAFB] p-6 rounded-xl">
                <ul className="flex gap-6 items-center text-lg border-b-2 border-[#E5E8EA]">
                    <li
                        className={`pb-3 cursor-pointer ${activeTab === "productInfo" ? "text-[#2E90E5] border-b-2 border-[#2E90E5]" : ""
                            }`}
                        onClick={() => setActiveTab("productInfo")}
                    >
                        Product Information
                    </li>
                    <li
                        className={`pb-3 cursor-pointer ${activeTab === "reviews" ? "text-[#2E90E5] border-b-2 border-[#2E90E5]" : ""
                            }`}
                        onClick={() => setActiveTab("reviews")}
                    >
                        Reviews
                    </li>
                    <li
                        className={`pb-3 cursor-pointer ${activeTab === "anotherTab" ? "text-[#2E90E5] border-b-2 border-[#2E90E5]" : ""
                            }`}
                        onClick={() => setActiveTab("anotherTab")}
                    >
                        Another Tab
                    </li>
                </ul>

                <div className="text-xs text-[#9098B1] pt-6 leading-6">
                    {activeTab === "productInfo" && (
                        <div>
                            <p>
                                Air max are always very comfortable fit, clean and just perfect in every way. Just the box was too small
                                and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and
                                will always be one of my favorites.
                            </p>
                            <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                            <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                        </div>
                    )}
                    {activeTab === "reviews" && (
                        <p>Reviews</p>)}
                    {activeTab === "anotherTab" && (
                        <p>Another Tab</p>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Tabs