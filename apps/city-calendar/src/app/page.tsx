"use client";
import { useState } from "react";
import { Header, Footer } from "@cityofportland/component-library";
import { Counter } from "@/components/counter";

export default function Home() {
  return (
    <>
      <Header
        logoAlt="Portland.gov Logo"
        logoUrl="https://egovpdx.github.io/portland-component-library/assets/PGOV-Logo-BH7su9hC.svg"
        navItems={[
          {
            description: "Groups, boards, and commissions.",
            href: "/advisory-groups",
            label: "Advisory Groups",
          },
          {
            description: "City departments.",
            href: "/bureaus-offices",
            label: "Bureaus and Offices",
          },
          {
            description: "Events, public meetings, and hearings.",
            href: "/events",
            label: "Calendar of Events",
          },
          {
            description: "Official City documents.",
            href: "/charter-code-policies",
            label: "Charter, Code, Policies",
          },
          {
            description: "Districts, officials, meetings, and news.",
            href: "/council",
            label: "City Council",
          },
          {
            description: "Building, transportation, maintenance, and sewer projects.",
            href: "/construction",
            label: "Construction Projects",
          },
          {
            description: "Parks, facilities, and reservations.",
            href: "/parks/search",
            label: "Find a Park",
          },
          {
            description: "Neighborhood directory.",
            href: "/neighborhoods",
            label: "Neighborhoods",
          },
          {
            description: "Articles, blogs, press releases, public notices, and newsletters.",
            href: "/news",
            label: "News",
          },
          {
            description: "Planning, outreach and education, strategic, and technology projects.",
            href: "/projects",
            label: "Projects",
          },
          {
            description: "Service and resource directory.",
            href: "/services",
            label: "Services and Resources",
          },
          {
            description: "Opportunities posted to governmentjobs.com",
            href: "https://www.governmentjobs.com/careers/portlandor",
            label: "Jobs with the City",
          },
        ]}
        title="Portland.gov"
      />
      <h1>Welcome to the City Calendar</h1>
      <p>Your one-stop solution for all city events.</p>
      <Footer
        cityLogoUrl="https://egovpdx.github.io/portland-component-library/assets/PGOV-Logo-BH7su9hC.svg"
        generalInfoLinks={[
          {
            href: "mailto:311@portlandoregon.gov",
            label: "311@portlandoregon.gov",
          },
          {
            href: "/customer-service",
            label: "311 information an customer service",
          },
          {
            href: "tel:5038234000",
            label: "503-823-4000",
          },
          {
            href: "tel:711",
            label: "711 Oregon Relay Service",
          },
        ]}
        portlandGovLinks={[
          {
            href: "/about",
            label: "About this website",
          },
          {
            href: "/employees",
            label: "Employee portal",
          },
          {
            href: "/login",
            label: "Editor log in",
          },
        ]}
        phoneNumber={"503-823-4000"}
        relayServiceNumber={"711"}
        socialMediaLinks={[
          {
            href: "https://bsky.app",
            label: "Bluesky",
          },
          {
            href: "https://facebook.com/CityofPortland",
            label: "Facebook",
          },
          {
            href: "https://instagram.com/portlandoregon",
            label: "Instagram",
          },
          {
            href: "https://twitter.com/portlandgov",
            label: "X (Twitter)",
          },
        ]}
        termsLinks={[
          {
            href: "/ada-accommodation",
            label: "ADA accommodation",
          },
          {
            href: "/captioning",
            label: "Captioning and transcription",
          },
          {
            href: "/privacy",
            label: "Privacy Policy",
          },
        ]}
      />
    </>
  );
}
