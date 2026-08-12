import {
  Box,
  Briefcase,
  Building2,
  ClipboardList,
  Code,
  Database,
  Eye,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Layout,
  Lightbulb,
  Puzzle,
  RefreshCw,
  Search,
  Server,
  ShieldCheck,
  Terminal,
  UserCheck,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from 'lucide-react';

/**
 * Every icon referenced by an `icon` field in `src/data/`.
 *
 * Data files name icons as strings so content stays free of imports; this is the
 * single place that resolves those names. To use a new icon, import it from
 * `lucide-react` and add it here.
 */
export const icons: Record<string, LucideIcon> = {
  Box,
  Briefcase,
  Building2,
  ClipboardList,
  Code,
  Database,
  Eye,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Layout,
  Lightbulb,
  Puzzle,
  RefreshCw,
  Search,
  Server,
  ShieldCheck,
  Terminal,
  UserCheck,
  Users,
  Workflow,
  Zap,
};

export const getIcon = (name: string): LucideIcon | undefined => icons[name];
