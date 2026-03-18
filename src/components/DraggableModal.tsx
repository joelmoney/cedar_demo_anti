import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

interface DraggableModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export function DraggableModal({ isOpen, onClose, title, content }: DraggableModalProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragConstraintsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        ref={dragConstraintsRef}
        className="fixed inset-0 pointer-events-none z-40"
      />
      <motion.div
        drag
        dragMomentum={false}
        dragConstraints={dragConstraintsRef}
        dragElastic={0}
        initial={{ opacity: 0, x: -30, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -30, scale: 0.95 }}
        style={{ x: position.x, y: position.y }}
        onDragEnd={(_, info) => {
          setPosition({
            x: position.x + info.offset.x,
            y: position.y + info.offset.y,
          });
        }}
        onClick={(e) => e.stopPropagation()}
        className="fixed left-[20%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] max-w-[50vw] h-[500px] max-h-[80vh] bg-white rounded-2xl shadow-2xl z-50 cursor-move pointer-events-auto flex flex-col"
      >
        <div className="text-white px-6 py-4 rounded-t-2xl flex items-center justify-between cursor-grab active:cursor-grabbing flex-shrink-0" style={{ backgroundColor: '#2D3A20' }}>
          <h3 className="text-xl font-bold select-none">{title}</h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="p-2 rounded-lg transition-colors cursor-pointer"
            style={{ backgroundColor: 'transparent' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div
          className="p-6 overflow-y-auto cursor-auto flex-1"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <p className="text-slate-700 leading-relaxed whitespace-pre-line select-text">{content}</p>
        </div>
      </motion.div>
    </>
  );
}
