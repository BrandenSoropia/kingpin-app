export const mockFormattedTricks = [
  {
    id: "trick-0",
    name: "Pushing/Riding",

    description:
      "Pushing is the act of simply hopping on your board and pushing so you can ride your board with enough speed. It’s literally what gets you rolling and up to speed when learning how to skate.",
    links: ["https://brailleskateboarding.com/how-to-push-on-a-skateboard/"],
  },
  {
    id: "trick-1",
    name: "Ollie",

    description:
      "Drop your back leg and ankle, popping your tail on the ground with the ball of your back foot while you simultaneously bend your front knee, lifting your front leg up and rolling your front ankle so the front part of your foot can grab that grip tape and pull the board into the air.\n\nYour back foot jumps up off the ground as soon as the board pops and your front foot begins the drag up the grip tape. Once your board has reached the peak of the Ollie, keep your back foot moving up while you push your front foot forward and this will level out your Ollie in the air.  Getting that step down well will greatly increase the height of your Ollie.",
    links: ["https://brailleskateboarding.com/how-to-ollie-by-aaron-kyro/"],
  },
  {
    id: "trick-2",
    name: "Frontside 180",

    description:
      "A Frontside 180 Ollie is an Ollie with a 180-degree turn. The body and the board jump and turn together in a frontward motion exposing the front part of your body first, hence the name “Frontside”.\n\nThis trick is a useful foundation and will come in handy for a whole bunch of other tricks like FS Flips or BS Noseslides.",
    links: ["https://brailleskateboarding.com/how-to-frontside-180-2/"],
  },
  {
    id: "trick-3",
    name: "Backside 180",

    description:
      "A Backside 180 Ollie is an Ollie with a 180 degree turn but where the body and board move in a backward motion with the back of your body exposing first as you do the turn, hence the name “Backside”. This is the opposite direction and motion of the Frontside 180 Ollie.",
    links: ["https://brailleskateboarding.com/how-to-backside-180/"],
  },
  {
    id: "trick-4",
    name: "Shuvit",

    description:
      "This trick is a classic one. Shuvits are achieved by using your back foot to pop and spin the skateboard around 180 degrees in the air while you stay neutral above it.\n\nThe Shuvit by default is Backside, meaning the tail of the board would spin away from your back-foot’s heel side. A fun alternative to this trick would be a Shuvit, which is the same trick with no the pop of the tail.",
    links: ["https://brailleskateboarding.com/how-to-pop-shove-it-2/"],
  },
  {
    id: "trick-5",
    name: "Pop Shuvit",

    description:
      "This trick is a classic one. Pop Shove its are achieved by using your back foot to pop and spin the skateboard around 180 degrees in the air while you stay neutral above it.\n\nThe Pop Shove it by default is Backside, meaning the tail of the board would spin away from your back-foot’s heel side. A fun alternative to this trick would be a Shove-It, which is the same trick with no the pop of the tail.",
    links: ["https://brailleskateboarding.com/how-to-pop-shove-it-2/"],
  },
  {
    id: "trick-6",
    name: "Heel Flip",

    description:
      "Heelflips are achieved by combining an ollie and a kick towards the front-foot’s toe-side corner of the skateboard. When done properly, the board flips under you one full rotation along the board’s length-axis. The heelflip is one of the best in skateboarding, but also one of the most difficult.",
    links: ["https://brailleskateboarding.com/how-to-heelflip/"],
  },
  {
    id: "trick-7",
    name: "Kick Flip",

    description:
      "The Kickflip is achieved by combining an Ollie and a kick-flick motion towards the front-foot’s heel-side corner of the skateboard. This makes the board flip toward the heel, along the board’s length-axis.",
    links: ["https://brailleskateboarding.com/how-to-kickflip/"],
  },
];

export const mockSelectedTrick = mockFormattedTricks[1];

export const mockAppState = {
  trickTracker: {
    tricks: mockFormattedTricks,
    selectedTrickId: mockSelectedTrick.id,
  },
};
