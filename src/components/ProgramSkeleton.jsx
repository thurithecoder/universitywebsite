import React from 'react';

export default function ProgramSkeleton() {
    return (
        <div className="min-h-[330px] overflow-hidden rounded-xl border border-red-100 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
            <div className="h-28 animate-pulse bg-red-100" />
            <div className="p-4">
                <div className="mb-3 h-px bg-red-100" />
                <div className="mb-3 h-5 w-4/5 animate-pulse rounded bg-gray-100" />
                <div className="mb-6 h-5 w-3/5 animate-pulse rounded bg-gray-100" />
                <div className="rounded-lg border border-gray-100 bg-gray-50 p-3">
                    <div className="h-4 w-2/3 animate-pulse rounded bg-gray-100" />
                </div>
                <div className="mt-3 h-10 animate-pulse rounded-lg bg-red-100" />
            </div>
        </div>
    );
}
