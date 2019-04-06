
// link for mobile data -> https://www.91mobiles.com/latest-mobiles-in-india 

var cy = cytoscape({
  container: document.getElementById('cy'),

  elements: {
    nodes: [
        {
            data: {
                id: 0,
                name: 'Phones'
            }
        },
        {
            data: {
                // parent: 0,
                id: 1,
                name: "Apple iPhone XS Max",
                cost: 104999,   // In Indian Rupees
                ram: 4,
                storage: 64,
                battery: 3174,
                description: "The Apple iPhone XS Max is a premium device that offers all premium features. The camera is capable of clicking pictures of high qualities. The display is perfect for gaming and multimedia purposes and also comes with all kinds of damage protection. The battery on the device is ample. The performance is very impressive but the RAM is smaller in size than expected. The storage on the device is also insufficient."
            }
        },
        {
            data: {
                // parent: 0,
                id: 2,
                name: "Samsung Galaxy S10 Plus",
                cost: 73900,
                ram: 8,
                storage: 512,
                battery: 4100,
                description: "The Samsung Galaxy S10 Plus 512GB is another addition to the S10 series that comes with all the features. It has an efficient built of configuration that provides an amazing result. The cameras, storage and display are also amazing. Moreover, it is backed by a sufficient power supply that makes the entertainment going."
            }
        },
        {
            data: {
                // parent: 0,
                id: 3,
                name: "Huawei Mate 20 Pro",
                cost: 64990,
                ram: 6,
                storage: 128,
                battery: 4200,
                description: "With a flagship price-tag, the Huawei Mate 20 Pro is certainly is one, from that beautiful near bezel-less OLED screen which delivers true to life visuals to the formidable configuration underneath that powers this beast through any task and the most extensive apps with ease. The cameras are sporting a DSLR level quality without exaggeration and selfies on this phone will flatter you, and at last of course that battery with quick charging makes sure you don't have to think about charging this phone much, overall it is truly a desirable flagship."
            }
        },
        {
            data: {
                // parent: 0,
                id: 4,
                name: "Samsung Galaxy Note 9",
                cost: 67900,
                ram: 6,
                storage: 128,
                battery: 4000,
                description: "The Samsung Galaxy Note 9 does not only impress with its design but also with its powerful performance. The strong configuration outputs a great performance while playing gaming and doing multitasking. The camera quality is simply amazing and a good amount of storage is available for saving data. If you are looking forward to buy a stylish large-sized gadget loaded with features, the Samsung Galaxy Note 9 is a perfect choice."
            }
        },
        {
            data: {
                // parent: 0,
                id: 5,
                name: "OnePlus 6T",
                cost: 37999,
                ram: 6,
                storage: 128,
                battery: 3700,
                description: "The OnePlus 6T, being a baton-bearer of the company following the 6, is an amazing smartphone in almost every department. The configuration, amazing set of camera and the superfine display reveal its feature prowess. The battery is decent enough to provide a backup though out the day. The user will need to plug in the charger often if the smartphone is used a lot." 
            }
        }
    ],
    edges: [
        {
            data: {
                id: 'a',
                source: 0,
                target: 1
            }
        },
        {
            data: {
                id: 'b',
                source: 0,
                target: 2
            }
        },
        {
            data: {
                id: 'c',
                source: 0,
                target: 3
            }
        },
        {
            data: {
                id: 'd',
                source: 0,
                target: 4
            }
        },
        {
            data: {
                id: 'e',
                source: 0,
                target: 5
            }
        }
    ]
},

  style: [ // the stylesheet for the graph
      {
      selector: 'node',
      style: {
          'background-color': '#666',
          'label': 'data(name)',
          'shape': 'circle',
          'width': '40',
          'height': '40',
          'border-color': 'black',
          'border-width': '2'
      }
      },

      {
      selector: 'edge',
      style: {
          'width': 3,
          'line-color': '#ccc',
          'source-arrow-color': '#ccc',
          'source-arrow-shape': 'square',
          'line-style': 'dashed'
      }
      }
  ],

  layout: {
      name: 'circle',
      rows: 1
  },

  motionBlur: true
});

cy.on('tap', 'node', function(evt){
  var data = evt.target._private.data;

  if(data.id != 0) {
    cy.$('#1, #2, #3, #4, #5').removeStyle();
    cy.$('#'+data.id).style('border-color', 'red');
  
    $('.container .row .info .message').css("display", "none");
    $('.container .row .info .content').css("display", "block");
  
    $('.container .row .info .content .name .data').html(data.name);
    $('.container .row .info .content .cost .data').html("Rs " + data.cost);
    $('.container .row .info .content .ram .data').html(data.ram + "GB");
    $('.container .row .info .content .storage .data').html(data.storage + "GB");
    $('.container .row .info .content .battery .data').html(data.battery  + "mAh");
    $('.container .row .info .content .description .data').html(data.description);  
  } else {
    cy.$('#1, #2, #3, #4, #5').removeStyle();

    $('.container .row .info .message').css("display", "block");
    $('.container .row .info .content').css("display", "none");
  }
  
});

cy.$('#0').style('background-color', 'black');
cy.$('#0').unselectify();

// var j = cy.$('#0');
// cy.center( j );

// cy.$('#0').position({
//   x: 350,
//   y: 250
// });

// cy.$('#shivam').lock();

// cy.$('#c').visibility(false);