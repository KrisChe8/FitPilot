import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronRight,
  Sparkles,
  Users,
  Clock,
  AppleIcon,
  ShieldIcon,
  SparklesIcon,
  DumbbellIcon,
} from "lucide-react";
import { USER_PROGRAMS } from "@/constants";

const UserPrograms = () => {
  return (
    <div className="w-full pb-24 pt-16 relative">
      <div className="container mx-auto max-w-6xl px-4">
        {/* HEADER- PROGRAM GALLERY */}
        <div className="bg-[var(--card)] backdrop-blur-sm border border-[var(--border-g)] rounded-lg overflow-hidden mb-16">
          {/* HEADER BAR */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border-g)] bg-[var(--background)]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[var(--primary)]"></div>
              <span className="text-sm text-[var(--primary)] font-medium">
                Program Gallery
              </span>
            </div>
            <div className="text-sm text-[var(--muted-foreground)]">
              Featured Plans
            </div>
          </div>

          {/* HEADER CONTENT */}
          <div className="p-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[var(--cyber-text-bright)]">
                AI-Generated{" "}
              </span>
              <span className="text-[var(--primary)]">Programs</span>
            </h2>

            <p className="text-lg text-[var(--muted-foreground)] max-w-xl mx-auto mb-10">
              Explore personalized fitness plans our AI assistant has created
              for other users
            </p>

            {/* STATS */}
            <div className="flex items-center justify-center gap-16 mt-10 font-mono">
              <div className="flex flex-col items-center">
                <p className="text-3xl text-[var(--primary)]">850+</p>
                <p className="text-sm text-[var(--muted-foreground)] uppercase tracking-wide mt-1">
                  PROGRAMS
                </p>
              </div>
              <div className="w-px h-12 bg-[var(--border)]"></div>
              <div className="flex flex-col items-center">
                <p className="text-3xl text-[var(--primary)]">3min</p>
                <p className="text-sm text-[var(--muted-foreground)] uppercase tracking-wide mt-1">
                  CREATION TIME
                </p>
              </div>
              <div className="w-px h-12 bg-[var(--border)]"></div>
              <div className="flex flex-col items-center">
                <p className="text-3xl text-[var(--primary)]">100%</p>
                <p className="text-sm text-[var(--muted-foreground)] uppercase tracking-wide mt-1">
                  PERSONALIZED
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Program cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {USER_PROGRAMS.map((program) => (
            <Card
              key={program.id}
              className="bg-[var(--card)] backdrop-blur-sm border border-[var(--border-g)] hover:border-[var(--primaryl)] transition-colors overflow-hidden pt-0"
            >
              {/* Card header with user info */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-[var(--border-g)] bg-[var(--background)] ">
                <div className="flex items-center gap-2 ">
                  <div className="w-2 h-2 rounded-full bg-[var(--primary)]"></div>
                  <span className="text-sm text-[var(--primary)]">
                    USER.{program.id}
                  </span>
                </div>
                <div className="text-sm text-[var(--muted-foreground)] h-full">
                  {program.fitness_level.toUpperCase()}
                </div>
              </div>

              <CardHeader className="pt-6 px-5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden border border-[var(--border-g)]">
                    <img
                      src={program.profilePic}
                      alt={`${program.first_name}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-[var(--foreground)]">
                      {program.first_name}
                      <span className="text-[var(--primary)]">.exe</span>
                    </CardTitle>
                    <div className="text-sm text-[var(--muted-foreground)] flex items-center gap-2 mt-1">
                      <Users className="h-4 w-4" />
                      {program.age}y • {program.workout_days}d/week
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center gap-4">
                  <div className="px-3 py-1 bg-[var(--primary)] rounded border border-[var(--primary)] text-sm text-[var(--cyber-text-bright)] flex items-center gap-2">
                    <SparklesIcon className="h-4 w-4" />
                    {program.fitness_goal}
                  </div>
                  <div className="text-sm text-[var(--muted-foreground)] flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    v3.5
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-5">
                {/* Program details */}
                <div className="space-y-5 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-[var(--primary)] text-[var(--cyber-text-bright)] mt-0.5">
                      <DumbbellIcon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-[var(--foreground)]">
                          {program.workout_plan.title}
                        </h3>
                      </div>
                      <p className="text-sm text-[var(--muted-foreground)] mt-1">
                        {program.equipment_access}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-[var(--secondary)] text-[var(--primary)] mt-0.5">
                      <AppleIcon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-[var(--foreground)]">
                          {program.diet_plan.title}
                        </h3>
                      </div>
                      <p className="text-sm text-[var(--muted-foreground)] mt-1">
                        System optimized nutrition
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-[var(--primary)] text-[var(--cyber-text-bright)] mt-0.5">
                      <ShieldIcon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-[var(--foreground)]">
                          AI Safety Protocols
                        </h3>
                      </div>
                      <p className="text-sm text-[var(--muted-foreground)] mt-1">
                        Protection systems enabled
                      </p>
                    </div>
                  </div>
                </div>

                {/* Program description */}
                <div className="mt-5 pt-5 border-t border-[var(--border-g)]">
                  <div className="text-sm text-[var(--muted-foreground)]">
                    <span className="text-[var(--primary)]">&gt; </span>
                    {program.workout_plan.description.substring(0, 120)}...
                  </div>
                </div>
              </CardContent>

              <CardFooter className="px-5 py-4 border-t border-[var(--border-g)]">
                <Link href={`/programs/${program.id}`} className="w-full">
                  <Button className="w-full bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]">
                    View Program Details
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA section */}
        <div className="mt-16 text-center">
          <Link href="/generate-program">
            <Button
              size="lg"
              className="bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)] px-8 py-6 text-lg"
            >
              Generate Your Program
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="text-[var(--muted-foreground)] mt-4">
            Join 850+ users with AI-customized fitness programs
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserPrograms;
