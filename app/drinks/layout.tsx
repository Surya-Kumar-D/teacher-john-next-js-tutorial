import React from "react";

const DrinksLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-6xl m-auto px-4">
      <div className="mockup-code mb-8">
        <pre data-prefix="$">
          <code>npx create-next-app@latest next&apos;s-tutorial</code>
        </pre>
      </div>
      {children}
    </div>
  );
};

export default DrinksLayout;
