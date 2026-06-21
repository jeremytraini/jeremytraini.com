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

export function TimelineSkeleton() {
  return (
    <div className="px-6 pb-8">
      <div className="grid gap-6 md:grid-cols-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
          >
            <div className="flex items-start gap-4">
              <SkeletonBlock className="h-14 w-14 rounded-2xl" />
              <div className="flex-1">
                <SkeletonBlock className="h-5 w-2/3 rounded-lg" />
                <SkeletonBlock className="mt-3 h-4 w-1/2 rounded-lg" />
                <SkeletonBlock className="mt-2 h-4 w-3/4 rounded-lg" />
              </div>
            </div>
          </div>
        ))}
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
