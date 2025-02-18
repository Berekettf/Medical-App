import React, { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type StringInputProps = {
  label: string;
  items: string[]; // List of current items
  setItems: (items: string[]) => void; // Function to update the list of items
  itemTitle: string; // Placeholder for the input field
  className?: string;
};

export default function StringInputForm({
  label,
  items = [], // Ensure a default empty array
  setItems,
  itemTitle,
  className = "col-span-full",
}: StringInputProps) {
  const [newItem, setNewItem] = useState<string>(""); // State to track the new item input
  const [showInput, setShowInput] = useState<boolean>(false); // Toggle input field visibility

  // Function to add new item to the list
  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem(""); // Clear the input field
    }
    setShowInput(false); // Hide the input field
  };

  // Handle input field change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem(e.target.value);
  };

  // Handle deletion of items
  const handleDelete = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <h2>{label}</h2>
      <ul className="flex flex-wrap gap-2">
        {Array.isArray(items) ? (
          items.map((item, index) => (
            <li
              key={index}
              className="py-1 px-2 text-blue-700 rounded-md text-sm flex items-center gap-2 border"
            >
              {item}
              <X
                className="w-4 h-4 text-red-600 cursor-pointer"
                onClick={() => handleDelete(index)}
              />
            </li>
          ))
        ) : (
          <p>No items available</p>
        )}
      </ul>

      {/* Conditional rendering for the input field */}
      {showInput ? (
        <div className="mt-2 flex items-center">
          <input
            type="text"
            value={newItem}
            onChange={handleChange}
            placeholder={itemTitle}
            className="border border-gray-300 p-2 rounded-md"
          />
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded-md ml-2"
            onClick={handleAddItem}
          >
            Add
          </button>
        </div>
      ) : (
        <button
          className="rounded-md text-blue-500 border border-gray-600"
          onClick={() => setShowInput(true)}
        >
          +Add {itemTitle}
        </button>
      )}
    </div>
  );
}
