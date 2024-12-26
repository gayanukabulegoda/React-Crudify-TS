interface DashboardStatsProps {
    label: string;
    value: number;
}

export function DashboardStats({ label, value }: DashboardStatsProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
            <p className="text-sm text-gray-600 mb-1">{label}</p>
            <p className="text-2xl font-bold text-primary">{value}</p>
        </div>
    );
}