export const dynamic = "force-dynamic";
export const revalidate = 3600;

export default async function sitemap() {
  const baseUrl = "https://runanvil.com";

  const staticRoutes = [
    "",
    "/agents",
    "/pricing",
    "/about-us",
    "/ToS",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const externalRoutes = [
    "https://app.runanvil.com/templates",
    "https://status.runanvil.com",
    "https://docs.runanvil.com",
    "https://deforge.io",
  ].map((url) => ({
    url: url,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...externalRoutes];
}
