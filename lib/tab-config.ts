/**
 * Tab Configuration for Project Detail Page
 *
 * Centralizes tab definitions to avoid duplication between mobile/desktop views.
 * Each tab has:
 * - value: unique identifier for the tab
 * - label: display name
 * - errorKey: key in project.jobErrors to check for errors (optional)
 * - feature: Clerk feature key for access control (optional)
 */

import { FEATURES, type FeatureName } from "./tier-config";

export interface TabConfig {
  value: string;
  label: string;
  errorKey?: string;
  feature?: FeatureName;
}

export const PROJECT_TABS: TabConfig[] = [
  {
    value: "summary",
    label: "Summary",
    errorKey: "summary",
  },
  {
    value: "moments",
    label: "Key Moments",
    errorKey: "keyMoments",
  },
  {
    value: "youtube-timestamps",
    label: "YouTube Timestamps",
    errorKey: "youtubeTimestamps",
  },
  {
    value: "social",
    label: "Social Posts",
    errorKey: "socialPosts",
  },
  {
    value: "hashtags",
    label: "Hashtags",
    errorKey: "hashtags",
  },
  {
    value: "titles",
    label: "Titles",
    errorKey: "titles",
  },
  {
    value: "speakers",
    label: "Speaker Dialogue",
  },
];
