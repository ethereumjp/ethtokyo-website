import {
  activeTabStyle,
  tabStyle,
  tabsContainerStyle,
} from "@/themes/styles/venue";
import type { TabType } from "@/types/venue";
import type { FC } from "react";
import { HiOutlineMapPin } from "react-icons/hi2";
import { MdOutlineDirectionsSubway, MdOutlineHotel } from "react-icons/md";

interface VenueTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const VenueTabs: FC<VenueTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    {
      id: "venue" as TabType,
      label: "Venue",
      icon: HiOutlineMapPin,
    },
    {
      id: "travel" as TabType,
      label: "Travel",
      icon: MdOutlineDirectionsSubway,
    },
    {
      id: "accommodation" as TabType,
      label: "Accommodation",
      icon: MdOutlineHotel,
    },
  ];

  return (
    <div css={tabsContainerStyle}>
      {tabs.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          type="button"
          css={[tabStyle, activeTab === id && activeTabStyle]}
          onClick={() => onTabChange(id)}
        >
          <Icon size={20} />
          {label}
        </button>
      ))}
    </div>
  );
};

export default VenueTabs;
