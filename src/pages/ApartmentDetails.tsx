import { motion } from "framer-motion";
import { BackButton } from "../components/BackButton";

export function ApartmentDetails() {
  type FinishingStatus = "fully_finished" | "semi_finished" | "core_shell";
  
  const apartment = {
    // ... existing apartment object
  };

  const finishingLabels: Record<FinishingStatus, string> = {
    fully_finished: "Fully Finished",
    semi_finished: "Semi-Finished",
    core_shell: "Core & Shell",
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Rest of the component remains the same */}
        </motion.div>
      </div>
    </div>
  );
}
