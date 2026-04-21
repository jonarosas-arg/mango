import * as React from "react";
import { Header } from "./layout/Header";
import { Dashboard } from "./Dashboard";
import { LucaChat } from "./LucaChat";
import { CreateGoal } from "./CreateGoal";
import { GoalDetail } from "./GoalDetail";
import { PortfolioView } from "./PortfolioView";
import { ProfileView } from "./ProfileView";
import { GoalsView } from "./GoalsView";
import { HistoryView } from "./HistoryView";
import { InstrumentDetailView } from "./InstrumentDetailView";
import { OnboardingView } from "./OnboardingView";
import { INITIAL_USER } from "../constants";
import { AnimatePresence, motion } from "motion/react";
import { Goal, User } from "../types";
import { cn } from "../lib/utils";
import { PORTFOLIOS } from "../constants";

export function AppContent() {
  const [activeTab, setActiveTab] = React.useState("home");
  const [showChat, setShowChat] = React.useState(false);
  const [showCreateGoal, setShowCreateGoal] = React.useState(false);
  const [initialGoalData, setInitialGoalData] = React.useState<Partial<Goal> | null>(null);
  const [selectedGoalId, setSelectedGoalId] = React.useState<string | null>(null);
  const [selectedInstrumentId, setSelectedInstrumentId] = React.useState<string | null>(null);
  const [showHistory, setShowHistory] = React.useState(false);
  const [showGoals, setShowGoals] = React.useState(false);
  const [showOnboarding, setShowOnboarding] = React.useState(false);
  const [user, setUser] = React.useState<User>(INITIAL_USER as User);

  const renderContent = () => {
    if (showOnboarding) {
      return (
        <OnboardingView
          onBack={() => setShowOnboarding(false)}
          onComplete={(profile) => {
            setUser((prev) => ({ ...prev, profile }));
            setShowOnboarding(false);
            setActiveTab("portfolio");
          }}
        />
      );
    }

    if (showHistory) {
      return <HistoryView onBack={() => setShowHistory(false)} />;
    }

    if (selectedInstrumentId) {
      const instrument = PORTFOLIOS[user.profile || "Moderado"].find((item) => item.id === selectedInstrumentId);
      if (instrument) {
        return (
          <InstrumentDetailView
            instrument={instrument}
            portfolioValueUsd={user.balanceUsd}
            onBack={() => setSelectedInstrumentId(null)}
            onOpenHistory={() => setShowHistory(true)}
            onOpenChat={() => setShowChat(true)}
          />
        );
      }
    }

    if (showGoals) {
      return (
        <GoalsView
          user={user}
          onBack={() => setShowGoals(false)}
          onSelectGoal={(id) => setSelectedGoalId(id)}
          onCreateGoal={() => {
            setInitialGoalData(null);
            setShowCreateGoal(true);
          }}
        />
      );
    }

    if (selectedGoalId) {
      const goal = user.goals.find(g => g.id === selectedGoalId);
      if (goal) return <GoalDetail goal={goal} onBack={() => setSelectedGoalId(null)} />;
    }

    switch (activeTab) {
      case "home":
        return <Dashboard 
          user={user} 
          onSelectGoal={(id) => setSelectedGoalId(id)} 
          onSelectPosition={(id) => setSelectedInstrumentId(id)}
          onOpenHistory={() => setShowHistory(true)}
          onOpenGoals={() => setShowGoals(true)}
          onCreateGoal={() => {
            setInitialGoalData(null);
            setShowCreateGoal(true);
          }}
        />;
      case "portfolio":
        return (
          <PortfolioView
            user={user}
            onSelectInstrument={(id) => setSelectedInstrumentId(id)}
            onOpenHistory={() => setShowHistory(true)}
          />
        );
      case "profile":
        return (
          <ProfileView
            user={user}
            onStartOnboarding={() => setShowOnboarding(true)}
            onOpenHistory={() => setShowHistory(true)}
          />
        );
      default:
        return <Dashboard 
          user={user} 
          onSelectGoal={(id) => setSelectedGoalId(id)} 
          onSelectPosition={(id) => setSelectedInstrumentId(id)}
          onOpenHistory={() => setShowHistory(true)}
          onOpenGoals={() => setShowGoals(true)}
          onCreateGoal={() => {
            setInitialGoalData(null);
            setShowCreateGoal(true);
          }}
        />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 selection:bg-mango-300 selection:text-neutral-950 flex flex-col">
      <Header 
        isChatOpen={showChat} 
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setSelectedGoalId(null);
          setSelectedInstrumentId(null);
          setShowGoals(false);
          setShowHistory(false);
          setShowOnboarding(false);
        }}
        onOpenChat={() => setShowChat(true)}
      />
      
      <main className={cn(
        "flex-1 relative min-h-screen pt-16 md:pt-20 transition-all duration-500 ease-in-out px-4 md:px-6 py-8",
        showChat && "lg:mr-[450px]"
      )}>
        <div className={cn(
          "mx-auto transition-all duration-500 ease-in-out",
          showChat ? "max-w-4xl" : "max-w-6xl"
        )}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <AnimatePresence>
        {showChat && (
          <LucaChat 
            onClose={() => setShowChat(false)} 
            user={user}
            onGoalCreated={(newGoal) => {
              setInitialGoalData(newGoal);
              setShowCreateGoal(true);
            }}
            onInvestFunds={(amount, currency, targetId) => {
              const balanceField = currency === 'ARS' ? 'availableBalanceArs' : 'availableBalanceUsd';
              if ((user[balanceField] || 0) >= amount) {
                setUser(prev => {
                  const goals = prev.goals.map(g => {
                    if (g.id === targetId || g.name.toLowerCase() === targetId?.toLowerCase()) {
                      return { ...g, currentAmount: g.currentAmount + amount };
                    }
                    return g;
                  });
                  return {
                    ...prev,
                    [balanceField]: (prev[balanceField] || 0) - amount,
                    goals
                  };
                });
              }
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCreateGoal && (
          <CreateGoal 
            onClose={() => {
              setShowCreateGoal(false);
              setInitialGoalData(null);
            }} 
            initialData={initialGoalData || undefined}
            onSave={(newGoal) => {
              const goalWithId = {
                ...newGoal,
                id: `goal_${Date.now()}`,
                currentAmount: 0
              };
              setUser(prev => ({
                ...prev,
                goals: [...prev.goals, goalWithId]
              }));
              setShowCreateGoal(false);
              setInitialGoalData(null);
            }}
          />
        )}
      </AnimatePresence>

      <a href="#content" className="sr-only focus:not-sr-only fixed top-4 left-4 z-50 bg-mango-300 text-neutral-950 p-4 rounded-base">
        Saltar al contenido principal
      </a>
    </div>
  );
}
