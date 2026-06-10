export function SettingsPage() {
  return (
    <div className="max-w-lg space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="mt-1 text-sm text-neutral-500">Dashboard preferences (demo)</p>
      </div>
      <form className="space-y-4 rounded-xl border border-neutral-200 bg-white p-6">
        <div>
          <label htmlFor="currency" className="block text-sm font-medium">
            Display currency
          </label>
          <select id="currency" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm">
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
          </select>
        </div>
        <div>
          <label htmlFor="range" className="block text-sm font-medium">
            Default date range
          </label>
          <select id="range" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm">
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Year to date</option>
          </select>
        </div>
        <button type="button" className="rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-600">
          Save preferences
        </button>
      </form>
    </div>
  );
}
