export default {
  async scheduled(controller, env, ctx) {
    // Trigger a redeploy via Cloudflare Pages API
    const response = await fetch(`https://api.cloudflare.com/client/v4/pages/projects/aidesignfeeds/deployments`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.CLOUDFLARE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('Triggered redeploy:', response.status);
  },
  // Run once per day at 9 AM Pacific Time (16:00 UTC)
  crons: ['0 16 * * *'],
};
