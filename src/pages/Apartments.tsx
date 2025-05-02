import { motion } from "framer-motion";
import { BackButton } from "../components/BackButton";

export function Apartments() {
  type FinishingStatus = "fully_finished" | "semi_finished" | "core_shell";
  
  const apartments = [
    // ... existing apartments array
  ];

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
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Available Apartments</h1>
          <p className="text-xl text-gray-600">
            Find Your Perfect Home in Al-'Ata'a Building
          </p>
        </motion.div>
        {/* Rest of the component remains the same */}
      </div>
    </div>
  );
}
