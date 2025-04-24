import Creature from './Creature';

export default function MultiCreatureBackground() {
  return (
    <div id="creature-wrapper">
      <Creature
        id="creature-one"
        colors={['#C173D3']}
        movement={{ xAmp: 0.25, yAmp: 0.25, xFreq: 0.0007, yFreq: 0.00012 }}
        initialPosition={{ x: 100, y: 150 }} // px from top-left
      />
      <Creature
        id="creature-two"
        colors={['#A169DD']}
        movement={{ xAmp: 0.4, yAmp: 0.15, xFreq: 0.001, yFreq: 0.00018 }}
        initialPosition={{ x: 600, y: 200 }}
      />
      <Creature
        id="creature-three"
        colors={['#AD7AE1']}
        movement={{ xAmp: 0.1, yAmp: 0.35, xFreq: 0.0005, yFreq: 0.00025 }}
        initialPosition={{ x: 300, y: 400 }}
      />
    </div>
  );
}
