// src/components/Skeleton.tsx

export function Skeleton() {
  return (
    <article className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6 animate-pulse">
      <div className="md:flex md:items-start md:gap-6">
        <div className="flex items-center gap-4 md:flex-col md:items-center md:w-36">
          <div className="w-12 h-12 bg-gray-300 rounded-full" />
          <div className="hidden md:block w-24 h-3 bg-gray-200 rounded mt-2" />
        </div>

        <div className="mt-3 md:mt-0 flex-1">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-3" />
          <div className="h-4 bg-gray-200 rounded w-full mb-2" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />

          <div className="mt-4 flex gap-4">
            <div className="h-6 w-20 bg-gray-200 rounded" />
            <div className="h-6 w-20 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </article>
  );
}
