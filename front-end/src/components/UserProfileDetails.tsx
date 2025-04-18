"use client";

import Image from "next/image";
import {
  formatBirthDate,
  getTimeSinceLastBirthday,
  getAge,
} from "../lib/utils/dateUtils";
import { useFavoriteUsersContext } from "../lib/favorites/FavoriteUsersContext";
import { useTranslation } from "../lib/hooks/useTranslation";

type Props = {
  user: User;
};

const UserProfileDetails = ({ user }: Props) => {
  const { isFavorite, toggleFavorite } = useFavoriteUsersContext();
  const { t } = useTranslation();

  const { value, unit } = getTimeSinceLastBirthday(user.birthDate);
  const favorite = isFavorite(user.id);

  return (
    <section
      className="border rounded-lg p-6 flex flex-col sm:flex-row sm:items-start gap-4 relative"
      aria-labelledby="user-profile-name"
    >
      <div className="flex-shrink-0">
        <Image
          src={user.picture}
          alt={t("userPictureAlt", { name: user.name })}
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>

      <div className="flex-1">
        <h2 id="user-profile-name" className="text-2xl font-bold">
          {user.name}
        </h2>
        <p className="text-gray-500 text-sm">{user.username}</p>

        <ul className="mt-4 text-sm space-y-2" role="list">
          <li className="flex items-center gap-2" role="listitem">
            <Image
              src="/icons/email.svg"
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
            />
            <span>{user.email}</span>
          </li>
          <li className="flex items-center gap-2" role="listitem">
            <Image
              src="/icons/location.svg"
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
            />
            <span>
              {user.city}, {user.state}, {user.country}
            </span>
          </li>
          <li className="flex items-center gap-2" role="listitem">
            <Image
              src="/icons/phone.svg"
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
            />
            <span>{user.phone}</span>
          </li>
          <li className="flex items-start gap-2" role="listitem">
            <div className="pt-1">
              <Image
                src="/icons/calendar.svg"
                alt=""
                width={16}
                height={16}
                aria-hidden="true"
              />
            </div>
            <div>
              <p>
                {formatBirthDate(user.birthDate)} ({getAge(user.birthDate)}{" "}
                {t("yearsOld")})
              </p>
              <p className="text-gray-500 text-xs">
                {t(`timeAgo.${unit}s`, { count: value })}
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="absolute top-4 right-4">
        <button
          onClick={() => toggleFavorite(user)}
          aria-label={favorite ? t("removeFavorite") : t("addFavorite")}
          aria-pressed={favorite}
          title={favorite ? t("removeFavorite") : t("addFavorite")}
        >
          <Image
            src={
              favorite
                ? "/icons/heart-filled.svg"
                : "/icons/heart-svgrepo-com.svg"
            }
            alt={t("favoriteIconAlt")}
            width={20}
            height={20}
          />
        </button>
      </div>
    </section>
  );
};

export default UserProfileDetails;
