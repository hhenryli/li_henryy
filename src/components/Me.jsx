import { useEffect } from 'react';
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

    const interval = setInterval(() => {
      if (!rive.viewModelInstance) return;

      const vm = rive.viewModelInstance;

      if (
        vm.boolean('hoverAlbum').value ||
        vm.boolean('hoverHeadphones').value
      ) {
        onHoverChange('album');
      } else if (vm.boolean('hoverCamera').value) {
        onHoverChange('camera');
      } else if (vm.boolean('hoverCat').value) {
        onHoverChange('cat');
      } else if (vm.boolean('hoverPerson').value) {
        onHoverChange('person');
      } else if (vm.boolean('hoverCoffee').value) {
        onHoverChange('coffee');
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
        height: '100%',
        display: 'block',
      }}
    />
  );
}

export default function Me({ onHoverChange }) {
  return (
    <RiveAnimation onHoverChange={onHoverChange} />
  );
}