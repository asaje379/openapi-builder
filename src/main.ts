type Greeting = {
  author: string;
  target: string;
};

const a: Greeting = { author: 'John', target: 'Sarah' };

console.log(`[${a.author}]: Hi ${a.target}`);
