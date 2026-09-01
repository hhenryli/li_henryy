import React from 'react';
import CaseStudy from '../CaseStudy.jsx';

import one from '../../assets/portfolio/design/Fukai/1.jpg';
import two from '../../assets/portfolio/design/Fukai/2.jpg';
import three from '../../assets/portfolio/design/Fukai/3.jpg';
import four from '../../assets/portfolio/design/Fukai/4.jpg';
import five from '../../assets/portfolio/design/Fukai/5.jpg';
import six from '../../assets/portfolio/design/Fukai/6.jpg';
import seven from '../../assets/portfolio/design/Fukai/7.jpg';
import eight from '../../assets/portfolio/design/Fukai/8.jpg';
import nine from '../../assets/portfolio/design/Fukai/9.jpg';
import ten from '../../assets/portfolio/design/Fukai/10.jpg';
import eleven from '../../assets/portfolio/design/Fukai/11.jpg';
import twelve from '../../assets/portfolio/design/Fukai/12.jpg';
import thirteen from '../../assets/portfolio/design/Fukai/13.jpg';

export default function Fukai() {
  return (
    <CaseStudy
      cover={one}
      title="Fukai"
      projectType="Brand Identity"
      backTo="/work"
      meta={{
        role: 'Brand Designer',
        timeline: '4 days',
        team: 'Solo',
        tools: 'Figma, Adobe Illustrator, Photoshop',
      }}
      quickLink={[
        { label: 'Figma File', href: 'https://www.figma.com/design/4T3V9FesBZh4Dh5e0ZaRML/Fukai?node-id=0-1&t=MxqaL1zcjxdG85bi-1' },
        { label: 'View on Behance', href: 'https://www.behance.net/gallery/254812199/Fukai' },
      ]}
      situation={{
        label: 'Context',
        text: "Fukai is a hojicha brand built around one idea: depth of roast. Rather than treating hojicha as a single flavor, Fukai treats it as a range — Ember, Kindle, and Char — each roast level with its own character, given the same specificity coffee gives its beans.",
        text2: "The market was flooded with two well-worn paths: quiet, muted apothecary-style tea branding, and loud, flat-color playfulness that's become its own cliché across new beverage brands. Fukai needed to sit outside both.",
        name: 'What is Fukai?',
        images: [one],
        layout: 'row',
      }}
      task={{
        label: 'Task',
        text: "I was brought on to develop a full identity for a single-product hojicha brand: name, wordmark, color system, packaging, and a roast-level product line. The product should feel bold, handmade, and rooted in the actual language of roasting rather than generic tea-category cues.",
        name: 'The Challenge',
        images: [twelve],
        layout: 'col',
      }}
      actions={[
        {
          name: 'Naming',
          description: "Rather than a literal translation of \"hojicha,\" I built the name from the real Japanese vocabulary for roast depth. \"Fukai\" (深い) means \"deep,\" drawn from fuka-iri (深煎り), which is the actual term for a deep/dark roast. This ties the brand name directly to the product's defining process.",
          images: [four],
          layout: 'row',
        },
        {
          name: 'Wordmark',
          description: "The logo is a bold, energetic hand-drawn script. The letterforms are slightly irregular, with a rough texture that gives the mark a handmade feel. The icon is derived from a houjiki pot, which is tradionally a pot used to roast the tea leaves that make hojicha.",
          images: [three],
          layout: 'row',
        },
        {
          name: 'Visual System',
          description: "Focusing on the roast system, Fukai's visual system strays away from traditional hojicha and tea brands, using more saturated greens and browns to indicate the level of roast. The naming, color weight, and packaging all scale together across the three tiers, giving a single product real range without diluting the brand.",
          images: [seven],
          layout: 'col',
        },
      ]}
      results={[
        {
          label: 'Results',
          name: 'Merch',
          description: "A casual, handmade visual language carries across the brand's merch, from tote bags to caps to stickers",
          images: [nine, six],
          layout: 'col',
        },
        {
          description: "Packaging built around the three-roast system, letting one product read as a full line.",
          name: 'Packaging',
          images: [eight],
          layout: 'row',
        },
        {
          description: "A simple, bold online presence that communicates the brand's identity and product line.",
          name: 'Online Presence',
          images: [ten, eleven],
          layout: 'col',
        },
      ]}
      mockups={[one, five, four, thirteen]}
    />
  );
}