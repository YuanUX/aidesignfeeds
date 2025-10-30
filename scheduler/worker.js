// scheduler/worker.js

// This Cloudflare Worker automatically triggers a daily redeploy
// of your Cloudflare Pages site (AI Design Feeds).
// The schedule is defined in wrangler.toml under [triggers.crons].
// Example: "0 7 * * *" = run daily at 07:00 UTC (midnight PT).

export default {
  // Optional: test endpoint to verify the Worker is alive.
  // You can open this Worker’s URL in a browser to see "OK ✅".
  async fetch() {
    return new Response("AI Design Feeds Scheduler OK ✅", { status: 200 });
  },

  // Scheduled handler — runs automatically when the cron trigger fires.
  // Purpose: call Cloudflare Pages' deploy hook to start a new build.
  async scheduled(controller, env, ctx) {
    // The deploy hook URL should be defined in wrangler.toml or Cloudflare Dashboard
    // under Settings → Variables → Environment Variables.
    const url = env.DEPLOY_HOOK_URL;

    // If missing, log an error so you know the variable wasn't set.
    if (!url) {
      console.error("❌ Missing DEPLOY_HOOK_URL environment variable");
      return;
    }

    try {
      // POST to the deploy hook endpoint to trigger a new Pages build.
      const res = await fetch(url, { method: "POST" });

      // If the hook didn’t return 200 OK, throw an error for visibility.
      if (!res.ok) {
        throw new Error(`Deploy hook failed: ${res.status} ${await res.text()}`);
      }

      // Log a success message in the Worker logs.
      console.log("✅ Triggered redeploy:", res.status);
    } catch (err) {
      // Catch any network or runtime errors during the fetch.
      console.error("❌ Failed to trigger deploy:", err);
    }
  },
};
