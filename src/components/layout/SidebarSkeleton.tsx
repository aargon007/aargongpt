export default function SidebarSkeleton() {
    return (
        <aside className="fixed left-0 top-0 z-50 flex h-full w-64 flex-col overflow-hidden bg-noble-800 transition-transform duration-300 ease-in-out md:sticky md:z-0 md:w-80 shadow-xl md:rounded-[20px] md:shadow-none">
            {/* top section */}
            <div className="flex items-center justify-between border-b border-noble-700 p-5">
                <div className="h-6 w-24 bg-noble-600 rounded animate-pulse"></div>
                <div className="h-8 w-8 bg-noble-600 rounded animate-pulse"></div>
            </div>

            {/* General section */}
            <div className="border-b border-noble-700 px-2 py-5">
                <div className="mb-5 pl-3">
                    <div className="h-4 w-16 bg-noble-600 rounded animate-pulse"></div>
                </div>
                <div className="space-y-2">
                    <div className="h-12 w-full bg-noble-600 rounded-lg animate-pulse"></div>
                    <div className="h-12 w-full bg-noble-600 rounded-lg animate-pulse"></div>
                </div>
            </div>

            {/* Projects section */}
            <div className="flex-1 px-2 py-5">
                <div className="mb-5 pl-3">
                    <div className="h-4 w-20 bg-noble-600 rounded animate-pulse"></div>
                </div>
                <div className="space-y-2">
                    <div className="h-10 w-full bg-noble-600 rounded-lg animate-pulse"></div>
                    <div className="h-10 w-full bg-noble-600 rounded-lg animate-pulse"></div>
                    <div className="h-10 w-full bg-noble-600 rounded-lg animate-pulse"></div>
                </div>
            </div>

            {/* User section */}
            <div className="border-t border-noble-700 p-5">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-noble-600 rounded-full animate-pulse"></div>
                    <div className="flex-1">
                        <div className="h-4 w-20 bg-noble-600 rounded animate-pulse mb-1"></div>
                        <div className="h-3 w-32 bg-noble-600 rounded animate-pulse"></div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
