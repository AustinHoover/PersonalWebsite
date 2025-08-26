/**
 * Allows resolving a static image path (ie "./static/images/myImage.png") to the webpack path (ie "5427654h64w65.png")
 */


const ctx = require.context('../assets', true, /\.(png|jpe?g|gif|svg|json|html)$/);

const map: Record<string, string> = {};
ctx.keys().forEach((key: string) => {
  console.log(key)
  const fileName = key.replace('./', '');
  map[`static/${fileName}`] = ctx(key);
});

/**
 * Gets the webpack-generated path of a static asset
 * @param path The static path prior to packing
 * @returns The webpack-generated path
 */
export function getAssetUrl(path: string) {
  return map[path];
}