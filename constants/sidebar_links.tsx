import type { LucideIcon } from "lucide-react";
import {
  List,
  User,
  Plus,
  BarChart3,
  Settings,
} from "lucide-react";
import { SidebarLinkType } from "@/types/props";

export const SIDEBAR_LINKS: SidebarLinkType[] = [
  {
    href: "/quizzes/all",
    label: "All Quizzes",
    description: "Explore all available quizzes",
    icon: List,
    iconVisible: true,
    labelVisible: true,
  },
  {
    href: "/quizzes/my",
    label: "My Quizzes",
    description: "View quizzes you've created",
    icon: User,
    iconVisible: true,
    labelVisible: true,
  },
  {
    href: "/quizzes/create",
    label: "Create Quiz",
    description: "Start a new quiz",
    icon: Plus,
    iconVisible: true,
    labelVisible: false,
  },
  {
    href: "/quizzes/results",
    label: "Results",
    description: "View quiz results",
    icon: BarChart3,
    iconVisible: true,
    labelVisible: true,
  },
];

export const BOTTOM_SIDEBAR_LINK: SidebarLinkType = {
  href: "/settings",
  label: "Settings",
  description: "Manage your account settings",
  icon: Settings,
  iconVisible: true,
  labelVisible: true,
};