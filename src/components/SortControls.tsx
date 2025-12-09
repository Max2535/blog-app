// src/components/SortControls.tsx

type SortKey = 'date' | 'likes' | 'comments';

type SortControlsProps = {
  sortBy: SortKey;
  onChangeSortBy: (s: SortKey) => void;
  sortDir: 'asc' | 'desc';
  onToggleDir: () => void;
};

export function SortControls({ sortBy, onChangeSortBy, sortDir, onToggleDir }: SortControlsProps) {
  return (
    <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Sort by</label>
        <select
          value={sortBy}
          onChange={(e) => onChangeSortBy(e.target.value as SortKey)}
          className="rounded-md border-gray-300 shadow-sm p-2"
          aria-label="Sort posts"
        >
          <option value="date">Date</option>
          <option value="likes">Likes</option>
          <option value="comments">Comments</option>
        </select>
      </div>

      <div>
        <button
          type="button"
          onClick={onToggleDir}
          className="rounded-md border px-3 py-2 bg-white text-sm shadow-sm"
          aria-label="Toggle sort direction"
        >
          {sortDir === 'desc' ? 'Descending' : 'Ascending'}
        </button>
      </div>
    </div>
  );
}
