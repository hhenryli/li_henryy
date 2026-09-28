import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

export function RiveAnimation({ onHoverChange }) {
  const { rive, RiveComponent } = useRive({
    src: "/interactive.riv",
    artboard: "Artboard 1",
    stateMachines: ["State Machine 1"],
    autoplay: true,
    autoBind: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  useEffect(() => {
    if (!rive) return;

    const vm = rive.viewModelInstance;

    vm.boolean('hoverAlbum').value = false;
    vm.boolean('hoverCamera').value = false;
    vm.boolean('hoverCat').value = false;
    vm.boolean('hoverPerson').value = false;
    vm.boolean('hoverCoffee').value = false;
    vm.boolean('hoverHeadphones').value = false;
    vm.boolean('hoverPainting').value = false;

    // Check the Rive hover values
    const interval = setInterval(() => {
      if (!rive.viewModelInstance) return;

      const vm = rive.viewModelInstance;

      if (vm.boolean('hoverAlbum').value) {
        onHoverChange('album');
      } else if (vm.boolean('hoverCamera').value) {
        onHoverChange('camera');
      } else if (vm.boolean('hoverCat').value) {
        onHoverChange('cat');
      } else if (vm.boolean('hoverPerson').value) {
        onHoverChange('person');
      } else if (vm.boolean('hoverCoffee').value) {
        onHoverChange('coffee');
      } else if (vm.boolean('hoverHeadphones').value) {
        onHoverChange('headphones');
      } else if (vm.boolean('hoverPainting').value) {
        onHoverChange('painting');
      } else {
        onHoverChange(null);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [rive, onHoverChange]);

  return (
    <RiveComponent
      style={{
        width: '100%',
        height: '400px',
  
      }}
    />
  );
}

export default function Me() {
  const [hovered, setHovered] = useState(null);

  const hoverText = {
    album: {
      title: '',
      description: `I LOVE listening to music and going to concerts. Recent albums I've been listening to: you seem sad for a girl so in love, brat, PRIMA, Piss in the Wind, Juna, Oh yeah?`,
    },
    camera: {
      title: 'Photography',
      description: 'Capturing moments and experimenting with photography.',
    },
    cat: {
      title: 'MOMO',
      description: `I have always had a soft spot for cats. This is my cat, Momo. She's super loud and meows a lot but I love her`,
    },
    person: {
      title: 'Me',
      description: `I'm curious, driven, and optimistic learner. I have many hobbies and interests and I love pursuing side passions/projects for the sake of interest.`,
    },
    coffee: {
      title: 'Coffee',
      description: 'A small but important part of my daily rituals.',
    },
    headphones: {
      title: 'Listening',
      description: 'Music is something I spend a lot of time with.',
    },
    painting: {
      title: 'Art',
      description: 'I have always been drawn to visual art and creative expression.',
    },
  };

  const content = hovered ? hoverText[hovered] : null;

  return (
    <div className="min-h-screen px-6 md:px-16 lg:px-64 py-24 flex flex-col items-center justify-center gap-4">

      {/* Rive */}
      <div className="w-full flex justify-center">
        <RiveAnimation onHoverChange={setHovered} />
      </div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <motion.div
          key={hovered}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <h1>
            {content?.title ?? 'About Me'}
          </h1>

          <h4>
            {content?.description ??
              `Hi, my name is Henry. Thanks for visiting my portfolio! Hover to see parts of who I am`}
          </h4>
        </motion.div>

        <Link
          to="/about"
          className="padding w-fit py-4 rounded-[32px] border border-[var(--text-secondary)]"
        >
          <p>More about me</p>
        </Link>
      </motion.div>

    </div>
  );
}