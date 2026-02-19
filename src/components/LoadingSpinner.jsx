import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => {
    return (
        <div className="w-full h-40 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-bm-magenta animate-spin" />
        </div>
    );
};

export default LoadingSpinner;
