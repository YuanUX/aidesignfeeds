// scheduler/worker.js
export default {
  // optional test endpoint
  async fetch() {
    return new Response("AI Design Feeds Scheduler OK ✅", { status: 200 });
  },

  // daily redeploy trigger
  async scheduled(controller, env, ctx) {
    const url = env.DEPLOY_HOOK_URL;
    if (!url) {
      console.error("❌ Missing DEPLOY_HOOK_URL environment variable");
      return;
    }

    try {
      const res = await fetch(url, { method: "POST" });
      if (!res.ok) throw new Error(`Deploy hook failed: ${res.status} ${await res.text()}`);
      console.log("✅ Triggered redeploy:", res.status);
    } catch (err) {
      console.error("❌ Failed to trigger deploy:", err);
    }
  },
};
