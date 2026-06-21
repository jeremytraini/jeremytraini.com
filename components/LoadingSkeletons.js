import clsx from "clsx";

function SkeletonBlock({ className, dark = false }) {
  return (
    <div
      aria-hidden="true"
      className={clsx(dark ? "skeleton-dark" : "skeleton", className)}
    />
  );
}

export function HeroSkeleton() {
  return (
    <section className="relative flex flex-col justify-evenly pb-32 h-screen max-h-[900px] min-h-[790px] overflow-hidden">
      <div className="-z-50 absolute w-[400px] h-[800px] left-[10%] top-[-50%] bg-gradient-to-br from-blue-300 to-blue-600 opacity-20 lg:opacity-[35%] blur-[175px] rotate-[-120deg]" />
      <div className="-z-50 absolute w-[400px] h-[800px] left-[10%] top-[70%] bg-gradient-to-br from-blue-300 to-blue-600 opacity-10 lg:opacity-30 blur-[175px]" />
      <div className="-z-50 absolute w-[400px] h-[800px] right-[10%] top-[5%] bg-gradient-to-br from-blue-300 to-blue-600 opacity-10 lg:opacity-30 blur-[175px] rotate-[120deg]" />

      <div className="flex flex-col justify-center items-center pt-2 md:pt-4 text-center min-h-min">
        <div className="flex flex-col items-center gap-6">
          <SkeletonBlock dark className="h-16 w-72 rounded-2xl sm:h-20 sm:w-[28rem] lg:h-24 lg:w-[34rem]" />
          <div className="flex flex-col gap-3 px-16 sm:px-20 w-full max-w-3xl">
            <SkeletonBlock dark className="h-8 w-full rounded-xl sm:h-9" />
            <SkeletonBlock dark className="h-4 w-72 rounded-lg" />
            <SkeletonBlock dark className="h-4 w-56 rounded-lg" />
          </div>
          <div className="flex items-center gap-6 pt-2">
            <SkeletonBlock dark className="h-12 w-12 rounded-full" />
            <SkeletonBlock dark className="h-12 w-12 rounded-full" />
            <SkeletonBlock dark className="h-12 w-12 rounded-full" />
          </div>
        </div>
      </div>

      <div className="px-6 pb-10 sm:px-10 lg:px-12">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-3 backdrop-blur-sm"
            >
              <SkeletonBlock dark className="h-56 w-full rounded-[1.5rem]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkeletonCard() {
  return (
    <div className="flex items-start gap-3">
      <div className="-ml-[9px] mt-6 flex-shrink-0 w-4 h-4 rounded-full skeleton" />
      <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4">
          <div className="flex items-start justify-between gap-3 mb-3">
            <SkeletonBlock className="w-14 h-14 rounded-xl" />
            <SkeletonBlock className="w-4 h-4 rounded mt-1" />
          </div>
          <SkeletonBlock className="h-4 w-32 rounded mb-2" />
          <SkeletonBlock className="h-3 w-24 rounded mb-1" />
          <SkeletonBlock className="h-3 w-16 rounded mt-2" />
        </div>
      </div>
    </div>
  );
}

export function TimelineSkeleton() {
  return (
    <div className="px-6 pb-8 flex flex-col md:flex-row justify-center w-full">
      {/* Left column — justify-between matches the live layout */}
      <div className="border-l-3 border-gray-300 md:border-b-3 md:rounded-bl-[44px] flex-1 flex flex-col justify-between py-8">
        <SkeletonCard />
        <SkeletonCard />
      </div>

      {/* U-turn (desktop) */}
      <div className="hidden w-20 md:flex md:flex-row mr-[-3px]">
        <div className="border-b-3 border-r-3 border-gray-300 rounded-br-[44px] h-1/2 w-1/2 self-end mr-[-3px]" />
        <div className="border-l-3 border-t-3 border-gray-300 rounded-tl-[44px] h-1/2 w-1/2" />
      </div>
      <div className="hidden md:block border-t-3 border-r-3 border-gray-300 rounded-tr-[44px] w-10" />

      {/* Right column */}
      <div className="flex-1 border-l-3 border-gray-300 md:border-none mt-[-32px] md:mt-0 py-8">
        <div className="flex flex-col gap-8">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </div>
  );
}

export function ProjectsSkeleton() {
  return (
    <div className="py-4 space-y-6">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
        >
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <SkeletonBlock className="aspect-[16/10] w-full rounded-none" />
            <div className="flex flex-col justify-center gap-4 p-8">
              <SkeletonBlock className="h-7 w-2/3 rounded-xl" />
              <SkeletonBlock className="h-4 w-full rounded-lg" />
              <SkeletonBlock className="h-4 w-5/6 rounded-lg" />
              <div className="flex gap-3 pt-2">
                <SkeletonBlock className="h-10 w-28 rounded-full" />
                <SkeletonBlock className="h-10 w-24 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProfileCardSkeleton() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <SkeletonBlock className="h-[156px] w-[156px] rounded-full -mt-[138px]" />
      <div className="mt-4 flex items-start justify-between gap-6">
        <div className="flex-1">
          <SkeletonBlock className="h-8 w-56 rounded-xl" />
          <SkeletonBlock className="mt-3 h-4 w-72 rounded-lg" />
          <SkeletonBlock className="mt-2 h-4 w-48 rounded-lg" />
          <SkeletonBlock className="mt-2 h-4 w-36 rounded-lg" />
        </div>
        <div className="hidden sm:flex flex-col gap-3 w-[232px]">
          <SkeletonBlock className="h-12 w-full rounded-2xl" />
          <SkeletonBlock className="h-12 w-full rounded-2xl" />
        </div>
      </div>
      <div className="mt-6 flex gap-2">
        <SkeletonBlock className="h-10 w-28 rounded-full" />
        <SkeletonBlock className="h-10 w-28 rounded-full" />
      </div>
    </div>
  );
}
