const data = [
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Beka', phone: '+44 888 654 2342', image: 'https://example.com/beka.jpg', selected: false },
    { name: 'Hoang', phone: '+44 888 654 2342', image: 'https://example.com/hoang.jpg', selected: false },
    { name: 'Su', phone: '+44 888 654 2342', image: 'https://example.com/su.jpg', selected: false },
    { name: 'Misha', phone: '+44 888 654 2342', image: 'https://example.com/misha.jpg', selected: false },
    { name: 'Chonky', phone: '+44 888 654 2342', image: 'https://example.com/chonky.jpg', selected: false },
    { name: 'Mattina', phone: '+44 888 654 2342', image: 'https://example.com/mattina.jpg', selected: false },
    { name: 'Mable', phone: '+44 888 654 2342', image: 'https://example.com/mable.jpg', selected: false },
    { name: 'Ceren', phone: '+44 888 654 2342', image: 'https://example.com/ceren.jpg', selected: false },
    { name: 'Emmanuel', phone: '+44 888 654 2342', image: 'https://example.com/emmanuel.jpg', selected: false },
    { name: 'Fannie', phone: '+44 888 654 2342', image: 'https://example.com/fannie.jpg', selected: false },
    { name: 'Grace', phone: '+44 888 654 2342', image: 'https://example.com/grace.jpg', selected: false },
    { name: 'Heng', phone: '+44 888 654 2342', image: 'https://example.com/heng.jpg', selected: false },
    { name: 'Janet', phone: '+44 888 654 2342', image: 'https://example.com/janet.jpg', selected: false },
    { name: 'Jess', phone: '+44 888 654 2342', image: 'https://example.com/jess.jpg', selected: false },
    { name: 'Jill', phone: '+44 888 654 2342', image: 'https://example.com/jill.jpg', selected: false },
    { name: 'Johnny', phone: '+44 888 654 2342', image: 'https://example.com/johnny.jpg', selected: false },
    { name: 'Lucas', phone: '+44 888 654 2342', image: 'https://example.com/lucas.jpg', selected: false },
    { name: 'Nick', phone: '+44 888 654 2342', image: 'https://example.com/nick.jpg', selected: false },
    { name: 'Onur', phone: '+44 888 654 2342', image: 'https://example.com/onur.jpg', selected: false },
    { name: 'Shane', phone: '+44 888 654 2342', image: 'https://example.com/shane.jpg', selected: false },
    { name: 'Tianyue', phone: '+44 888 654 2342', image: 'https://example.com/tianyue.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Beka', phone: '+44 888 654 2342', image: 'https://example.com/beka.jpg', selected: false },
    { name: 'Hoang', phone: '+44 888 654 2342', image: 'https://example.com/hoang.jpg', selected: false },
    { name: 'Su', phone: '+44 888 654 2342', image: 'https://example.com/su.jpg', selected: false },
    { name: 'Misha', phone: '+44 888 654 2342', image: 'https://example.com/misha.jpg', selected: false },
    { name: 'Chonky', phone: '+44 888 654 2342', image: 'https://example.com/chonky.jpg', selected: false },
    { name: 'Mattina', phone: '+44 888 654 2342', image: 'https://example.com/mattina.jpg', selected: false },
    { name: 'Mable', phone: '+44 888 654 2342', image: 'https://example.com/mable.jpg', selected: false },
    { name: 'Ceren', phone: '+44 888 654 2342', image: 'https://example.com/ceren.jpg', selected: false },
    { name: 'Emmanuel', phone: '+44 888 654 2342', image: 'https://example.com/emmanuel.jpg', selected: false },
    { name: 'Fannie', phone: '+44 888 654 2342', image: 'https://example.com/fannie.jpg', selected: false },
    { name: 'Grace', phone: '+44 888 654 2342', image: 'https://example.com/grace.jpg', selected: false },
    { name: 'Heng', phone: '+44 888 654 2342', image: 'https://example.com/heng.jpg', selected: false },
    { name: 'Janet', phone: '+44 888 654 2342', image: 'https://example.com/janet.jpg', selected: false },
    { name: 'Jess', phone: '+44 888 654 2342', image: 'https://example.com/jess.jpg', selected: false },
    { name: 'Jill', phone: '+44 888 654 2342', image: 'https://example.com/jill.jpg', selected: false },
    { name: 'Johnny', phone: '+44 888 654 2342', image: 'https://example.com/johnny.jpg', selected: false },
    { name: 'Lucas', phone: '+44 888 654 2342', image: 'https://example.com/lucas.jpg', selected: false },
    { name: 'Nick', phone: '+44 888 654 2342', image: 'https://example.com/nick.jpg', selected: false },
    { name: 'Onur', phone: '+44 888 654 2342', image: 'https://example.com/onur.jpg', selected: false },
    { name: 'Shane', phone: '+44 888 654 2342', image: 'https://example.com/shane.jpg', selected: false },
    { name: 'Tianyue', phone: '+44 888 654 2342', image: 'https://example.com/tianyue.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Beka', phone: '+44 888 654 2342', image: 'https://example.com/beka.jpg', selected: false },
    { name: 'Hoang', phone: '+44 888 654 2342', image: 'https://example.com/hoang.jpg', selected: false },
    { name: 'Su', phone: '+44 888 654 2342', image: 'https://example.com/su.jpg', selected: false },
    { name: 'Misha', phone: '+44 888 654 2342', image: 'https://example.com/misha.jpg', selected: false },
    { name: 'Chonky', phone: '+44 888 654 2342', image: 'https://example.com/chonky.jpg', selected: false },
    { name: 'Mattina', phone: '+44 888 654 2342', image: 'https://example.com/mattina.jpg', selected: false },
    { name: 'Mable', phone: '+44 888 654 2342', image: 'https://example.com/mable.jpg', selected: false },
    { name: 'Ceren', phone: '+44 888 654 2342', image: 'https://example.com/ceren.jpg', selected: false },
    { name: 'Emmanuel', phone: '+44 888 654 2342', image: 'https://example.com/emmanuel.jpg', selected: false },
    { name: 'Fannie', phone: '+44 888 654 2342', image: 'https://example.com/fannie.jpg', selected: false },
    { name: 'Grace', phone: '+44 888 654 2342', image: 'https://example.com/grace.jpg', selected: false },
    { name: 'Heng', phone: '+44 888 654 2342', image: 'https://example.com/heng.jpg', selected: false },
    { name: 'Janet', phone: '+44 888 654 2342', image: 'https://example.com/janet.jpg', selected: false },
    { name: 'Jess', phone: '+44 888 654 2342', image: 'https://example.com/jess.jpg', selected: false },
    { name: 'Jill', phone: '+44 888 654 2342', image: 'https://example.com/jill.jpg', selected: false },
    { name: 'Johnny', phone: '+44 888 654 2342', image: 'https://example.com/johnny.jpg', selected: false },
    { name: 'Lucas', phone: '+44 888 654 2342', image: 'https://example.com/lucas.jpg', selected: false },
    { name: 'Nick', phone: '+44 888 654 2342', image: 'https://example.com/nick.jpg', selected: false },
    { name: 'Onur', phone: '+44 888 654 2342', image: 'https://example.com/onur.jpg', selected: false },
    { name: 'Shane', phone: '+44 888 654 2342', image: 'https://example.com/shane.jpg', selected: false },
    { name: 'Tianyue', phone: '+44 888 654 2342', image: 'https://example.com/tianyue.jpg', selected: false },
  ]

  export default data;