"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { useFavoriteUsersContext } from "../lib/favorites/FavoriteUsersContext";
import { saveSelectedUser } from "../lib/profile/selectedUser";
import { formatBirthDate } from "../lib/utils/dateUtils";
import { useParams } from "next/navigation";

type Props = {
  user: User;
};

const UserCard: FC<Props> = ({ user }) => {
  const { isFavorite, toggleFavorite } = useFavoriteUsersContext();
  const params = useParams();
  const locale = params?.locale ?? "en";

  const favorite = isFavorite(user.id);

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:items-center border-b py-4 px-2 text-center sm:text-left">
      <div className="w-full sm:w-20 flex justify-center sm:justify-start mb-2 sm:mb-0">
        <Image
          src={user.picture}
          alt={`Profile picture of ${user.name}`}
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>

      <div className="w-full sm:flex-1 mb-2 sm:mb-0">
        <Link
          href={`/${locale}/user/${user.id}`}
          onClick={() => saveSelectedUser(user)}
          className="text-blue-600 font-medium hover:underline"
          aria-label={`View profile of ${user.name}`}
        >
          {user.name}
        </Link>
      </div>

      <div className="w-full sm:flex-1 text-sm text-gray-600 mb-2 sm:mb-0">
        {user.email}
      </div>

      <div className="w-full sm:w-32 mb-2 sm:mb-0">{user.country}</div>

      <div className="w-full sm:w-40 mb-2 sm:mb-0">
        {formatBirthDate(user.birthDate)}
      </div>

      <div className="w-full sm:w-20 flex justify-center sm:justify-center">
        <button
          onClick={() => toggleFavorite(user)}
          aria-label={favorite ? `Unfavorite ${user.name}` : `Favorite ${user.name}`}
          aria-pressed={favorite}
        >
          <Image
            src={
              favorite
                ? "/icons/heart-filled.svg"
                : "/icons/heart-svgrepo-com.svg"
            }
            alt={favorite ? "Favorited" : "Not favorited"}
            width={20}
            height={20}
            className="inline-block"
          />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
