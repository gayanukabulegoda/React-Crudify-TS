import {ReactNode} from "react";

interface DashboardOrDeleteSectionProps {
    title: string;
    children: ReactNode;
}

export const DashboardOrDeleteSection = ({title, children}: DashboardOrDeleteSectionProps) => {
    return (
        <div className="section-container">
            <h2 className="section-title">
                {title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {children}
            </div>
        </div>
    );
};