const data = [
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
  ]

  export default data;