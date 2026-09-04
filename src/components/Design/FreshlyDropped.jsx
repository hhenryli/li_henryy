import React from 'react';
import CaseStudy from '../CaseStudy.jsx';

import cover from '../../assets/portfolio/design/freshlydropped/cover.webp';
import home from '../../assets/portfolio/design/freshlydropped/home.webp';
import filter from '../../assets/portfolio/design/freshlydropped/filter.webp';
import wireframe from '../../assets/portfolio/design/freshlydropped/wireframe.webp';
import favorite from '../../assets/portfolio/design/freshlydropped/favorite.webp';
import shopping from '../../assets/portfolio/design/freshlydropped/shopping.webp';
import about from '../../assets/portfolio/design/freshlydropped/about.webp';
import cart from '../../assets/portfolio/design/freshlydropped/cart.webp';
import designs from '../../assets/portfolio/design/freshlydropped/designs.webp';
import logo from '../../assets/portfolio/design/freshlydropped/logo.webp';

export default function FreshlyDropped() {
  return (
    <CaseStudy
      cover={cover}
      title="Freshly Dropped"
      projectType="UI/UX Design"
      backTo="/work"
      meta={{
        role: 'UI/UX Designer',
        timeline: '1 week',
        team: 'Solo',
        tools: 'Figma, Illustrator',
      }}
      quickLink={{
        label: 'Figma Prototype',
        href: 'https://www.figma.com/proto/v5X0ZgN9ES9fcARq9MJ5OJ/Freshly-Dropped-App?node-id=26-23&p=f&t=gCMSFccKh0mcEnxg-1&scaling=scale-down&content-scaling=fixed&page-id=26%3A22&starting-point-node-id=26%3A23',
      }}
      situation={{
        label: 'Situation',
        name: 'The Brief',
        text: "Freshly Dropped, a meal kit delivery service, wanted to expand their offering by creating a standalone recipe app. Users needed the ability to browse recipes, filter by dietary preferences, save favorites, and seamlessly transition from recipe discovery to ingredient ordering, whether through Freshly Dropped's service or their own grocery shopping.",
        images: [cover],
        layout: 'row',
      }}
      task={{
        label: 'Task',
        name: 'My Approach',
        text: "I designed a mobile-first interface that balances inspiration with functionality. The app needed to serve two user paths: those cooking with ingredients they already have, and those who want the convenience of doorstep delivery. I focused on creating an intuitive navigation system with quick-access filters, a smart shopping list that groups ingredients by recipe, and clear calls-to-action that guide users toward ordering without being pushy.",
        images: [home],
        layout: 'row',
      }}
      actions={[
        {
          label: 'Actions',
          name: 'Key Insights',
          text: "I chose a light green color palette to reinforce the \"fresh\" brand identity while maintaining readability and accessibility. The typography-focused logo keeps the brand name prominent without relying on overused food iconography — it leans on the unique naming of the brand and integrates the color palette to place it firmly in the industry's space. The typography was intentionally chosen to be friendly and inviting, but not overly simplistic or childish.",
          insights: [
            'Millennials are especially likely to use digital tools while cooking, with 59% regularly using a smartphone or tablet in the kitchen. This reinforces a mobile-first design, since the app needs to hold up to real, hands-on kitchen use, not just browsing on a couch',
            'Over 70% of adults use social platforms for recipe inspiration, meaning most competitors visuals lean heavily on food photography — a typography-forward brand identity helps Freshly Dropped stand out rather than blend into that same visual noise',
            'Meal kit and grocery delivery users are shifting toward younger, tech-comfortable demographics, reinforcing the need for a clean, modern interface rather than a more traditional recipe-card layout',
          ],
          layout: 'col',
        },
        {
          name: 'Wireframe',
          text: "I chose a light green color palette to reinforce the \"fresh\" brand identity while maintaining readability and accessibility. The typography-focused logo keeps the brand name prominent without relying on overused food iconography — it leans on the unique naming of the brand and integrates the color palette to place it firmly in the industry's space. The typography was intentionally chosen to be friendly and inviting, but not overly simplistic or childish.",
          images: [wireframe],
          layout: 'row',
        },
        {
          name: 'Design Decisions',
          text: "I chose a light green color palette to reinforce the \"fresh\" brand identity while maintaining readability and accessibility. The typography-focused logo keeps the brand name prominent without relying on overused food iconography — it leans on the unique naming of the brand and integrates the color palette to place it firmly in the industry's space. The typography was intentionally chosen to be friendly and inviting, but not overly simplistic or childish.",
          images: [designs, logo],
          layout: 'col',
        },
        {
          name: 'Browsing & Filtering',
          description: "A quick-access filter system lets users narrow recipes by dietary preference without breaking the browsing flow, keeping discovery fast and low-friction.",
          images: [filter, favorite],
          layout: 'row',
        },
        {
          name: 'From Recipe to Cart',
          description: "A smart shopping list groups ingredients by recipe, letting users move seamlessly from recipe discovery to ordering, whether through Freshly Dropped's delivery or their own grocery run.",
          images: [shopping],
          layout: 'row',
        },
      ]}
      results={[
        {
          label: 'Results',
          name: 'A Complete Experience',
          description: "The final app takes users from recipe discovery all the way to checkout, whether they're shopping through Freshly Dropped or building their own list, with filtering, favorites, and a smart shopping list working together as one connected flow.",
          images: [about],
          layout: 'row',
        },
      ]}
    />
  );
}