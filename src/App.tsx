import { useState, useEffect } from 'react'
import viteLogo from '/vite.svg'

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "./components/ui/glowing-effect";
import { Globe, World } from './components/ui/globe';
import { motion } from "framer-motion";
import { PersonIcon } from '@radix-ui/react-icons';

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const GlobeInGrid = () => {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#061f56", 
    emissiveIntensity: 1,
    shininess: 1,
    polygonColor: "#ffffff",
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -19.885592,
      endLng: -43.951191,
      arcAlt: 0,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];
  return (
    <div className="w-full h-64 md:h-80 relative">
      <World data={sampleArcs} globeConfig={globeConfig} />
    </div>
  );
};

// Add CurrentTimeCard component
const CurrentTimeCard = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <GridItem
      area="md:[grid-area:3/1/4/7] xl:[grid-area:2/5/3/8]"
      icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
      title="Your Current Time"
      description={time}
    />
  );
};

// Add ThemeToggleCard component
const ThemeToggleCard = () => {
  const [isDark, setIsDark] = useState<boolean>(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <GridItem
      area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/2/8]"
      icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
      title="Theme Toggle"
      description={
        <button
          className="px-4 py-2 rounded-lg border bg-gray-100 dark:bg-neutral-800 text-black dark:text-white"
          onClick={() => setIsDark((prev) => !prev)}
        >
          {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      }
    />
  );
};

function App() {

  return (
    <div className="flex items-center justify-center min-h-screen w-full py-24 px-4 bg-white dark:bg-black">
      <ul className="grid grid-cols-1 grid-rows-none gap-6 md:grid-cols-12 md:grid-rows-3 lg:gap-8 xl:max-h-[44rem] xl:grid-rows-2 w-full max-w-7xl">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<PersonIcon className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Hi! I am Dhruv."
          description={
            <div className="relative min-h-[8rem] flex items-center">
            </div>
          }
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="The best AI code editor ever."
          description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
        />

        <CurrentTimeCard />

        <ThemeToggleCard />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="This card is also built by Cursor"
          description="I'm not even kidding. Ask my mom if you don't believe me."
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Coming soon on Aceternity UI"
          description={
            <>
              I'm writing the code as I record this, no shit.
              <div className="mt-4">
                <GlobeInGrid />
              </div>
            </>
          }
        />
        
      </ul>
    </div>
  );
}

export default App
