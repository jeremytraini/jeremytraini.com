import {
  HeroSkeleton,
  ProfileCardSkeleton,
  ProjectsSkeleton,
  TimelineSkeleton,
} from "@/components/LoadingSkeletons";
import clsx from "clsx";

export default function Loading() {
  return (
    <>
      <HeroSkeleton />

      <section className="w-full p-12 sm:p-16 bg-gray-100 rounded-t-[4em] mt-[-4em] pb-24">
        <div className="mx-auto max-w-7xl">
          <h1 className={clsx("text-4xl md:text-5xl", "text-default-900 pb-10")}>
            Timeline
          </h1>
          <TimelineSkeleton />
        </div>
      </section>

      <section className="w-full p-12 sm:p-16 bg-white rounded-t-[4em] mt-[-4em] pb-[4em] min-h-screen">
        <div className="mx-auto max-w-7xl pb-8 sm:pb-12">
          <h1 className={clsx("text-4xl md:text-5xl", "text-default-900 pb-10")}>
            {"What I’m working on"}
          </h1>
          <ProjectsSkeleton />
        </div>
      </section>

      <section className="w-full p-12 sm:p-16 bg-gray-100 rounded-t-[4em] mt-[-4em]">
        <div className="mx-auto max-w-7xl pb-20 sm:pb-24">
          <div className="flex justify-end pb-10">
            <div className="hidden sm:block">
              <div className="skeleton h-8 w-72 rounded-xl" aria-hidden="true" />
            </div>
          </div>
          <ProfileCardSkeleton />
        </div>
      </section>
    </>
  );
}
