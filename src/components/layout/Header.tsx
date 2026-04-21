import * as React from "react";
import { ShieldCheck, Bell, Plus, Home, PieChart, Sparkles, User as UserIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { motion } from "motion/react";
import { useNotifications } from "../../context/NotificationContext";
import { NotificationCenter } from "../NotificationCenter";

interface HeaderProps {
  isChatOpen?: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenChat: () => void;
}

export function Header({ isChatOpen, activeTab, setActiveTab, onOpenChat }: HeaderProps) {
  const { unreadCount } = useNotifications();
  const [isNotificationsOpen, setIsNotificationsOpen] = React.useState(false);

  const tabs = [
    { id: 'home', icon: Home, label: 'Inicio' },
    { id: 'portfolio', icon: PieChart, label: 'Cartera' },
    { id: 'chat', icon: Sparkles, label: 'Luca', special: true },
    { id: 'profile', icon: UserIcon, label: 'Perfil' },
  ];

  return (
    <>
      <header className={cn(
      "fixed top-0 left-0 right-0 z-40 flex h-16 md:h-20 items-center justify-between border-b border-neutral-800/30 bg-neutral-950/80 px-4 md:px-12 backdrop-blur-xl transition-all duration-500 pb-safe",
      isChatOpen && "lg:pr-[450px]"
    )}>
      {/* Brand */}
      <div className="flex items-center space-x-2 sm:space-x-8">
        <span className="font-editorial text-xl sm:text-2xl md:text-[32px] font-bold italic tracking-tighter text-mango-300 leading-none">Mango</span>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 bg-neutral-900/50 border border-neutral-800 p-1 rounded-full">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            
            return (
              <button
                key={tab.id}
                onClick={() => {
                  if (tab.id === 'chat') {
                    onOpenChat();
                  } else {
                    setActiveTab(tab.id);
                  }
                }}
                className={cn(
                  "px-4 py-2 rounded-full text-[11px] font-data font-bold uppercase tracking-widest transition-all flex items-center space-x-2 relative group",
                  isActive 
                    ? "text-mango-300 bg-mango-950/20" 
                    : "text-neutral-500 hover:text-neutral-200"
                )}
              >
                <Icon className={cn("h-4 w-4", tab.special && !isActive && "animate-pulse text-mango-300")} />
                <span>{tab.label}</span>
                {isActive && (
                  <motion.div 
                    layoutId="active-tab-indicator"
                    className="absolute inset-0 border border-mango-500/30 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>
      
      {/* Search/Actions */}
      <div className="flex items-center space-x-2 md:space-x-4">
        {/* Mobile Navigation Icons */}
        <nav className="flex md:hidden items-center mr-2">
          {tabs.filter(t => !t.special).map((tab) => {
             const isActive = activeTab === tab.id;
             const Icon = tab.icon;
             return (
               <button
                 key={tab.id}
                 onClick={() => setActiveTab(tab.id)}
                 className={cn(
                   "p-2 rounded-full transition-all",
                   isActive ? "text-mango-300 bg-mango-950/20" : "text-neutral-500"
                 )}
               >
                 <Icon className="h-5 w-5" />
               </button>
             );
          })}
        </nav>

        <div className="hidden lg:flex bg-neutral-900/50 border border-neutral-800 rounded-[2px] px-[12px] py-[6px] items-center">
          <ShieldCheck className="mr-2 h-3.5 w-3.5 text-mango-300/50" />
          <span className="font-data text-[10px] text-neutral-400 uppercase tracking-widest leading-none">AAGI CNV · Caja Valores</span>
        </div>

        <button 
          onClick={() => setIsNotificationsOpen(true)}
          className="relative p-2 text-neutral-400 hover:text-mango-300 transition-all hover:bg-neutral-900/50 rounded-full group tappable"
        >
           <Bell className="h-5 w-5 group-hover:scale-110 transition-transform" />
           {unreadCount > 0 && (
             <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-mango-500 border-2 border-neutral-950 animate-pulse" />
           )}
        </button>

        {/* Mobile Nav Toggle/Luca Special */}
        <button 
          onClick={onOpenChat}
          className="md:hidden w-10 h-10 rounded-full bg-linear-to-br from-mango-500 to-mango-700 flex items-center justify-center shadow-glow animate-pulse"
        >
          <Sparkles className="h-5 w-5 text-white" />
        </button>
      </div>

      {/* Mobile Navigation (Floating Bottom or integrated - let's keep it simple for now) */}
    </header>

      <NotificationCenter 
        isOpen={isNotificationsOpen} 
        onClose={() => setIsNotificationsOpen(false)} 
      />
    </>
  );
}
