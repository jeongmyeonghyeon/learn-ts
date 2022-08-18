interface Hero {
  name: string;
  skill: string;
}

const hulk: Hero = {
  name: 'hulk',
  skill: 'steamed up',
};

const iron: Hero = {};

const capt = {} as Hero;
// capt.name = 'capt';
// capt.skill = 'shield';

const a: string | null;
a!; // non-null type assertion
