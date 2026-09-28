export type PageImages = {
  hero: string;
  previews: string[];
};

const img = (hero: string, previews: string[]): PageImages => ({ hero, previews });

export const pageImages: Record<string, PageImages> = {
  'gemini-ai-photo-prompt-copy-paste': img(
    'https://images.pexels.com/photos/36697247/pexels-photo-36697247.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    [
      'https://images.pexels.com/photos/29057425/pexels-photo-29057425.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/17094508/pexels-photo-17094508.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/36697542/pexels-photo-36697542.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  ),
  'gemini-photo-prompt-for-boys': img(
    'https://images.pexels.com/photos/1472761/pexels-photo-1472761.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    [
      'https://images.pexels.com/photos/899357/pexels-photo-899357.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/1054685/pexels-photo-1054685.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/9961662/pexels-photo-9961662.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  ),
  'gemini-girl-photo-prompt': img(
    'https://images.pexels.com/photos/32805662/pexels-photo-32805662.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    [
      'https://images.pexels.com/photos/6541627/pexels-photo-6541627.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/20030104/pexels-photo-20030104.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/31785654/pexels-photo-31785654.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  ),
  'gemini-couple-photo-prompt': img(
    'https://images.pexels.com/photos/33943625/pexels-photo-33943625.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    [
      'https://images.pexels.com/photos/3998369/pexels-photo-3998369.png?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/1619315/pexels-photo-1619315.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/5055872/pexels-photo-5055872.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  ),
  'gemini-ai-photo-prompt-trending': img(
    'https://images.pexels.com/photos/5990168/pexels-photo-5990168.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    [
      'https://images.pexels.com/photos/14530804/pexels-photo-14530804.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/9513834/pexels-photo-9513834.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/9399666/pexels-photo-9399666.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  ),
  'gemini-ai-photo-prompt-2x2-formal-blue-background': img(
    'https://images.pexels.com/photos/6823572/pexels-photo-6823572.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    [
      'https://images.pexels.com/photos/38758069/pexels-photo-38758069.png?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/19570672/pexels-photo-19570672.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/33605541/pexels-photo-33605541.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  ),
  'gemini-ai-photoshoot-prompt': img(
    'https://images.pexels.com/photos/30697993/pexels-photo-30697993.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    [
      'https://images.pexels.com/photos/36697542/pexels-photo-36697542.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/36697251/pexels-photo-36697251.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/3888212/pexels-photo-3888212.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  ),
  'gemini-ai-polaroid-prompt': img(
    'https://images.pexels.com/photos/20853227/pexels-photo-20853227.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    [
      'https://images.pexels.com/photos/7360000/pexels-photo-7360000.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/2983401/pexels-photo-2983401.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/8266758/pexels-photo-8266758.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  ),
  'gemini-ai-retro-style-prompt': img(
    'https://images.pexels.com/photos/9195103/pexels-photo-9195103.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    [
      'https://images.pexels.com/photos/159440/polaroid-camera-photography-technology-159440.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/1141677/pexels-photo-1141677.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/12640578/pexels-photo-12640578.png?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  ),
  'gemini-ai-hairstyle-prompt': img(
    'https://images.pexels.com/photos/33448216/pexels-photo-33448216.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    [
      'https://images.pexels.com/photos/12464843/pexels-photo-12464843.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/13138585/pexels-photo-13138585.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/36043163/pexels-photo-36043163.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  ),
  'gemini-ai-halloween-photo-prompt': img(
    'https://images.pexels.com/photos/5435193/pexels-photo-5435193.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    [
      'https://images.pexels.com/photos/29357315/pexels-photo-29357315.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/5522320/pexels-photo-5522320.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/10011944/pexels-photo-10011944.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  ),
  'gemini-ai-christmas-photo-prompt': img(
    'https://images.pexels.com/photos/1580209/pexels-photo-1580209.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    [
      'https://images.pexels.com/photos/29828124/pexels-photo-29828124.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/701025/pexels-photo-701025.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/1647473/pexels-photo-1647473.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  ),
  'gemini-ai-birthday-prompt': img(
    'https://images.pexels.com/photos/25956380/pexels-photo-25956380.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    [
      'https://images.pexels.com/photos/7180713/pexels-photo-7180713.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/7600420/pexels-photo-7600420.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/30682919/pexels-photo-30682919.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  ),
  'how-to-write-gemini-ai-photo-prompt': img(
    'https://images.pexels.com/photos/7683909/pexels-photo-7683909.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    [
      'https://images.pexels.com/photos/33266805/pexels-photo-33266805.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/5749147/pexels-photo-5749147.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/7278606/pexels-photo-7278606.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  ),
  'image-to-prompt-generator': img(
    'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    [
      'https://images.pexels.com/photos/17485738/pexels-photo-17485738.png?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/18799044/pexels-photo-18799044.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/18069693/pexels-photo-18069693.png?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  ),
  'nano-banana-ai-prompts': img(
    'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    [
      'https://images.pexels.com/photos/17485738/pexels-photo-17485738.png?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/18069693/pexels-photo-18069693.png?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/18799044/pexels-photo-18799044.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  ),
  'gemini-photo-editing-guide': img(
    'https://images.pexels.com/photos/7014918/pexels-photo-7014918.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    [
      'https://images.pexels.com/photos/6155010/pexels-photo-6155010.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/6347722/pexels-photo-6347722.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/7014919/pexels-photo-7014919.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  ),
  'professional-headshot-prompts': img(
    'https://images.pexels.com/photos/4057039/pexels-photo-4057039.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    [
      'https://images.pexels.com/photos/8171180/pexels-photo-8171180.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/32288633/pexels-photo-32288633.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/37426364/pexels-photo-37426364.png?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  ),
  'photo-enhancer-restoration-upscale-prompts': img(
    'https://images.pexels.com/photos/33305508/pexels-photo-33305508.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    [
      'https://images.pexels.com/photos/7920988/pexels-photo-7920988.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/8848784/pexels-photo-8848784.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/3617568/pexels-photo-3617568.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  ),
  'gemini-art-anime-style-prompts': img(
    'https://images.pexels.com/photos/37669339/pexels-photo-37669339.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    [
      'https://images.pexels.com/photos/38454106/pexels-photo-38454106.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/38621695/pexels-photo-38621695.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/38780517/pexels-photo-38780517.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  ),
};

export function getPageImages(slug: string): PageImages | undefined {
  return pageImages[slug];
}
