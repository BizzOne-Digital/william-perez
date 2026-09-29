# District One Motion

PRD Addendum — Premium Motion & Interactive Components

38. Premium Hero Motion System

The website should include a premium, modern animated hero section designed to make a strong first impression while maintaining the campaign's warm, approachable, trustworthy visual identity.

Animations must feel intentional and refined rather than excessive.

Hero Animation Components

38.1 Animated Text Reveal

The primary campaign headline:

Putting District One First

should use a subtle text/line reveal animation when the page loads.

Recommended behavior:

Reveal by line or word

Smooth upward movement

Slight opacity transition

Short duration

No excessive bouncing

Animation should run once on initial load

The headline should remain readable and accessible.

38.2 Candidate Image Reveal

The candidate's hero image should enter using a premium reveal effect.

Possible implementation:

Clip-path reveal

Mask reveal

Subtle scale from approximately 1.03 to 1

Opacity transition

The effect should feel editorial and cinematic.

Avoid aggressive zooming or spinning animations.

38.3 Interactive Spotlight

The hero background should optionally include a subtle mouse-following spotlight.

Behavior:

Soft light follows the cursor

Use low opacity

Navy background with subtle gold/neutral lighting

Movement should be smooth

Spotlight must not interfere with text readability

On touch devices, this effect should either be disabled or converted into a static subtle glow.

38.4 Animated Gold Accent Line

A thin gold decorative line should animate into position when the hero loads.

Possible behavior:

───────────────


The line can:

Draw from left to right

Fade in

Slightly expand

The animation should reinforce the Navy + Gold brand identity.

38.5 Magnetic CTA Button

The primary CTA can use a subtle magnetic interaction.

Example:

MEET WILLIAM →

Behavior:

Button gently follows the cursor when the pointer is nearby

Movement should be limited

Return smoothly to its original position

Must remain easy to click

Recommended movement should remain subtle rather than exaggerated.

38.6 Hero Parallax

The candidate image may use a very subtle parallax effect.

Requirements:

Small movement range

Smooth interpolation

No excessive movement

Disable or reduce on mobile devices

Respect reduced-motion preferences

The effect should provide depth without distracting from the campaign message.

39. Animated Campaign Marquee

A horizontal campaign marquee may be placed underneath the hero.

Example:

DISTRICT ONE • COMMUNITY • LEADERSHIP • SERVICE • FUTURE

Behavior

Slow continuous horizontal movement

Seamless loop

Navy/Gold visual treatment

Thin border or accent line

Low visual weight

The marquee should act as a campaign-branding element rather than a distracting animation.

40. Scroll-Triggered Content Animations

All major content cards and sections should animate into view when they enter the user's viewport.

This applies particularly to:

Campaign priority cards

Service cards

About cards

Feature cards

Information blocks

CTA sections

Supporting content sections

Required Behavior

Cards should initially have:

Slightly reduced opacity

Small vertical offset

Optional subtle scale

When the card enters the viewport:

Fade into full opacity

Move into its final position

Return to normal scale

Example conceptual animation:

Before entering viewport:

opacity: 0
y: 30px
scale: 0.98

↓

When visible:

opacity: 1
y: 0
scale: 1


Staggered Card Animation

When multiple cards appear in the same section, they should enter sequentially.

Example:

Card 1 → 0ms
Card 2 → 100ms
Card 3 → 200ms
Card 4 → 300ms


The stagger should remain short and subtle.

Do not make users wait for content to become visible.

41. Scroll Animation Rules

Animations should trigger when content becomes visible in the viewport rather than requiring the user to reach a specific scroll position.

Recommended approach:

Use viewport/intersection detection

Trigger once by default

Avoid repeatedly replaying animations while scrolling up/down

Use smooth transitions

Avoid blocking interaction

Trigger Threshold

The animation should generally trigger when approximately 15–25% of the component becomes visible.

42. Motion Design Principles

The website should follow these principles:

Do

Use subtle motion

Create visual hierarchy

Guide the user's attention

Use motion to reveal content

Keep interactions responsive

Maintain fast performance

Keep animation durations reasonable

Do Not

Over-animate every element

Use unnecessary 3D effects

Use excessive bouncing

Use large page transitions

Make text difficult to read

Delay important content

Use animations simply because they are available

The website should feel like a premium campaign website, not a technology demonstration.

43. Accessibility — Reduced Motion

All motion must respect the user's system preference for reduced motion.

When:

prefers-reduced-motion: reduce


is enabled:

Disable parallax

Disable cursor-following effects

Remove large movement

Reduce animation duration

Replace complex reveals with simple opacity transitions where appropriate

Keep all content immediately accessible

No important content should depend on animation.

44. Recommended Motion Technology

Motion can be implemented using a lightweight animation solution appropriate for the Next.js + TypeScript stack.

Preferred options include:

Motion

Framer Motion / Motion for React

CSS transitions/animations

Intersection Observer for viewport-triggered animations

Avoid introducing multiple animation libraries for the same purpose.

Use one primary motion system wherever possible.

45. Reusable Animated Components

Create reusable components so animations remain consistent across the website.

Suggested components:

AnimatedText
AnimatedImage
ScrollReveal
ScrollRevealGroup
AnimatedCard
StaggeredCards
MagneticButton
Spotlight
ParallaxImage
AnimatedAccentLine
CampaignMarquee


Each component should have sensible defaults and avoid requiring repetitive animation configuration throughout the application.

46. Animated Card Requirements

Campaign priority/service cards should support scroll-triggered animation.

Example structure:

┌─────────────────────────────┐
│                             │
│        [ ICON ]             │
│                             │
│   Community Development     │
│                             │
│   Short description of      │
│   the campaign priority.    │
│                             │
│              LEARN MORE →   │
│                             │
└─────────────────────────────┘


Entry Animation

When the card enters the viewport:

Card fades in

Card moves upward into position

Content appears naturally

Cards stagger when multiple cards are present

Hover Interaction

Desktop users may receive:

Slight elevation

Subtle border/accent change

Small icon movement

CTA arrow movement

Hover effects should remain subtle.

On touch devices, hover-dependent functionality must not be required.

47. Animation Performance

Animations must be optimized for performance.

Prefer GPU-friendly properties such as:

transform

opacity

Avoid animating expensive layout properties unnecessarily, including:

width

height

top

left

Large box-shadow changes

Animations should not cause noticeable frame drops on normal mobile devices.

48. Hero Final Motion Composition

The recommended hero experience is:

Initial Load

1. Gold accent line draws

↓

2. Candidate image reveals

↓

3. "PUTTING DISTRICT ONE FIRST" reveals

↓

4. Supporting campaign copy appears

↓

5. CTA appears

↓

6. Subtle background spotlight becomes active

During Interaction

Candidate image has subtle parallax

CTA has optional magnetic interaction

Spotlight follows cursor subtly

After Hero

A campaign marquee provides a smooth transition into the rest of the page.

During Scroll

Content sections and cards reveal progressively as they enter the viewport.

49. Overall Motion Goal

The final experience should communicate:

Professional → Modern → Human → Trustworthy → Premium

Motion should enhance the campaign's story rather than compete with it.

The visitor should notice that the website feels polished without immediately thinking:

"This website has a lot of animations."

That distinction is important.

50. Motion Acceptance Criteria

Hero headline has a polished entrance animation

Candidate image has a reveal animation

Gold accent line animates on initial load

Hero supports subtle spotlight interaction

CTA has optional magnetic interaction

Candidate image supports subtle parallax

Campaign marquee works smoothly

Cards animate when entering the viewport

Multiple cards use subtle staggered animation

Card hover interactions are implemented appropriately

Animations do not block content

Animations work correctly on mobile

Touch devices do not depend on hover

prefers-reduced-motion is respected

No noticeable performance degradation

No animation causes horizontal overflow

Production build succeeds

Updated Design Direction

The final website should combine:

Warm & Approachable
+
Navy & Gold Campaign Branding
+
Editorial Layout
+
Premium Motion
+
Subtle Interactive Effects

The result should feel like a professionally designed political campaign site with modern interaction quality, while remaining accessible, fast, trustworthy, and easy to navigate.PRD Addendum — Premium Motion & Interactive Components

38. Premium Hero Motion System

The website should include a premium, modern animated hero section designed to make a strong first impression while maintaining the campaign's warm, approachable, trustworthy visual identity.

Animations must feel intentional and refined rather than excessive.

Hero Animation Components

38.1 Animated Text Reveal

The primary campaign headline:

Putting District One First

should use a subtle text/line reveal animation when the page loads.

Recommended behavior:

Reveal by line or word

Smooth upward movement

Slight opacity transition

Short duration

No excessive bouncing

Animation should run once on initial load

The headline should remain readable and accessible.

38.2 Candidate Image Reveal

The candidate's hero image should enter using a premium reveal effect.

Possible implementation:

Clip-path reveal

Mask reveal

Subtle scale from approximately 1.03 to 1

Opacity transition

The effect should feel editorial and cinematic.

Avoid aggressive zooming or spinning animations.

38.3 Interactive Spotlight

The hero background should optionally include a subtle mouse-following spotlight.

Behavior:

Soft light follows the cursor

Use low opacity

Navy background with subtle gold/neutral lighting

Movement should be smooth

Spotlight must not interfere with text readability

On touch devices, this effect should either be disabled or converted into a static subtle glow.

38.4 Animated Gold Accent Line

A thin gold decorative line should animate into position when the hero loads.

Possible behavior:

───────────────


The line can:

Draw from left to right

Fade in

Slightly expand

The animation should reinforce the Navy + Gold brand identity.

38.5 Magnetic CTA Button

The primary CTA can use a subtle magnetic interaction.

Example:

MEET WILLIAM →

Behavior:

Button gently follows the cursor when the pointer is nearby

Movement should be limited

Return smoothly to its original position

Must remain easy to click

Recommended movement should remain subtle rather than exaggerated.

38.6 Hero Parallax

The candidate image may use a very subtle parallax effect.

Requirements:

Small movement range

Smooth interpolation

No excessive movement

Disable or reduce on mobile devices

Respect reduced-motion preferences

The effect should provide depth without distracting from the campaign message.

39. Animated Campaign Marquee

A horizontal campaign marquee may be placed underneath the hero.

Example:

DISTRICT ONE • COMMUNITY • LEADERSHIP • SERVICE • FUTURE

Behavior

Slow continuous horizontal movement

Seamless loop

Navy/Gold visual treatment

Thin border or accent line

Low visual weight

The marquee should act as a campaign-branding element rather than a distracting animation.

40. Scroll-Triggered Content Animations

All major content cards and sections should animate into view when they enter the user's viewport.

This applies particularly to:

Campaign priority cards

Service cards

About cards

Feature cards

Information blocks

CTA sections

Supporting content sections

Required Behavior

Cards should initially have:

Slightly reduced opacity

Small vertical offset

Optional subtle scale

When the card enters the viewport:

Fade into full opacity

Move into its final position

Return to normal scale

Example conceptual animation:

Before entering viewport:

opacity: 0
y: 30px
scale: 0.98

↓

When visible:

opacity: 1
y: 0
scale: 1


Staggered Card Animation

When multiple cards appear in the same section, they should enter sequentially.

Example:

Card 1 → 0ms
Card 2 → 100ms
Card 3 → 200ms
Card 4 → 300ms


The stagger should remain short and subtle.

Do not make users wait for content to become visible.

41. Scroll Animation Rules

Animations should trigger when content becomes visible in the viewport rather than requiring the user to reach a specific scroll position.

Recommended approach:

Use viewport/intersection detection

Trigger once by default

Avoid repeatedly replaying animations while scrolling up/down

Use smooth transitions

Avoid blocking interaction

Trigger Threshold

The animation should generally trigger when approximately 15–25% of the component becomes visible.

42. Motion Design Principles

The website should follow these principles:

Do

Use subtle motion

Create visual hierarchy

Guide the user's attention

Use motion to reveal content

Keep interactions responsive

Maintain fast performance

Keep animation durations reasonable

Do Not

Over-animate every element

Use unnecessary 3D effects

Use excessive bouncing

Use large page transitions

Make text difficult to read

Delay important content

Use animations simply because they are available

The website should feel like a premium campaign website, not a technology demonstration.

43. Accessibility — Reduced Motion

All motion must respect the user's system preference for reduced motion.

When:

prefers-reduced-motion: reduce


is enabled:

Disable parallax

Disable cursor-following effects

Remove large movement

Reduce animation duration

Replace complex reveals with simple opacity transitions where appropriate

Keep all content immediately accessible

No important content should depend on animation.

44. Recommended Motion Technology

Motion can be implemented using a lightweight animation solution appropriate for the Next.js + TypeScript stack.

Preferred options include:

Motion

Framer Motion / Motion for React

CSS transitions/animations

Intersection Observer for viewport-triggered animations

Avoid introducing multiple animation libraries for the same purpose.

Use one primary motion system wherever possible.

45. Reusable Animated Components

Create reusable components so animations remain consistent across the website.

Suggested components:

AnimatedText
AnimatedImage
ScrollReveal
ScrollRevealGroup
AnimatedCard
StaggeredCards
MagneticButton
Spotlight
ParallaxImage
AnimatedAccentLine
CampaignMarquee


Each component should have sensible defaults and avoid requiring repetitive animation configuration throughout the application.

46. Animated Card Requirements

Campaign priority/service cards should support scroll-triggered animation.

Example structure:

┌─────────────────────────────┐
│                             │
│        [ ICON ]             │
│                             │
│   Community Development     │
│                             │
│   Short description of      │
│   the campaign priority.    │
│                             │
│              LEARN MORE →   │
│                             │
└─────────────────────────────┘


Entry Animation

When the card enters the viewport:

Card fades in

Card moves upward into position

Content appears naturally

Cards stagger when multiple cards are present

Hover Interaction

Desktop users may receive:

Slight elevation

Subtle border/accent change

Small icon movement

CTA arrow movement

Hover effects should remain subtle.

On touch devices, hover-dependent functionality must not be required.

47. Animation Performance

Animations must be optimized for performance.

Prefer GPU-friendly properties such as:

transform

opacity

Avoid animating expensive layout properties unnecessarily, including:

width

height

top

left

Large box-shadow changes

Animations should not cause noticeable frame drops on normal mobile devices.

48. Hero Final Motion Composition

The recommended hero experience is:

Initial Load

1. Gold accent line draws

↓

2. Candidate image reveals

↓

3. "PUTTING DISTRICT ONE FIRST" reveals

↓

4. Supporting campaign copy appears

↓

5. CTA appears

↓

6. Subtle background spotlight becomes active

During Interaction

Candidate image has subtle parallax

CTA has optional magnetic interaction

Spotlight follows cursor subtly

After Hero

A campaign marquee provides a smooth transition into the rest of the page.

During Scroll

Content sections and cards reveal progressively as they enter the viewport.

49. Overall Motion Goal

The final experience should communicate:

Professional → Modern → Human → Trustworthy → Premium

Motion should enhance the campaign's story rather than compete with it.

The visitor should notice that the website feels polished without immediately thinking:

"This website has a lot of animations."

That distinction is important.

50. Motion Acceptance Criteria

Hero headline has a polished entrance animation

Candidate image has a reveal animation

Gold accent line animates on initial load

Hero supports subtle spotlight interaction

CTA has optional magnetic interaction

Candidate image supports subtle parallax

Campaign marquee works smoothly

Cards animate when entering the viewport

Multiple cards use subtle staggered animation

Card hover interactions are implemented appropriately

Animations do not block content

Animations work correctly on mobile

Touch devices do not depend on hover

prefers-reduced-motion is respected

No noticeable performance degradation

No animation causes horizontal overflow

Production build succeeds

Updated Design Direction

The final website should combine:

Warm & Approachable
+
Navy & Gold Campaign Branding
+
Editorial Layout
+
Premium Motion
+
Subtle Interactive Effects

The result should feel like a professionally designed political campaign site with modern interaction quality, while remaining accessible, fast, trustworthy, and easy to navigate.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b984bc7f-7077-4786-bd49-fa3aec985fa6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
