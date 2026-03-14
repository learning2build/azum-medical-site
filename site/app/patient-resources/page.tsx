import { redirect } from "next/navigation";

/**
 * Legacy route: Patient Resources was renamed to Wellness Insights.
 * Redirect so old links and bookmarks still work.
 */
export default function PatientResourcesRedirect() {
  redirect("/wellness-insights");
}
