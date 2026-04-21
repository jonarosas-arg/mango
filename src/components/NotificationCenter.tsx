import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, X, Check, Trash2, Sparkles, AlertCircle, Info, CheckCircle2 } from 'lucide-react';
import { useNotifications } from '../context/NotificationContext';
import { cn } from '../lib/utils';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

interface NotificationCenterProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationCenter({ isOpen, onClose }: NotificationCenterProps) {
  const { notifications, markAsRead, markAllAsRead, clearNotifications, unreadCount } = useNotifications();

  // Close on Escape
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'luca': return <Sparkles className="h-4 w-4 text-mango-300" />;
      case 'warning': return <AlertCircle className="h-4 w-4 text-mango-500" />;
      case 'success': return <CheckCircle2 className="h-4 w-4 text-bullish" />;
      case 'alert': return <AlertCircle className="h-4 w-4 text-bearish" />;
      default: return <Info className="h-4 w-4 text-neutral-400" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-all"
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10, x: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed right-4 top-20 w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-base shadow-2xl z-[101] flex flex-col max-h-[80vh] overflow-hidden"
          >
            {/* Header */}
            <header className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/50">
              <div className="flex items-center space-x-3">
                <Bell className="h-5 w-5 text-mango-300" />
                <h2 className="font-editorial text-[20px] font-bold text-neutral-50 leading-none">Notificaciones</h2>
                {unreadCount > 0 && (
                  <span className="bg-mango-500 text-neutral-950 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {unreadCount}
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={markAllAsRead}
                  className="p-2 text-neutral-400 hover:text-neutral-50 transition-colors"
                  title="Marcar todas como leídas"
                >
                  <Check className="h-4 w-4" />
                </button>
                <button 
                  onClick={clearNotifications}
                  className="p-2 text-neutral-400 hover:text-bearish transition-colors"
                  title="Limpiar todo"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
                <button 
                  onClick={onClose}
                  className="p-2 text-neutral-400 hover:text-neutral-50 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </header>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-2 scrollbar-hide">
              {notifications.length === 0 ? (
                <div className="py-20 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
                    <Bell className="h-6 w-6 text-neutral-600" />
                  </div>
                  <p className="font-body text-[14px] text-neutral-500 italic">No hay notificaciones por ahora.</p>
                </div>
              ) : (
                <div className="space-y-1">
                  {notifications.map((n) => (
                    <motion.div 
                      key={n.id}
                      onClick={() => markAsRead(n.id)}
                      className={cn(
                        "p-4 rounded-micro transition-all cursor-pointer group relative overflow-hidden",
                        n.read ? "opacity-60 grayscale-[0.5]" : "bg-neutral-800/40 border border-neutral-700/50 hover:bg-neutral-800",
                        !n.read && "before:absolute before:left-0 before:top-4 before:bottom-4 before:w-0.5 before:bg-mango-300"
                      )}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <div className="flex items-center space-x-2">
                          {getIcon(n.type)}
                          <h4 className="font-editorial text-[16px] font-bold text-neutral-100 italic">{n.title}</h4>
                        </div>
                        <span className="font-data text-[8px] uppercase tracking-widest text-neutral-500 mt-1 whitespace-nowrap">
                          {formatDistanceToNow(n.timestamp, { addSuffix: true, locale: es })}
                        </span>
                      </div>
                      <p className="font-body text-[13px] text-neutral-400 leading-relaxed pr-6">
                        {n.message}
                      </p>
                      
                      {!n.read && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Check className="h-4 w-4 text-mango-300" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <footer className="px-6 py-4 bg-neutral-900 border-t border-neutral-800 text-center">
              <p className="font-data text-[10px] text-neutral-600 uppercase tracking-widest">
                Protección de activos · AES-256
              </p>
            </footer>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
