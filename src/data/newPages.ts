import type { PageData } from './types';
import { sharedTips, sharedBestPractices, sharedMistakes, sharedFaqs } from './types';

export const newPages: PageData[] = [
  {
    slug: 'image-to-prompt-generator',
    path: '/image-to-prompt-generator',
    category: 'trending',
    title: 'Image to Prompt Generator',
    metaTitle: 'Image to Prompt Generator — Reverse AI Photo Prompts with Gemini',
    metaDescription:
      'Learn how image to prompt generator tools work. Reverse-engineer any photo into a Gemini AI prompt. 10 example prompts, upload workflow, FAQs, and a complete guide.',
    h1: 'Image to Prompt Generator — Turn Any Photo Into an AI Prompt',
    intro:
      'An image to prompt generator takes any photo and reverse-engineers it into a text prompt that an AI like Gemini can use to recreate or edit the image. Instead of writing a prompt from scratch, you describe what you already see and let the AI build the instruction. This page explains how image to prompt generator tools work, how to use them with Google Gemini, and provides 10 example prompts you can copy and paste right now. The img to prompt and photo to prompt workflow is one of the fastest-growing trends in AI photo editing because it removes the guesswork from prompt writing. Whether you want to recreate a style, replicate a lighting setup, or understand what makes a photo look professional, the image to prompt AI approach gets you there faster.',
    primaryKeyword: 'image to prompt generator',
    keywords: ['image to prompt generator', 'img to prompt', 'photo to prompt', 'image to prompt ai', 'free image to prompt', 'picture to ai prompt', 'reverse prompt generation', 'image to prompt gemini'],
    prompt:
      'Analyze this photo and generate a detailed Gemini AI prompt that would recreate it. Describe: subject, pose, outfit, lighting setup, camera angle, background, color grade, depth of field, film grain, mood, and output quality. Return the result as a single copy-paste prompt.',
    prompts: [
      { label: 'Reverse Portrait', text: 'Analyze this portrait photo and generate a Gemini AI prompt that recreates it. Describe: subject appearance, pose, outfit, lighting (key, fill, rim), camera angle, background, color grade, depth of field, skin retouching style, and output quality. Return as a single copy-paste prompt.' },
      { label: 'Reverse Cinematic', text: 'Analyze this cinematic still and create a Gemini prompt that reproduces its look. Describe: lighting, color grade, lens compression, film grain, mood, background, and subject styling. Return as a copy-paste prompt.' },
      { label: 'Reverse Outdoor', text: 'Analyze this outdoor photo and generate a Gemini prompt to recreate it. Describe: time of day, natural light direction, background scenery, subject pose, outfit, depth of field, and color temperature. Return as a copy-paste prompt.' },
      { label: 'Reverse Studio', text: 'Analyze this studio portrait and create a Gemini prompt that reproduces the lighting setup, backdrop, lens type, skin retouching, and color grade. Return as a single copy-paste prompt.' },
      { label: 'Reverse Polaroid', text: 'Analyze this polaroid photo and generate a Gemini prompt that recreates its instant-film look. Describe: flash effect, color fade, grain, white border, pose, and mood. Return as a copy-paste prompt.' },
      { label: 'Reverse Trending', text: 'Analyze this trending photo and create a Gemini prompt that reproduces its viral style. Describe: contrast level, skin finish, lighting, background, color grade, and subject styling. Return as a copy-paste prompt.' },
      { label: 'Reverse Couple', text: 'Analyze this couple photo and generate a Gemini prompt that recreates it. Describe: both subjects, poses, lighting, background, color grade, mood, and depth of field. Return as a copy-paste prompt.' },
      { label: 'Reverse Formal ID', text: 'Analyze this formal ID photo and create a Gemini prompt that reproduces it. Describe: background color, pose, expression, attire, lighting, and output specifications. Return as a copy-paste prompt.' },
      { label: 'Reverse Retro', text: 'Analyze this retro photo and generate a Gemini prompt that recreates its vintage look. Describe: era, color grade, grain level, lighting, outfit, and mood. Return as a copy-paste prompt.' },
      { label: 'Reverse Aesthetic', text: 'Analyze this aesthetic photo and create a Gemini prompt that reproduces its soft look. Describe: color palette, haze, grain, lighting, background, and subject styling. Return as a copy-paste prompt.' },
    ],
    variations: [
      { label: 'Minimal reverse', text: 'Analyze this photo and write a short Gemini prompt that recreates its main visual elements: subject, lighting, background, style, quality.' },
      { label: 'Detailed reverse', text: 'Analyze this photo and write a detailed Gemini prompt covering: subject, pose, outfit, lighting, lens, background, color grade, grain, mood, quality.' },
      { label: 'Style transfer reverse', text: 'Analyze this photo and extract only its visual style (lighting, color, mood) as a Gemini prompt that can be applied to a different subject.' },
      { label: 'Lighting reverse', text: 'Analyze this photo and extract only its lighting setup as a Gemini prompt. Describe key, fill, rim, direction, intensity, and color temperature.' },
      { label: 'Color reverse', text: 'Analyze this photo and extract its color grade as a Gemini prompt. Describe primary tones, contrast, saturation, and overall mood.' },
    ],
    tips: [
      ...sharedTips,
      'Upload the clearest version of your photo — blurry or low-res images produce inaccurate reverse prompts.',
      'If the reverse prompt is too generic, add specific details you notice in the photo (outfit color, light direction, background elements).',
    ],
    bestPractices: sharedBestPractices,
    commonMistakes: sharedMistakes,
    faqs: [
      ...sharedFaqs,
      {
        question: 'Is there a free image to prompt generator?',
        answer:
          'Yes. Google Gemini can analyze an uploaded image and generate a text prompt describing it. Upload your photo to Gemini and ask it to "describe this image as a prompt that would recreate it."',
      },
      {
        question: 'How accurate is reverse prompt generation?',
        answer:
          'It captures the main visual elements (lighting, color, composition) well, but fine details like exact lens type or specific grain levels may need manual adjustment in the generated prompt.',
      },
      {
        question: 'Can I use a reverse prompt on a different photo?',
        answer:
          'Yes. Once you have the reverse prompt, replace the subject description with a new photo description. The lighting, style, and color instructions will carry over.',
      },
    ],
    related: ['gemini-ai-photo-prompt-copy-paste', 'how-to-write-gemini-ai-photo-prompt', 'gemini-ai-photo-prompt-trending', 'gemini-ai-photoshoot-prompt', 'gemini-photo-editing-guide', 'professional-headshot-prompts'],
    imageAlt: 'Image to prompt generator workflow — photo to AI prompt example',
    previewAlts: [
      'Image to prompt generator — reverse portrait example',
      'Image to prompt generator — reverse cinematic example',
      'Image to prompt generator — reverse studio example',
    ],
    pageType: 'prompt',
  },
  {
    slug: 'nano-banana-ai-prompts',
    path: '/nano-banana-ai-prompts',
    category: 'trending',
    title: 'Nano Banana AI Prompts',
    metaTitle: 'Nano Banana AI Prompts — Headshots, Upscaler & Style Transfer Guide',
    metaDescription:
      'Complete guide to Nano Banana AI prompts. 10 copy-paste prompts for headshots, upscaler, free, style transfer, and editing. Comparison, tips, and FAQs included.',
    h1: 'Nano Banana AI Prompts — Complete Guide & 10 Copy-Paste Prompts',
    intro:
      'Nano Banana is one of the most popular AI image generation models for headshots, upscaling, and style transfer. This page is a comprehensive guide to nano banana prompts, covering headshots, the nano banana upscaler, free usage, style transfer, and photo editing. Whether you are looking for nano banana free alternatives, want to generate professional headshots, or need to upscale and enhance an image, the prompts below are tested and ready to copy. The nano banana editing ecosystem has grown rapidly, and knowing the right prompt structure makes the difference between a generic result and a professional-grade output. Each prompt here is designed to work with the nano banana model and produce realistic, high-quality results.',
    primaryKeyword: 'nano banana',
    keywords: ['nano banana', 'nano banana headshots', 'nano banana upscaler', 'nano banana free', 'nano banana style transfer', 'nano banana editing', 'nano banana prompts', 'nano banana ai', 'banana ai prompt'],
    prompt:
      'Generate a professional headshot using nano banana style. Subject: [describe person]. Lighting: soft studio softbox. Background: clean neutral. Skin: natural retouching. Output: high resolution, sharp eyes, 4K detail.',
    prompts: [
      { label: 'Professional Headshot', text: 'Generate a professional headshot using nano banana style. Subject: [describe person]. Lighting: soft studio softbox. Background: clean neutral. Skin: natural retouching. Output: high resolution, sharp eyes, 4K detail.' },
      { label: 'Corporate LinkedIn', text: 'Create a LinkedIn headshot with nano banana. Subject: [describe person]. Blazer, soft blue gradient background, softbox lighting, confident smile, sharp eyes, professional grade, 4K.' },
      { label: 'Upscale Enhance', text: 'Upscale and enhance this photo using nano banana upscaler. Sharpen details, improve skin texture, enhance lighting clarity, increase resolution to 4K, keep face natural and recognizable.' },
      { label: 'Style Transfer', text: 'Apply nano banana style transfer to [describe your photo]. Transfer the visual style from [describe reference style] while keeping the subject\'s face and pose natural. Match color grade, lighting, and texture.' },
      { label: 'Portrait Retouch', text: 'Retouch this portrait using nano banana editing. Natural skin smoothing, enhance eye detail, balance lighting, improve color grade, keep face recognizable, 4K output.' },
      { label: 'Casual Headshot', text: 'Generate a casual headshot with nano banana. Subject: [describe person]. Natural daylight, simple outfit, blurred outdoor background, relaxed smile, sharp focus, 4K.' },
      { label: 'Beauty Close-Up', text: 'Create a beauty close-up using nano banana. Ring light, flawless skin texture, glossy lips, sharp eye detail, soft backdrop, macro lens look, 4K.' },
      { label: 'Creative Edit', text: 'Apply a creative nano banana edit to [describe your photo]. Stylized color grade, dramatic lighting, artistic background, sharp subject, editorial finish, 4K.' },
      { label: 'Old Photo Restore', text: 'Restore and enhance an old photo using nano banana. Sharpen details, reduce noise, improve color, upscale resolution, keep original composition, 4K output.' },
      { label: 'Free Style Headshot', text: 'Generate a free-style headshot using nano banana. Subject: [describe person]. Choose: [studio / outdoor / golden hour] lighting, [clean / blurred / scenic] background, natural skin, 4K.' },
    ],
    variations: [
      { label: 'Headshot variation', text: 'Generate a professional headshot with nano banana. Subject: [describe person]. [studio / outdoor] lighting, [clean / blurred] background, natural skin, 4K.' },
      { label: 'Upscale variation', text: 'Upscale [describe your photo] with nano banana upscaler. Sharpen, enhance detail, improve resolution to 4K, keep face natural.' },
      { label: 'Style transfer variation', text: 'Apply nano banana style transfer to [describe your photo]. Transfer [describe style] while keeping the subject natural. Match color, lighting, texture.' },
      { label: 'Editing variation', text: 'Retouch [describe your photo] with nano banana editing. Smooth skin, enhance eyes, balance light, improve color, keep face recognizable, 4K.' },
      { label: 'Free variation', text: 'Generate a free-style nano banana headshot. Subject: [describe person]. [lighting], [background], natural skin, 4K.' },
    ],
    tips: [
      ...sharedTips,
      'For nano banana headshots, always specify the background and lighting — the model defaults to plain studio setups if not instructed.',
      'When using the nano banana upscaler, add "keep face natural and recognizable" to prevent the model from altering facial features during upscaling.',
    ],
    bestPractices: sharedBestPractices,
    commonMistakes: sharedMistakes,
    faqs: [
      ...sharedFaqs,
      {
        question: 'Is nano banana free to use?',
        answer:
          'Nano banana is available through several AI platforms. Some offer free tiers with limited generations, while others require a subscription. Check the platform you are using for current pricing.',
      },
      {
        question: 'How does nano banana compare to Gemini for photo editing?',
        answer:
          'Nano banana excels at headshots and upscaling, while Gemini is better at understanding natural-language instructions and creative edits. Many creators use both — nano banana for headshots and Gemini for style edits.',
      },
      {
        question: 'Can I use nano banana prompts with Gemini?',
        answer:
          'Some prompts work across both, but nano banana-specific terms (like "nano banana upscaler") may not be understood by Gemini. For Gemini, use the gemini ai photo prompt structure from our guide page.',
      },
    ],
    related: ['gemini-ai-photo-prompt-copy-paste', 'professional-headshot-prompts', 'gemini-ai-photoshoot-prompt', 'photo-enhancer-restoration-upscale-prompts', 'image-to-prompt-generator', 'gemini-ai-photo-prompt-trending'],
    imageAlt: 'Nano Banana AI prompt — professional headshot result example',
    previewAlts: [
      'Nano Banana AI prompt — upscaler enhancement example',
      'Nano Banana AI prompt — style transfer example',
      'Nano Banana AI prompt — beauty close-up example',
    ],
    pageType: 'prompt',
  },
  {
    slug: 'gemini-photo-editing-guide',
    path: '/gemini-photo-editing-guide',
    category: 'professional',
    title: 'Gemini Photo Editing Guide',
    metaTitle: 'Gemini Prompt for Photo Editing — 10 AI Photo Editing Prompts',
    metaDescription:
      'Complete Gemini photo editing guide with 10 prompts. Face enhancement, background replacement, lighting, sharpness, quality improvement, and old photo restoration prompts.',
    h1: 'Gemini Prompt for Photo Editing — Complete Guide',
    intro:
      'Gemini AI photo editing prompts let you transform photos with natural-language instructions — no software, no layers, no manual retouching. This guide covers the gemini prompt for photo editing across face enhancement, background replacement, lighting correction, sharpness improvement, quality enhancement, and old photo restoration. The gemini photo editing prompts below are tested and ready to copy. Whether you need to fix bad lighting, sharpen a blurry photo, replace a background, or restore an old family picture, the google gemini photo editing prompt collection here handles the most common editing tasks. Each prompt is designed to produce a natural, realistic result — not an over-processed AI look.',
    primaryKeyword: 'gemini prompt for photo editing',
    keywords: ['gemini prompt for photo editing', 'gemini photo editing prompts', 'google gemini photo editing prompt', 'gemini ai photo editing prompts', 'ai photo editing prompt', 'edit images with ai prompts', 'face enhancement prompt gemini', 'background replacement prompt gemini', 'lighting correction prompt', 'sharpness prompt gemini', 'quality improvement prompt', 'old photo restoration prompt'],
    prompt:
      'Edit [describe your photo]: enhance face detail, improve lighting balance, sharpen focus, boost color vibrancy subtly, clean up background, keep face natural and recognizable. Output at 4K.',
    prompts: [
      { label: 'All-In-One Edit', text: 'Edit [describe your photo]: enhance face detail, improve lighting balance, sharpen focus, boost color vibrancy subtly, clean up background, keep face natural and recognizable. Output at 4K.' },
      { label: 'Face Enhancement', text: 'Enhance the face in [describe your photo]. Natural skin smoothing, sharpen eye detail, balance skin tone, enhance facial features subtly, keep face recognizable, 4K.' },
      { label: 'Background Replacement', text: 'Replace the background in [describe your photo] with [describe new background]. Keep the subject sharp, match lighting to the new background, blend edges naturally, 4K.' },
      { label: 'Lighting Fix', text: 'Fix the lighting in [describe your photo]. Balance exposure, reduce harsh shadows, add soft fill light, match color temperature to daylight, keep subject sharp, 4K.' },
      { label: 'Sharpen Blur', text: 'Sharpen and deblur [describe your photo]. Enhance edge detail, improve focus clarity, reduce softness, keep face natural, output at 4K.' },
      { label: 'Quality Improve', text: 'Improve the overall quality of [describe your photo]. Enhance detail, reduce noise, improve color depth, sharpen focus, upscale resolution to 4K, keep face recognizable.' },
      { label: 'Old Photo Restore', text: 'Restore this old photo [describe your photo]. Reduce noise, repair scratches, sharpen detail, improve color, upscale resolution, keep original composition, 4K.' },
      { label: 'Color Correction', text: 'Color correct [describe your photo]. Balance white balance, improve saturation subtly, match color temperature to natural daylight, keep skin tones natural, 4K.' },
      { label: 'Skin Retouch', text: 'Retouch skin in [describe your photo]. Natural smoothing, reduce blemishes, keep skin texture, enhance eye detail, keep face recognizable, 4K.' },
      { label: 'Background Blur', text: 'Blur the background in [describe your photo] for a portrait look. Shallow depth of field, natural bokeh, keep subject sharp, match lighting, 4K.' },
    ],
    variations: [
      { label: 'Quick edit', text: 'Edit [describe your photo]: improve lighting, sharpen focus, enhance color, keep face natural, 4K.' },
      { label: 'Full edit', text: 'Edit [describe your photo]: face enhancement, lighting fix, background cleanup, color correction, sharpen, quality improvement, keep face recognizable, 4K.' },
      { label: 'Face only', text: 'Enhance the face in [describe your photo]. Natural skin smoothing, sharpen eyes, balance skin tone, keep face recognizable, 4K.' },
      { label: 'Background only', text: 'Replace the background in [describe your photo] with [describe new background]. Match lighting, blend edges, keep subject sharp, 4K.' },
      { label: 'Restore only', text: 'Restore [describe your photo]. Reduce noise, repair scratches, sharpen, improve color, upscale, keep original composition, 4K.' },
    ],
    tips: [
      ...sharedTips,
      'For editing prompts, always specify what to keep unchanged — "keep face natural and recognizable" prevents unwanted facial alterations.',
      'When replacing backgrounds, describe the new background in detail and add "match lighting to new background" for a natural blend.',
    ],
    bestPractices: sharedBestPractices,
    commonMistakes: sharedMistakes,
    faqs: [
      ...sharedFaqs,
      {
        question: 'Can Gemini edit an existing photo?',
        answer:
          'Yes. Upload your photo to Google Gemini and paste an editing prompt. Gemini will analyze the photo and apply the edits described in the prompt.',
      },
      {
        question: 'What is the best gemini prompt for photo editing?',
        answer:
          'The All-In-One Edit prompt at the top of this page is the best starting point. It covers the most common edits — face, lighting, color, sharpness, and background — in a single prompt.',
      },
      {
        question: 'Can Gemini restore old photos?',
        answer:
          'Yes. The Old Photo Restore prompt above is designed for restoration. It reduces noise, repairs scratches, sharpens detail, and improves color while keeping the original composition.',
      },
    ],
    related: ['gemini-ai-photo-prompt-copy-paste', 'photo-enhancer-restoration-upscale-prompts', 'how-to-write-gemini-ai-photo-prompt', 'gemini-ai-photoshoot-prompt', 'professional-headshot-prompts', 'image-to-prompt-generator'],
    imageAlt: 'Gemini photo editing guide — before and after editing example',
    previewAlts: [
      'Gemini photo editing — face enhancement example',
      'Gemini photo editing — background replacement example',
      'Gemini photo editing — old photo restoration example',
    ],
    pageType: 'prompt',
  },
  {
    slug: 'professional-headshot-prompts',
    path: '/professional-headshot-prompts',
    category: 'professional',
    title: 'Professional Headshot Prompts',
    metaTitle: 'Professional Headshot Prompts — 10 AI Headshot Prompts for LinkedIn',
    metaDescription:
      '10 professional headshot prompts for LinkedIn, business, corporate, and resume use. Copy-paste AI prompts with lighting tips, clothing tips, and FAQs.',
    h1: 'Professional Headshot Prompts — 10 AI Prompts for LinkedIn & Business',
    intro:
      'A professional headshot is the first thing people see on LinkedIn, company websites, and resumes. These professional headshot prompts are designed to produce clean, well-lit, corporate-grade portraits using AI. The collection covers LinkedIn, business, corporate, office, blazer, resume, passport, and studio styles. Each prompt specifies a lighting setup, background, and expression that matches professional standards. Whether you need a LinkedIn profile photo, a corporate team headshot, or a resume portrait, you will find a prompt here that produces a polished, professional result. The prompts work with both Gemini AI and nano banana headshots models.',
    primaryKeyword: 'professional headshot prompt',
    keywords: ['professional headshot prompt', 'linkedin headshot prompt', 'business headshot prompt', 'corporate headshot prompt', 'office headshot prompt', 'blazer headshot prompt', 'resume headshot prompt', 'passport headshot prompt', 'studio headshot prompt', 'ai headshot prompt', 'professional photo prompt'],
    prompt:
      'Create a professional headshot from [describe your photo]. Softbox lighting, clean neutral or soft blue background, blazer, confident expression, sharp eye focus, natural skin retouching, 4K detail.',
    prompts: [
      { label: 'LinkedIn Professional', text: 'Create a LinkedIn professional headshot from [describe your photo]. Soft blue gradient background, blazer, confident smile, softbox lighting, sharp eyes, natural skin, 4K.' },
      { label: 'Corporate Executive', text: 'Generate a corporate executive headshot from [describe your photo]. Navy suit, white shirt, dark gradient background, high-contrast studio lighting, confident posture, sharp focus, 4K.' },
      { label: 'Business Casual', text: 'Create a business casual headshot from [describe your photo]. Smart-casual shirt, soft neutral background, natural daylight, relaxed confident expression, sharp eyes, 4K.' },
      { label: 'Office Environment', text: 'Generate an office environment headshot from [describe your photo]. Blurred office background, window light, formal shirt, professional expression, shallow depth of field, 4K.' },
      { label: 'Blazer Studio', text: 'Create a blazer studio headshot from [describe your photo]. Blazer, white shirt, seamless gray backdrop, softbox lighting, confident smile, sharp eye focus, 4K.' },
      { label: 'Resume Portrait', text: 'Generate a resume portrait from [describe your photo]. Clean white or light-gray background, formal shirt, neutral expression, even lighting, sharp focus, professional grade, 4K.' },
      { label: 'Passport Style', text: 'Create a passport-style professional headshot from [describe your photo]. Solid white background, front-facing, neutral expression, formal attire, even lighting, no shadows, 300 DPI.' },
      { label: 'Studio Classic', text: 'Generate a classic studio headshot from [describe your photo]. Three-point lighting, seamless dark gray backdrop, formal outfit, confident expression, sharp focus, 4K.' },
      { label: 'Creative Professional', text: 'Create a creative professional headshot from [describe your photo]. Soft colored background, stylish blazer, natural expression, soft directional light, sharp eyes, 4K.' },
      { label: 'Team Uniform', text: 'Generate a team headshot from [describe your photo]. Matching outfit style, clean neutral background, consistent lighting, professional expression, sharp focus, 4K.' },
    ],
    variations: [
      { label: 'LinkedIn style', text: 'Create a LinkedIn headshot from [describe your photo]. Soft blue gradient background, blazer, confident smile, softbox lighting, sharp eyes, 4K.' },
      { label: 'Corporate style', text: 'Generate a corporate headshot from [describe your photo]. Navy suit, dark gradient background, studio lighting, confident posture, sharp focus, 4K.' },
      { label: 'Casual style', text: 'Create a business casual headshot from [describe your photo]. Smart-casual shirt, soft neutral background, natural daylight, relaxed expression, sharp eyes, 4K.' },
      { label: 'Studio style', text: 'Generate a studio headshot from [describe your photo]. Three-point lighting, seamless backdrop, formal outfit, confident expression, sharp focus, 4K.' },
      { label: 'Passport style', text: 'Create a passport-style headshot from [describe your photo]. Solid white background, front-facing, neutral expression, even lighting, 300 DPI.' },
    ],
    tips: [
      ...sharedTips,
      'For LinkedIn, use a soft blue or neutral background — it looks professional and works well with LinkedIn\'s interface.',
      'Wear a blazer or structured jacket in the photo — it reads as professional even in a casual headshot.',
    ],
    bestPractices: [
      ...sharedBestPractices,
      'Keep the expression confident but natural — avoid forced smiles for professional headshots.',
      'Use softbox or diffused lighting for professional headshots — hard light creates unflattering shadows.',
    ],
    commonMistakes: sharedMistakes,
    faqs: [
      ...sharedFaqs,
      {
        question: 'What background is best for a professional headshot?',
        answer:
          'Soft blue, neutral gray, or clean white are the safest choices. They look professional, work across platforms, and do not distract from the face.',
      },
      {
        question: 'Can I use these prompts for a LinkedIn profile photo?',
        answer:
          'Yes. The LinkedIn Professional prompt above is specifically designed for LinkedIn profile photos. It produces a clean, well-lit headshot with a soft blue background.',
      },
      {
        question: 'What should I wear for a professional headshot?',
        answer:
          'A blazer, structured jacket, or collared shirt works best. Solid colors are safer than patterns. Avoid white-only shirts without a jacket — they can look too casual.',
      },
    ],
    related: ['gemini-ai-photo-prompt-2x2-formal-blue-background', 'gemini-ai-photoshoot-prompt', 'gemini-ai-photo-prompt-copy-paste', 'nano-banana-ai-prompts', 'gemini-photo-editing-guide', 'how-to-write-gemini-ai-photo-prompt'],
    imageAlt: 'Professional headshot prompt — LinkedIn corporate result example',
    previewAlts: [
      'Professional headshot prompt — corporate executive example',
      'Professional headshot prompt — business casual example',
      'Professional headshot prompt — studio classic example',
    ],
    pageType: 'prompt',
  },
  {
    slug: 'gemini-ai-birthday-prompt',
    path: '/gemini-ai-birthday-prompt',
    category: 'festivals',
    title: 'Gemini AI Birthday Prompt',
    metaTitle: 'Gemini AI Birthday Prompt — 10 AI Photo Prompts for Birthdays',
    metaDescription:
      'Gemini AI birthday prompt collection with 10 copy-paste prompts. Birthday collage, luxury birthday, cake, balloons, family birthday, golden birthday, and aesthetic birthday styles.',
    h1: 'Gemini AI Birthday Prompt — 10 AI Photo Prompts for Birthdays',
    intro:
      'Birthday AI photo prompts add festive energy, warm lighting, and celebration mood to your photos. These Gemini birthday prompt prompts cover birthday collage, luxury birthday, cake, balloons, family birthday, golden birthday, and aesthetic birthday styles. Each prompt is designed to produce a warm, celebratory result that still looks realistic — not like a digital greeting card. Whether you want a golden luxury birthday edit, a cozy family celebration shot, or an aesthetic cake-and-balloons composition, you will find a prompt here that produces a polished, festive result.',
    primaryKeyword: 'gemini ai birthday prompt',
    keywords: ['gemini ai birthday prompt', 'birthday photo prompt', 'birthday ai photo prompt', 'gemini birthday prompt', 'birthday collage prompt', 'luxury birthday prompt', 'cake birthday prompt', 'balloons birthday prompt', 'family birthday prompt', 'golden birthday prompt', 'aesthetic birthday prompt', 'birthday photo edit gemini'],
    prompt:
      'Transform [describe your photo] into a birthday-themed edit. Warm festive lighting, birthday cake, balloons, confetti, soft golden glow, joyful expression. Subject stays sharp and natural, 4K detail.',
    prompts: [
      { label: 'Festive Birthday', text: 'Transform [describe your photo] into a birthday-themed edit. Warm festive lighting, birthday cake, balloons, confetti, soft golden glow, joyful expression. Subject stays sharp and natural, 4K.' },
      { label: 'Luxury Golden', text: 'Create a luxury golden birthday edit from [describe your photo]. Gold balloon backdrop, elegant cake, warm gold lighting, glamorous outfit, sharp subject, 4K.' },
      { label: 'Cake Celebration', text: 'Edit [describe your photo] into a cake celebration scene. Birthday cake with candles, warm glow, soft bokeh, joyful expression, subject sharp, 4K.' },
      { label: 'Balloon Party', text: 'Transform [describe your photo] into a balloon party birthday edit. Colorful balloons, confetti, bright festive lighting, candid joy, sharp subject, 4K.' },
      { label: 'Family Birthday', text: 'Create a family birthday scene from [describe your photo]. Warm indoor lighting, cake, family gathering, all faces sharp and natural, joyful mood, 4K.' },
      { label: 'Aesthetic Birthday', text: 'Edit [describe your photo] into an aesthetic birthday portrait. Pastel balloons, minimal cake, soft natural light, elegant outfit, sharp subject, 4K.' },
      { label: 'Birthday Collage', text: 'Create a birthday collage from [describe your photo]. Multiple festive frames, cake, balloons, confetti, warm tones, each frame sharp, scrapbook layout, 4K.' },
      { label: 'Candlelight Warm', text: 'Transform [describe your photo] into a candlelight birthday edit. Warm candle glow, dark background, cake with lit candles, soft expression, sharp subject, 4K.' },
      { label: 'Outdoor Celebration', text: 'Edit [describe your photo] into an outdoor birthday celebration. Golden-hour light, picnic setting, balloons, candid joy, blurred scenic background, sharp subject, 4K.' },
      { label: 'Surprise Joy', text: 'Create a surprise birthday edit from [describe your photo]. Confetti explosion, surprised joyful expression, festive lighting, balloons, sharp subject, 4K.' },
    ],
    variations: [
      { label: 'Festive', text: 'Transform [describe your photo] into a birthday-themed edit. Warm festive lighting, cake, balloons, confetti, golden glow, joyful expression, sharp subject, 4K.' },
      { label: 'Luxury', text: 'Create a luxury golden birthday edit from [describe your photo]. Gold balloons, elegant cake, warm gold lighting, glamorous outfit, sharp subject, 4K.' },
      { label: 'Aesthetic', text: 'Edit [describe your photo] into an aesthetic birthday portrait. Pastel balloons, minimal cake, soft natural light, elegant outfit, sharp subject, 4K.' },
      { label: 'Family', text: 'Create a family birthday scene from [describe your photo]. Warm indoor lighting, cake, family gathering, all faces sharp, joyful mood, 4K.' },
      { label: 'Collage', text: 'Create a birthday collage from [describe your photo]. Multiple festive frames, cake, balloons, confetti, warm tones, scrapbook layout, 4K.' },
    ],
    tips: sharedTips,
    bestPractices: sharedBestPractices,
    commonMistakes: sharedMistakes,
    faqs: [
      ...sharedFaqs,
      {
        question: 'How do I make a birthday edit look festive but not fake?',
        answer:
          'Use real lighting references (candle glow, warm indoor light, golden-hour bokeh) and keep the subject sharp. Avoid adding too many decorative elements at once.',
      },
      {
        question: 'Which birthday prompt is best for social media?',
        answer:
          'The Luxury Golden and Aesthetic Birthday prompts are the most popular for Instagram. They produce elegant, shareable results.',
      },
      {
        question: 'Can I add a specific age or number to the birthday edit?',
        answer:
          'Yes. Add "with a number [age] candle on the cake" or "gold balloon showing the number [age]" to the prompt for a personalized birthday edit.',
      },
    ],
    related: ['gemini-ai-christmas-photo-prompt', 'gemini-ai-halloween-photo-prompt', 'gemini-ai-photo-prompt-copy-paste', 'gemini-ai-photo-prompt-trending', 'gemini-couple-photo-prompt', 'gemini-girl-photo-prompt'],
    imageAlt: 'Gemini birthday prompt — festive celebration with cake and balloons example',
    previewAlts: [
      'Gemini birthday prompt — luxury golden birthday example',
      'Gemini birthday prompt — family birthday scene example',
      'Gemini birthday prompt — aesthetic birthday portrait example',
    ],
    pageType: 'prompt',
  },
  {
    slug: 'photo-enhancer-restoration-upscale-prompts',
    path: '/photo-enhancer-restoration-upscale-prompts',
    category: 'professional',
    title: 'Photo Enhancer, Restoration & Upscale Prompts',
    metaTitle: 'Gemini Upscale Image — 10 Photo Enhancer & Restoration Prompts',
    metaDescription:
      'Gemini upscale image prompts for photo enhancement, restoration, sharpening, and quality improvement. 10 copy-paste prompts plus old photo restoration and AI photo enhancer prompts.',
    h1: 'Gemini Upscale Image — Photo Enhancer & Restoration Prompts',
    intro:
      'Photo enhancement, restoration, and upscaling are the most practical uses of AI photo editing. These prompts cover the gemini upscale image workflow, ChatGPT photo enhancer alternatives, old photo restoration, sharpening, and quality improvement. Each prompt is designed to improve a photo without changing its core content — faces stay recognizable, composition stays intact, and the result looks like a higher-quality version of the original. Whether you need to upscale a low-resolution image, restore a damaged old photo, or just improve the overall quality of a snapshot, you will find a prompt here that does the job.',
    primaryKeyword: 'gemini upscale image',
    keywords: ['gemini upscale image', 'chatgpt photo enhancer', 'photo restoration prompt', 'sharpen photo prompt', 'upscale photo prompt', 'improve quality prompt', 'old photo restoration prompt', 'ai photo enhancer prompt', 'photo restoration ai prompt', 'image quality improvement prompt'],
    prompt:
      'Upscale and enhance [describe your photo]. Sharpen details, reduce noise, improve color depth, increase resolution to 4K, keep face natural and recognizable, preserve original composition, 4K output.',
    prompts: [
      { label: 'Upscale 4K', text: 'Upscale and enhance [describe your photo]. Sharpen details, reduce noise, improve color depth, increase resolution to 4K, keep face natural and recognizable, preserve original composition, 4K output.' },
      { label: 'Old Photo Restore', text: 'Restore this old photo [describe your photo]. Reduce noise, repair scratches and tears, sharpen detail, improve color, upscale resolution, keep original composition, 4K output.' },
      { label: 'Sharpen Blur', text: 'Sharpen and deblur [describe your photo]. Enhance edge detail, improve focus clarity, reduce softness, keep face natural, output at 4K.' },
      { label: 'Quality Improve', text: 'Improve the overall quality of [describe your photo]. Enhance detail, reduce noise, improve color depth, sharpen focus, upscale resolution to 4K, keep face recognizable.' },
      { label: 'Noise Reduce', text: 'Reduce noise in [describe your photo]. Clean up grain, smooth skin texture, preserve edge detail, improve color, keep face natural, 4K output.' },
      { label: 'Color Restore', text: 'Restore color in [describe your photo]. Fix faded colors, balance white balance, improve saturation, match natural skin tones, keep composition, 4K.' },
      { label: 'Face Enhance', text: 'Enhance the face in [describe your photo]. Natural skin smoothing, sharpen eye detail, balance skin tone, keep face recognizable, 4K output.' },
      { label: 'Low Light Fix', text: 'Fix low-light photo [describe your photo]. Brighten exposure, reduce noise, balance color temperature, sharpen detail, keep face natural, 4K output.' },
      { label: 'Resolution Boost', text: 'Boost the resolution of [describe your photo]. Upscale to 4K, sharpen details, improve texture, reduce artifacts, keep face recognizable, preserve composition.' },
      { label: 'Full Restore', text: 'Fully restore [describe your photo]. Repair damage, reduce noise, sharpen, improve color, upscale to 4K, keep face and composition natural, output at 4K.' },
    ],
    variations: [
      { label: 'Upscale only', text: 'Upscale [describe your photo] to 4K. Sharpen details, improve texture, keep face recognizable, preserve composition.' },
      { label: 'Restore only', text: 'Restore [describe your photo]. Reduce noise, repair scratches, sharpen, improve color, keep original composition, 4K.' },
      { label: 'Sharpen only', text: 'Sharpen [describe your photo]. Enhance edge detail, improve focus clarity, reduce softness, keep face natural, 4K.' },
      { label: 'Enhance only', text: 'Enhance [describe your photo]. Improve detail, reduce noise, boost color, sharpen focus, keep face recognizable, 4K.' },
      { label: 'Full restore', text: 'Fully restore [describe your photo]. Repair damage, reduce noise, sharpen, improve color, upscale to 4K, keep face and composition natural.' },
    ],
    tips: [
      ...sharedTips,
      'For upscaling, always add "keep face natural and recognizable" to prevent the AI from altering facial features during the process.',
      'For old photo restoration, describe the type of damage (scratches, fading, tears) so the AI knows what to repair.',
    ],
    bestPractices: sharedBestPractices,
    commonMistakes: sharedMistakes,
    faqs: [
      ...sharedFaqs,
      {
        question: 'Can Gemini upscale a low-resolution photo?',
        answer:
          'Yes. The Upscale 4K prompt above is designed for this. It increases resolution, sharpens details, and reduces noise while keeping the face and composition natural.',
      },
      {
        question: 'How does this compare to ChatGPT photo enhancer?',
        answer:
          'Both can enhance photos. Gemini tends to be better at understanding detailed editing instructions, while ChatGPT is more conversational. The prompts here are optimized for Gemini.',
      },
      {
        question: 'Can Gemini restore very old or damaged photos?',
        answer:
          'Yes. The Old Photo Restore and Full Restore prompts are designed for damaged photos. Describe the type of damage in the prompt for best results.',
      },
    ],
    related: ['gemini-photo-editing-guide', 'gemini-ai-photo-prompt-copy-paste', 'professional-headshot-prompts', 'image-to-prompt-generator', 'how-to-write-gemini-ai-photo-prompt', 'nano-banana-ai-prompts'],
    imageAlt: 'Gemini upscale image — before and after photo enhancement example',
    previewAlts: [
      'Photo enhancer — old photo restoration example',
      'Photo enhancer — sharpen and deblur example',
      'Photo enhancer — low light fix example',
    ],
    pageType: 'prompt',
  },
  {
    slug: 'gemini-art-anime-style-prompts',
    path: '/gemini-art-anime-style-prompts',
    category: 'trending',
    title: 'Gemini Art Anime Style Prompts',
    metaTitle: 'Gemini Anime Prompt — 10 AI Art Style Prompts (Ghibli, Watercolor, Comic)',
    metaDescription:
      'Gemini anime prompt collection with 10 copy-paste prompts. Ghibli style, poster, polaroid, dark art, illustration, watercolor, and comic style AI art prompts.',
    h1: 'Gemini Anime Prompt — 10 AI Art Style Prompts',
    intro:
      'Anime and illustration-style prompts open up a completely different creative direction — from Ghibli-inspired soft landscapes to bold comic-style portraits. This gemini anime prompt collection covers Ghibli, poster, polaroid, dark art, illustration, watercolor, and comic styles. Each prompt is designed to transform a photo into a stylized artwork while keeping the subject recognizable. Whether you want a soft Ghibli aesthetic, a dramatic dark art portrait, a watercolor illustration, or a comic-book panel, you will find a prompt here that produces a polished, artistic result.',
    primaryKeyword: 'gemini anime prompt',
    keywords: ['gemini anime prompt', 'ghibli prompt gemini', 'anime art prompt gemini', 'illustration prompt gemini', 'watercolor prompt gemini', 'comic style prompt gemini', 'dark art prompt gemini', 'anime poster prompt', 'anime polaroid prompt', 'gemini art style prompt'],
    prompt:
      'Transform [describe your photo] into an anime-style illustration. Soft cel shading, vibrant colors, detailed eyes, clean line art, stylized hair, anime background. Keep the subject recognizable, 4K detail.',
    prompts: [
      { label: 'Anime Portrait', text: 'Transform [describe your photo] into an anime-style portrait. Soft cel shading, vibrant colors, detailed eyes, clean line art, stylized hair, simple background. Keep the subject recognizable, 4K.' },
      { label: 'Ghibli Style', text: 'Edit [describe your photo] into a Studio Ghibli-style illustration. Soft watercolor backgrounds, warm natural light, hand-painted texture, gentle expression, detailed scenery, 4K.' },
      { label: 'Anime Poster', text: 'Create an anime poster from [describe your photo]. Bold colors, dramatic lighting, dynamic pose, stylized effects, text-free poster layout, sharp detail, 4K.' },
      { label: 'Anime Polaroid', text: 'Edit [describe your photo] into an anime polaroid. Anime-style illustration, soft flash effect, faded color, white border, candid pose, 35mm look, 4K.' },
      { label: 'Dark Art Anime', text: 'Transform [describe your photo] into a dark art anime style. Moody shadows, desaturated palette, dramatic lighting, stylized gothic elements, sharp subject, 4K.' },
      { label: 'Watercolor Illustration', text: 'Edit [describe your photo] into a watercolor illustration style. Soft bleeding colors, paper texture, gentle brush strokes, natural composition, 4K detail.' },
      { label: 'Comic Book Style', text: 'Transform [describe your photo] into a comic book style illustration. Bold ink lines, halftone shading, vibrant flat colors, dynamic panel framing, speech-bubble-free, 4K.' },
      { label: 'Chibi Cute', text: 'Edit [describe your photo] into a chibi anime style. Small body, large head, big expressive eyes, soft pastel colors, cute expression, simple background, 4K.' },
      { label: 'Anime Cinematic', text: 'Transform [describe your photo] into an anime cinematic still. Dramatic lighting, detailed background, film-style composition, cel-shaded subject, lens flare, 4K.' },
      { label: 'Manga Panel', text: 'Edit [describe your photo] into a manga panel style. Black and white ink, screentone shading, dynamic line work, dramatic angle, text-free, 4K detail.' },
    ],
    variations: [
      { label: 'Anime portrait', text: 'Transform [describe your photo] into an anime-style portrait. Soft cel shading, vibrant colors, detailed eyes, clean line art, stylized hair, simple background.' },
      { label: 'Ghibli style', text: 'Edit [describe your photo] into a Studio Ghibli-style illustration. Soft watercolor backgrounds, warm natural light, hand-painted texture, gentle expression, detailed scenery.' },
      { label: 'Comic style', text: 'Transform [describe your photo] into a comic book style illustration. Bold ink lines, halftone shading, vibrant flat colors, dynamic panel framing.' },
      { label: 'Watercolor', text: 'Edit [describe your photo] into a watercolor illustration style. Soft bleeding colors, paper texture, gentle brush strokes, natural composition.' },
      { label: 'Dark art', text: 'Transform [describe your photo] into a dark art anime style. Moody shadows, desaturated palette, dramatic lighting, stylized gothic elements, sharp subject.' },
    ],
    tips: [
      ...sharedTips,
      'For anime prompts, specify the art style precisely — "cel shading", "watercolor", "ink lines" — to control the visual technique.',
      'Add "keep the subject recognizable" to anime prompts so the stylized result still looks like the original person.',
    ],
    bestPractices: sharedBestPractices,
    commonMistakes: sharedMistakes,
    faqs: [
      ...sharedFaqs,
      {
        question: 'Can Gemini generate anime-style art from a photo?',
        answer:
          'Yes. Upload your photo and paste an anime-style prompt. Gemini will transform the photo into a stylized illustration while keeping the subject recognizable.',
      },
      {
        question: 'Which anime style is the most popular?',
        answer:
          'The Ghibli Style and Anime Portrait prompts are the most popular. They produce soft, aesthetically pleasing results that work well on social media.',
      },
      {
        question: 'Can I use these prompts for profile pictures?',
        answer:
          'Yes. The Anime Portrait and Chibi Cute prompts are especially popular for profile pictures. They produce clean, stylized results that stand out.',
      },
    ],
    related: ['gemini-ai-photo-prompt-trending', 'gemini-ai-photo-prompt-copy-paste', 'gemini-ai-retro-style-prompt', 'gemini-ai-polaroid-prompt', 'image-to-prompt-generator', 'how-to-write-gemini-ai-photo-prompt'],
    imageAlt: 'Gemini anime prompt — anime-style portrait illustration example',
    previewAlts: [
      'Gemini anime prompt — Ghibli style illustration example',
      'Gemini anime prompt — comic book style example',
      'Gemini anime prompt — watercolor illustration example',
    ],
    pageType: 'prompt',
  },
];
