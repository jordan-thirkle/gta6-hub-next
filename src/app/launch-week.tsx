import Link from 'next/link';

const LAUNCH_WEEK_ARTICLES = [
  { title: 'GTA 6 Launch Day Guide: What to Expect', slug: 'gta-6-launch-day-guide', publishDate: '2026-11-19', priority: 1 },
  { title: 'GTA 6 Server Status & Online Launch', slug: 'gta-6-server-status', publishDate: '2026-11-20', priority: 2 },
  { title: 'GTA 6 First 24 Hours Review Roundup', slug: 'gta-6-review-roundup', publishDate: '2026-11-21', priority: 3 },
  { title: 'GTA 6 Launch Week Sales Tracker', slug: 'gta-6-sales-tracker', publishDate: '2026-11-25', priority: 4 },
];

export default function LaunchWeekSchedule() {
  return (
    <div className="py-12">
      <h2 className="text-base font-medium">Launch Week Content Queue</h2>
      <p className="mt-2 text-secondary">Articles scheduled to publish during launch week.</p>
      <div className="mt-6 space-y-3">
        {LAUNCH_WEEK_ARTICLES.map((item) => (
          <div key={item.slug} className="border border-border p-4 flex items-center justify-between">
            <div>
              <h3 className="text-sm">{item.title}</h3>
              <p className="text-[10px] text-tertiary font-mono mt-1">{item.publishDate} | Priority {item.priority}</p>
            </div>
            <span className="text-[10px] text-tertiary font-mono border border-border px-2 py-1">Scheduled</span>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link href="/articles" className="text-xs underline">View all articles</Link>
      </div>
    </div>
  );
}
