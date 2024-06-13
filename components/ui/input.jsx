import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={cn(
                "flex h-[48px] mb-5 rounded-md border border-primary focus:border-accent focus:text-primary font-light bg-accent px-4 py-5 text-base placeholder:text-primary outline-none",
                className
            )}
            ref={ref}
            {...props}
        />
    );
});
Input.displayName = "Input";

export { Input };
