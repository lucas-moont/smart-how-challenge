"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";

type Props = {
  defaultValue?: string;
  onSubmit: (value: string) => void;
};

type FormData = {
  search: string;
};

const UserSearchBar: FC<Props> = ({ defaultValue = "", onSubmit }) => {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: { search: defaultValue },
  });

  const submitHandler = (data: FormData) => {
    onSubmit(data.search);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4"
    >
      <label htmlFor="search" className="sr-only">
        Search users by name
      </label>

      <div className="relative w-full">
        <input
          {...register("search")}
          id="search"
          type="text"
          placeholder="Search by name..."
          className="w-full border border-gray-300 rounded-md py-2 pl-12 pr-4 bg-[url('/icons/magnifying-glass.svg')] bg-no-repeat bg-[length:20px] bg-[center_left_1rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Search users by name"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
};

export default UserSearchBar;
