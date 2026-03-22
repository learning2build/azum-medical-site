/** Cloudflare Turnstile server-side verification */
export async function verifyTurnstileToken(
  token: string,
  secret: string,
  remoteip?: string
): Promise<boolean> {
  const params = new URLSearchParams();
  params.set("secret", secret);
  params.set("response", token);
  if (remoteip) params.set("remoteip", remoteip);

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    }
  );

  const data = (await res.json()) as {
    success?: boolean;
    "error-codes"?: string[];
  };

  if (!data.success && data["error-codes"]?.length) {
    console.warn("[contact] turnstile:", data["error-codes"].join(", "));
  }

  return data.success === true;
}
