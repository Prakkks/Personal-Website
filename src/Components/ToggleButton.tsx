import React from "react";

interface ToggleButtonProps {
  isActive: boolean;
  onToggle: () => void;
  labelOn?: string;
  labelOff?: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  isActive,
  onToggle,
  labelOn = "3D View On",
  labelOff = "3D View Off",
}) => {
  return (
    <button
      onClick={onToggle}
      className={`px-4 py-2 rounded-full text-white font-semibold transition-all ${
        isActive ? "bg-green-600" : "bg-[#915eff]"
      } hover:opacity-80`}
    >
      {isActive ? labelOn : labelOff}
    </button>
  );
};

export default ToggleButton;
