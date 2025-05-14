"use client";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import React, { useState } from "react";
import { api } from "../../../convex/_generated/api";
import ProfileHeader from "@/components/ProfileHeader";
import NoFitnessPlan from "@/components/NoFitnessPlan";
import CornerElements from "@/components/CornerElements";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppleIcon, CalendarIcon, DumbbellIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProfilePage = () => {
  const { user } = useUser();
  const userId = user?.id as string;

  const allPlans = useQuery(api.plans.getUserPlans, { userId });
  const [selectedPlanId, setSelectedPlanId] = useState<null | string>(null);

  const activePlan = allPlans?.find((plan) => plan.isActive);

  const currentPlan = selectedPlanId
    ? allPlans?.find((plan) => plan._id === selectedPlanId)
    : activePlan;

  return (
    <section className="relative z-10 pt-12 pb-32 flex-grow container mx-auto px-4">
      <ProfileHeader user={user} />

      {allPlans && allPlans?.length > 0 ? (
        <div className="space-y-8">
          {/* PLAN SELECTOR */}
          <div className="relative backdrop-blur-sm  p-6 border border-[var(--border)]">
            <CornerElements />
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold tracking-tight">
                <span className="text-[var(--primary)]">Your</span>{" "}
                <span className="text-[var(--foreground)]">Fitness Plans</span>
              </h2>
              <div className="font-mono text-xs text-[var(--muted-foreground)]">
                TOTAL: {allPlans.length}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {allPlans.map((plan) => (
                <Button
                  key={plan._id}
                  onClick={() => setSelectedPlanId(plan._id)}
                  className={`text-[var(--foreground)] border hover:text-white ${
                    selectedPlanId === plan._id
                      ? "bg-[var(--cyber-glow-primary)] text-[var(--primary)] border-[var(--primary)]"
                      : "bg-transparent border-[var(--border)] hover:border-[var(--primary)]"
                  }`}
                >
                  {plan.name}
                  {plan.isActive && (
                    <span className="ml-2 bg-green-500/20 text-green-500 text-xs px-2 py-0.5 rounded">
                      ACTIVE
                    </span>
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* PLAN DETAILS */}

          {currentPlan && (
            <div className="relative backdrop-blur-sm  rounded-lg p-6 border border-[var(--border)]">
              <CornerElements />

              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></div>
                <h3 className="text-lg font-bold">
                  PLAN:{" "}
                  <span className="text-[var(--cyber-text-bright)]">
                    {currentPlan.name}
                  </span>
                </h3>
              </div>

              <Tabs defaultValue="workout" className="w-full">
                <TabsList className="mb-6 w-full grid grid-cols-2 bg-[var(--cyber-terminal-bg)] border">
                  <TabsTrigger
                    value="workout"
                    className="data-[state=active]:bg-[var(--primary)] data-[state=active]:text-[var(--cyber-text-bright)]"
                  >
                    <DumbbellIcon className="mr-2 size-4" />
                    Workout Plan
                  </TabsTrigger>

                  <TabsTrigger
                    value="diet"
                    className="data-[state=active]:bg-[var(--primary)] data-[state=active]:text-[var(--cyber-text-bright)]"
                  >
                    <AppleIcon className="mr-2 h-4 w-4" />
                    Diet Plan
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="workout">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <CalendarIcon className="h-4 w-4 text-[var(--primary)]" />
                      <span className="font-mono text-sm text-[var(--muted-foreground)]">
                        SCHEDULE: {currentPlan.workoutPlan.schedule.join(", ")}
                      </span>
                    </div>

                    <Accordion type="multiple" className="space-y-4">
                      {currentPlan.workoutPlan.exercises.map(
                        (exerciseDay, index) => (
                          <AccordionItem
                            key={index}
                            value={exerciseDay.day}
                            className="border border-b rounded-lg overflow-hidden last:border-b"
                          >
                            <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-[var(--primaryl)] hover:text-[var(--cyber-text-bright)] font-mono border-b ">
                              <div className="flex justify-between w-full items-center">
                                <span className="text-[var(--primary)] hover:text-[var(--cyber-text-bright)]">
                                  {exerciseDay.day}
                                </span>
                                <div className="text-xs text-[var(--muted-foreground)] ">
                                  {exerciseDay.routines.length} EXERCISES
                                </div>
                              </div>
                            </AccordionTrigger>

                            <AccordionContent className="pb-4 px-4">
                              <div className="space-y-3 mt-2">
                                {exerciseDay.routines.map(
                                  (routine, routineIndex) => (
                                    <div
                                      key={routineIndex}
                                      className="border border-border rounded p-3 bg-[var(--background)]"
                                    >
                                      <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-semibold text-[var(--foreground)]">
                                          {routine.name}
                                        </h4>
                                        <div className="flex items-center gap-2">
                                          <div className="px-2 py-1 rounded bg-[var(--primary)] text-primary text-xs font-mono">
                                            {routine.sets} SETS
                                          </div>
                                          <div className="px-2 py-1 rounded bg-[var(--secondary)] text-[var(--primary)] text-xs font-mono">
                                            {routine.reps} REPS
                                          </div>
                                        </div>
                                      </div>
                                      {routine.description && (
                                        <p className="text-sm text-muted-foreground mt-1">
                                          {routine.description}
                                        </p>
                                      )}
                                    </div>
                                  )
                                )}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        )
                      )}
                    </Accordion>
                  </div>
                </TabsContent>
                <TabsContent value="diet">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-mono text-sm text-[var(--muted-foreground)]">
                        DAILY CALORIE TARGET
                      </span>
                      <div className="font-mono text-xl text-[var(--primary)]">
                        {currentPlan.dietPlan.dailyCalories} KCAL
                      </div>
                    </div>

                    <div className="h-px w-full bg-[var(--border-g)] my-4"></div>

                    <div className="space-y-4">
                      {currentPlan.dietPlan.meals.map((meal, index) => (
                        <div
                          key={index}
                          className="border border-[var(--border-g)] rounded-lg overflow-hidden p-4"
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 rounded-full bg-[var(--primary)]"></div>
                            <h4 className="font-mono text-[var(--primary)]">
                              {meal.name}
                            </h4>
                          </div>
                          <ul className="space-y-2">
                            {meal.foods.map((food, foodIndex) => (
                              <li
                                key={foodIndex}
                                className="flex items-center gap-2 text-sm "
                              >
                                <span className="text-xs text-[var(--muted-foreground)] font-mono">
                                  {String(foodIndex + 1).padStart(2, "0")}
                                </span>
                                {food}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      ) : (
        <NoFitnessPlan />
      )}
    </section>
  );
};

export default ProfilePage;
