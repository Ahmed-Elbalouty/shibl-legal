"use client";
import React from "react";

import "@/styles/social.scss";
import { appStore, SocialKey } from "@/stores/app";

import {
  Facebook,
  Instagram,
  Twitter,
} from "@/components/Icons";
const SocialLinks = ({ className = "" }: { className?: string }) => {
  const socialLinks: { icon: React.ElementType; name: SocialKey }[] = [
    {
      icon: Facebook,
      name: "facebook",
    },
    {
      icon: Instagram,
      name: "instagram",
    },
    {
      icon: Twitter,
      name: "x",
    },
  ];

  const { settings } = appStore();
  return (
    <ul className={`social ${className}`}>
      {socialLinks.map((link) => (
        <li key={link.name} className="flex items-center gap-2 lg:gap-5">
          <a
            href={settings[link.name]}
            className="duration-500 lg:hover:-translate-y-3"
            target="_blank"
          >
            <span className="icon flex-shrink-0">
              <link.icon />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
