"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function ProductFilters({ onFilterChange }) {
  const [expandedSections, setExpandedSections] = useState({
    sale: false,
    color: false,
    size: false,
  });
  const [selectedFilters, setSelectedFilters] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFilterChange = (section, value) => {
    const newFilters = { ...selectedFilters };
    if (!newFilters[section]) {
      newFilters[section] = [];
    }

    if (newFilters[section].includes(value)) {
      newFilters[section] = newFilters[section].filter((v) => v !== value);
    } else {
      newFilters[section].push(value);
    }

    setSelectedFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  return (
    <div className="w-full space-y-6">
      {/* Sale & Offers */}
      <div className="border-b border-border pb-4">
        <button
          className="w-full flex items-center justify-between py-2"
          onClick={() => toggleSection("sale")}
        >
          <span className="font-semibold text-foreground">Sale & Offers</span>
          <ChevronDown
            className={`h-5 w-5 transition-transform ${
              expandedSections.sale ? "rotate-180" : ""
            }`}
          />
        </button>
        {expandedSections.sale && (
          <div className="space-y-3 mt-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4"
                onChange={() => handleFilterChange("sale", "50-off")}
              />
              <span className="text-sm text-foreground/70">Up to 50% Off</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4"
                onChange={() => handleFilterChange("sale", "sale")}
              />
              <span className="text-sm text-foreground/70">Sale</span>
            </label>
          </div>
        )}
      </div>

      {/* Color */}
      <div className="border-b border-border pb-4">
        <button
          className="w-full flex items-center justify-between py-2"
          onClick={() => toggleSection("color")}
        >
          <span className="font-semibold text-foreground">Color</span>
          <ChevronDown
            className={`h-5 w-5 transition-transform ${
              expandedSections.color ? "rotate-180" : ""
            }`}
          />
        </button>
        {expandedSections.color && (
          <div className="grid grid-cols-3 gap-3 mt-3">
            {[
              { color: "#000000", label: "Black" },
              { color: "#4169E1", label: "Blue" },
              { color: "#A0826D", label: "Brown" },
              { color: "#00FF00", label: "Green" },
              { color: "#808080", label: "Grey" },
              { color: "#FFA500", label: "Orange" },
              { color: "#FFC0CB", label: "Pink" },
              { color: "#800080", label: "Purple" },
            ].map((item) => (
              <button
                key={item.color}
                className="flex flex-col items-center gap-2"
                onClick={() => handleFilterChange("color", item.label)}
              >
                <div
                  className="h-8 w-8 rounded-full border-2 cursor-pointer border-border hover:border-foreground transition-all"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs text-foreground/60">{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Technology */}
      <div className="border-b border-border pb-4">
        <button className="w-full flex items-center justify-between py-2">
          <span className="font-semibold text-foreground">Technology</span>
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>

      {/* Size */}
      <div className="border-b border-border pb-4">
        <button className="w-full flex items-center justify-between py-2">
          <span className="font-semibold text-foreground">Size</span>
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>

      {/* Collections */}
      <div className="border-b border-border pb-4">
        <button className="w-full flex items-center justify-between py-2">
          <span className="font-semibold text-foreground">Collections</span>
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>

      {/* Fit */}
      <div>
        <button className="w-full flex items-center justify-between py-2">
          <span className="font-semibold text-foreground">Fit</span>
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
