import React, { FC } from 'react';

interface Interface {
  value: string;
  onChange: () => void;
  placeholder: string;
}

export const Search: FC<Interface> = ({ value, onChange, placeholder }) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type="text"
      />
    </div>
  );
};
