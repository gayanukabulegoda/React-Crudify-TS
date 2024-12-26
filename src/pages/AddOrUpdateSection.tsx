import {ReactNode} from 'react';

interface AddOrUpdateSectionProps {
    title: string;
    children: ReactNode;
}

export function AddOrUpdateSection({title, children}: AddOrUpdateSectionProps) {
    return (
        <div className="section-container">
            <h2 className="section-title">
                {title}
            </h2>
            {children}
        </div>
    );
}