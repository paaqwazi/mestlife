export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);

  const N = (n) => Math.round( Math.random()*n )

  server.createList('timeline-item', N(50));
  server.createList('text-timeline-item', N(50));
}
