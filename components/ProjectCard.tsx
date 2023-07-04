import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProjectCard({
  id,
  image,
  title,
  name,
  avatarUrl,
  userId,
}: {
  id: string;
  image: string;
  title: string;
  name: string;
  avatarUrl: string;
  userId: string;
}) {
  return (
    <div className="flexCenter flex-col rounded-2xl drop-shadow-card">
      <Link href={`/project/${id}`} className="flexCenter group relative w-full h-full">
        <Image
          src={image}
          width={414}
          height={314}
          className="w-full h-full object-cover rounded-2xl"
          alt="Project Image"
        />
        <div className="hidden group-hover:flex profile_card-title">
          <p className="w-full">{title}</p>
        </div>
      </Link>
      <div className="flexBetween w-full px-2 my-3 font-semibold text-sm">
        <Link href={`/profile/${userId}`}>
          <div className="flexCenter gap-2">
            <Image
              src={avatarUrl}
              width={24}
              height={24}
              className="rounded-full"
              alt="Profile Image"
            />
            <p>{name}</p>
          </div>
        </Link>

        <div className="flexCenter gap-3">
          <div className="flexCenter gap-2">
            <Image src="/hearth.svg" width={13} height={12} alt="hearth" />
            <p className="text-sm">{Math.floor(Math.random() * 1000)}</p>
          </div>

          <div className="flexCenter gap-2">
            <Image src="/eye.svg" width={13} height={12} alt="eye" />
            <p className="text-sm">{Math.floor(Math.random() * 10)}.{Math.floor(Math.random() * 100)}k</p>
          </div>
        </div>
      </div>
    </div>
  );
}
