import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown className="w-6 h-6 text-gray-500" />
    </div>
  );
};

export default ScrollIndicator;
