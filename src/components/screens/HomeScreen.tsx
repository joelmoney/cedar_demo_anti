import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HomeScreenProps {
  onSelect: () => void;
  reducedMotion: boolean;
}

export function HomeScreen({ onSelect, reducedMotion }: HomeScreenProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      setTimeout(onSelect, 150);
    }
  };

  return (
    <div className="h-full bg-slate-50 flex flex-col">
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">Home</h3>
        <div className="w-8 h-8 rounded-full bg-slate-200"></div>
      </div>

      <div className="flex-1 p-6">
        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
          className="bg-white rounded-xl shadow-sm border border-slate-200 p-6"
        >
          <label className="block text-sm font-medium text-slate-700 mb-3">
            Choose an option
          </label>

          <div className="relative">
            <select
              onChange={handleChange}
              className="w-full appearance-none bg-white border border-slate-300 rounded-lg px-4 py-3 pr-10 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              defaultValue=""
            >
              <option value="" disabled>
                Select one...
              </option>
              <option value="explore">Explore Features</option>
              <option value="learn">Learn More</option>
              <option value="start">Get Started</option>
            </select>

            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          </div>
        </motion.div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 mb-3"></div>
            <h4 className="font-medium text-slate-900 text-sm mb-1">Quick Access</h4>
            <p className="text-xs text-slate-600">Jump to tasks</p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <div className="w-10 h-10 rounded-lg bg-green-100 mb-3"></div>
            <h4 className="font-medium text-slate-900 text-sm mb-1">Recent</h4>
            <p className="text-xs text-slate-600">View history</p>
          </div>
        </div>
      </div>
    </div>
  );
}
