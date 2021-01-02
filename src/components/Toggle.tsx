import * as React from 'react';
import '@if-design-system/selection-controls';

const Toggle: React.FC = () => {
  return (
    <div className="if selection-controls [horizontal]">
      <input
        data-size="larger"
        className="if toggle"
        id="selection-controls-implementation-toggle-2"
        type="checkbox"
      />
      <label
        className="if"
        htmlFor="selection-controls-implementation-toggle-2"
      >
        Auto-brightness
      </label>
    </div>
  );
};

export default Toggle;
