import { useState } from "react";
import type { TabType, ExpandableItem, VenueSectionState } from "@/types/venue";

export const useVenueSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>("venue");
  const [expandedItems, setExpandedItems] = useState<
    Record<ExpandableItem, boolean>
  >({
    airports: false,
    transport: false,
  });
  const [isImageDescriptionVisible, setIsImageDescriptionVisible] =
    useState(false);

  const toggleItem = (item: ExpandableItem) => {
    setExpandedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const toggleImageDescription = () => {
    setIsImageDescriptionVisible(!isImageDescriptionVisible);
  };

  const state: VenueSectionState = {
    activeTab,
    expandedItems,
    isImageDescriptionVisible,
  };

  return {
    state,
    setActiveTab,
    toggleItem,
    toggleImageDescription,
  };
};
