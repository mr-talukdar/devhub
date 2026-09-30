const SideBarMenus = [
  {
    title: "Dashboard",
    path: "/dashboard",
    logoLink:
      "https://img.icons8.com/material-outlined/24/dashboard-layout.png",
  },
  {
    title: "Developers",
    path: "/developers",
    logoLink:
      "https://img.icons8.com/external-tal-revivo-light-tal-revivo/24/external-team-of-multiple-peers-joining-the-workforce-of-coding-classicmultiple-light-tal-revivo.png",
  },
  {
    title: "Projects",
    path: "/projects",
    logoLink: "https://img.icons8.com/ios/50/opened-folder.png",
  },
  {
    title: "Settings",
    path: "/settings",
    logoLink: "https://img.icons8.com/ios/50/settings--v1.png",
  },
];

const DASHBOARD_METRICS = [
  {
    id: "total-developers",
    title: "Total Developers",
    value: 38,
    badge: "+3 this month",
    subtitle: "Headcount target: 45",
    progress: "84%",
    icon: "https://img.icons8.com/ios/50/men-age-group-4.png",
  },
  {
    id: "active-projects",
    title: "Active Projects",
    value: 14,
    badge: "11 on schedule",
    subtitle: "Sprint 42 ending Friday",
    highlightText: "3 behind",
    icon: "https://img.icons8.com/ios/50/group-of-projects.png",
  },
  {
    id: "completed-projects",
    title: "Completed Projects",
    value: 29,
    badge: "100% test coverage",
    subtitle: "Zero open regressions",
    statusText: "Verified",
    icon: "https://img.icons8.com/ios/50/task-completed.png",
  },
  {
    id: "open-pull-requests",
    title: "Open Pull Requests",
    value: 42,
    badge: "Avg review: 4.2h",
    subtitle: "Median SLA: 6.0h",
    statusText: "Within target",
    icon: "https://img.icons8.com/ios/50/merge-git.png",
  },
];

const RECENT_DEVELOPERS = [
  {
    id: 1,
    name: "Maya Lin",
    experience: "4 yrs exp",
    role: "Senior Frontend Eng",
    tags: ["React", "TypeScript", "Tailwind"],
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    status: "Active Now",
    activity: "8 commits today",
  },
  {
    id: 2,
    name: "Jordan Rivera",
    experience: "6 yrs exp",
    role: "Backend / Go Specialist",
    tags: ["Go", "gRPC", "Kubernetes"],
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    status: "Reviewed PR #302",
    activity: "1h ago",
  },
  {
    id: 3,
    name: "Priya Sharma",
    experience: "5 yrs exp",
    role: "Fullstack Engineer",
    tags: ["GraphQL", "Node.js", "PostgreSQL"],
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80",
    status: "Active Now",
    activity: "Deploying staging",
  },
  {
    id: 4,
    name: "Marcus Hayes",
    experience: "8 yrs exp",
    role: "Staff Platform Eng",
    tags: ["Terraform", "Rust", "AWS"],
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    status: "In Architecture Review",
    activity: "3h ago",
  },
];

const RECENT_PROJECTS = [
  {
    id: 1,
    name: "Auth Gateway v2",
    version: "v2.4.0-rc1",
    description: "High-throughput zero-trust authentication...",
    status: "In Progress",
    lead: "Jordan Rivera",
    leadAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    commitsCount: 142,
    branch: "main",
  },
  {
    id: 2,
    name: "Design System Tokens",
    version: "v1.12.0",
    description: "Central design tokens and shared atomic...",
    status: "Completed",
    lead: "Maya Lin",
    leadAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    commitsCount: 89,
    branch: "release/v1",
  },
  {
    id: 3,
    name: "CLI Metrics Exporter",
    version: "v0.9.4",
    description: "Lightweight Prometheus scraper daemon...",
    status: "In Progress",
    lead: "Marcus Hayes",
    leadAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    commitsCount: 56,
    branch: "feat/daemon",
  },
  {
    id: 4,
    name: "Customer Telemetry pipeline",
    version: "v3.0.1",
    description: "Distributed event logging ingest engine...",
    status: "Completed",
    lead: "Priya Sharma",
    leadAvatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80",
    commitsCount: 210,
    branch: "stable",
  },
];

const ICONS = {
  sync: "https://img.icons8.com/ios/50/rotate.png",
  clock: "https://img.icons8.com/ios/50/clock--v1.png",
  developers: "https://img.icons8.com/ios/50/group.png",
  projects: "https://img.icons8.com/ios/50/opened-folder.png",
  filter: "https://img.icons8.com/ios/50/filter--v1.png",
  commit: "https://img.icons8.com/ios/50/compare-git.png",
  arrowRight: "https://img.icons8.com/ios/50/right.png",
};

export {
  SideBarMenus,
  DASHBOARD_METRICS,
  RECENT_DEVELOPERS,
  RECENT_PROJECTS,
  ICONS,
};
