import React from 'react';

type SelectInputProps = {
  title: string;
  optionTitle: string;
  className?: string;
  options: Option[];
  selectedOption: any;
  setSelectedOption: any;
};

export type Option = {
  label: string;
  value: string;
};

export default function SelectInput({ title, optionTitle, options, className, selectedOption, setSelectedOption }: SelectInputProps) {
  return (
    <div>
      <form className="max-w-sm mx-auto">
        <label htmlFor="select-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {title}
        </label>
        <select
          id="select-input"
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="" disabled>
            {optionTitle}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
