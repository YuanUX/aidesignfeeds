export default {
  async scheduled(controller, env, ctx) {
    const DEPLOY_HOOK_URL = "https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/04db4e6d-5a74-4573-bb16-e01e42c58f72"; // your Deploy Hook URL

    try {
      const res = await fetch(DEPLOY_HOOK_URL, { method: "POST" });
      console.log("✅ Triggered redeploy:", res.status);
    } catch (err) {
      console.error("❌ Failed to trigger deploy:", err);
    }
  },

  // Run daily at 9 AM Pacific (16:00 UTC)
  crons: ["0 16 * * *"],
};
