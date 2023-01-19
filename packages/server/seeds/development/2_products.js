/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del();
  await knex('products').insert([
    {
      category_id: 3,
      name: 'Flowy Blouse',
      description:
        'Printed flowy blouse. Slot collar. Long puff sleeves with pleated cuffs. Contrast embroidery detail. Buttoned front.',
      price: 50.5,
      imageUrl:
        'https://images.unsplash.com/photo-1618225747659-433d5a5c6af7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    },
    {
      category_id: 1,
      name: 'Straight-cut Jeans',
      description:
        'Fitted denim waistcoat with a straight-cut. Featuring false welt pockets and metal button fastening at the front.',
      price: 90.0,
      imageUrl:
        'https://images.unsplash.com/photo-1484186304838-0bf1a8cff81c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      category_id: 2,
      name: 'Casual Trousers',
      description:
        'Casual trousers with an adjustable inner waistband and elastic appliqué at the back. Front snap-button fastening. Contrast front pockets, patch pockets with flaps on the legs and back. Label appliqué.',
      price: 120.0,
      imageUrl:
        'https://images.unsplash.com/photo-1665180668151-38127eeb8cde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80',
    },
    {
      category_id: 4,
      name: 'Tailored-fit Jacket',
      description:
        'Tailored-fit jacket blazer made of a viscose blend. Lapel collar and long sleeves. Front flap pockets and a chest welt pocket. Matching lining. Button fastening at the front.',
      price: 90.7,
      imageUrl:
        'https://images.unsplash.com/photo-1640113540680-249084397058?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80',
    },
    {
      category_id: 3,
      name: 'Peplum Top',
      description:
        'Peplum top sleeveless round neck top with pearl bead appliqués on the front. Featuring a flared hem, invisible side zip fastening and button fastening at the back.',
      price: 70.5,
      imageUrl:
        'https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      category_id: 1,
      name: 'Ripped Black Jeans',
      description:
        'Ripped Black Jeans. Five-pocket design. Ripped details on the legs. Front zip fly and top button fastening.',
      price: 120.0,
      imageUrl:
        'https://images.unsplash.com/photo-1577210897949-1f56f943bf82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      category_id: 2,
      name: 'Cargo Trousers',
      description:
        'High waist cargo trousers with belt loops. Front pockets, patch pockets with flaps on the leg and welt pockets at the back. Straight leg. Front zip fly and top button fastening.',
      price: 80.0,
      imageUrl:
        'https://images.unsplash.com/photo-1662219708541-3a74d96330eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      category_id: 4,
      name: 'Bomber Jacket',
      description:
        'Bomber jacket with long cuffed sleeves. Featuring front pockets, a zip pocket on the chest, an elastic hem and front zip fastening hidden by a placket.',
      price: 150.0,
      imageUrl:
        'https://images.unsplash.com/photo-1490119551293-c52fcfd96381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      category_id: 3,
      name: 'Puff-sleeve Blouse',
      description:
        'Puff-sleeve blouse with a round neckline, long sleeves and tie detail at the back',
      price: 30.9,
      imageUrl:
        'https://images.unsplash.com/photo-1582255334378-4e9bc9505664?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      category_id: 3,
      name: 'Button-up Blouse',
      description:
        'Button-up blouse with long sleeves with flared cuffs, knotted hem with ties and a button-up front.',
      price: 25.5,
      imageUrl:
        'https://images.unsplash.com/photo-1658932447761-8a59cd02d201?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      category_id: 1,
      name: 'Washed Effect Jeans',
      description:
        'Washed Effect Jeans sleeveless waistcoat. Front fastening with contrast buttons.',
      price: 85.0,
      imageUrl:
        'https://images.unsplash.com/photo-1590000011709-0a60809e0069?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      category_id: 2,
      name: 'Jersey Trousers',
      description:
        'Jersey trousers with an elastic waistband. Side pockets and patch pockets with flaps on the leg',
      price: 60.5,
      imageUrl:
        'https://images.unsplash.com/photo-1519167130418-c3640bd21b7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      category_id: 4,
      name: 'Padded Neon Jacket',
      description:
        'Padded neon jacket with feathers and down filling. High neck with hood and long sleeves with inner cuffs. Pockets with hidden zips on the front. Belt with metallic buckle. Snap-button fastening on the front',
      price: 110.3,
      imageUrl:
        'https://images.unsplash.com/photo-1591729458470-00f6ff7b3073?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      category_id: 1,
      name: 'Mom Jeans',
      description:
        'Mom Jeans high-waist shorts with a five-pocket design. Turn-up hems. Front metal button fastening.',
      price: 75.0,
      imageUrl:
        'https://images.unsplash.com/photo-1563244927-7e9fea8c73ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      category_id: 2,
      name: 'Formal Navy Trousers',
      description:
        'Formal navy trousers made of a wool blend. Belt loops. Front pockets, patch pockets with flaps on the leg and rear patch pockets. Front zip fly and button fastening.',
      price: 130.0,
      imageUrl:
        'https://images.unsplash.com/photo-1524041255072-7da0525d6b34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      category_id: 4,
      name: 'Teddy Bear Jacket',
      description:
        'Jacket featuring a bear pattern, long sleeves with elastic trim, front pockets, adjustable waist with elastic drawstring and stopper, matching interior lining and front metal zip fastening',
      price: 150.0,
      imageUrl:
        'https://images.unsplash.com/photo-1667104445036-a3bd1c8333f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
  ]);
};

// categories
// 1 { name: 'jeans' }
// 2 { name: 'trousers' }
// 3 { name: 'blouses' }
// 4 { name: 'jackets' }
